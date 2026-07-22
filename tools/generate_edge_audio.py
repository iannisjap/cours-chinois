#!/usr/bin/env python3
"""Génère les MP3 Edge TTS et le manifeste d'une partie de cours.

Usage :
  .venv-tts/bin/python tools/generate_edge_audio.py chapters/hsk1/01-bonjour.js 1 audio/hsk1-01-1
"""

import asyncio
import hashlib
import json
import os
import re
import sys
from pathlib import Path

import edge_tts

FR_VOICE = "fr-CH-ArianeNeural"
ZH_VOICE = "zh-CN-XiaoxiaoNeural"
MAX_ATTEMPTS = 6
MAX_CONCURRENT = max(1, int(os.environ.get("TTS_CONCURRENCY", "4")))
# Pipeline direct validé : Edge TTS produit le MP3 final, sans demander les
# frontières de mots, sans ajout de silence et sans réencodage par ffmpeg.
ZH_RATE = os.environ.get("ZH_RATE", "-20%")
ZH_PROFILE = "direct-v1"


def js_string(value: str) -> str:
    return json.loads('"' + value + '"')


def narration_segments(text: str):
    tagged = re.compile(r"\[\[([^|\]]+)\|[^\]]+\]\]")
    cjk = re.compile(r"[\u4e00-\u9fff]+")

    def bare(part: str):
        last = 0
        for match in cjk.finditer(part):
            if match.start() > last:
                yield "fr", part[last:match.start()]
            yield "zh", match.group(0)
            last = match.end()
        if last < len(part):
            yield "fr", part[last:]

    last = 0
    for match in tagged.finditer(text):
        if match.start() > last:
            yield from bare(text[last:match.start()])
        yield "zh", match.group(1)
        last = match.end()
    if last < len(text):
        yield from bare(text[last:])


def hanzi_length(text: str) -> int:
    return len(re.findall(r"[\u4e00-\u9fff]", text))


def split_hsk2_long_phrase(phrase):
    zh, py, fr = phrase
    clean = lambda values: [value.strip() for value in values if value.strip()]
    zh_parts = clean(re.split(r"[，。！？；：]+", zh))
    py_parts = clean(re.split(r"[,，.!?;:。！？；：]+", py))
    fr_parts = clean(re.split(r"[,;:.!?]+", fr))
    if not 2 <= len(zh_parts) <= 4 or len(zh_parts) != len(fr_parts):
        return None
    if py and len(zh_parts) != len(py_parts):
        return None
    if any(hanzi_length(part) < 2 for part in zh_parts):
        return None
    return zh_parts


def collect_segments(source: str, part: int, course_group: str = ""):
    marker = f"// ================= PARTIE {part} ================="
    start = source.find(marker)
    if start != -1:
        next_marker = source.find(f"// ================= PARTIE {part + 1} =================", start + 1)
        end = next_marker if next_marker != -1 else len(source)
        # Les exercices (num:4) suivent parfois directement la partie 3 sans
        # commentaire PARTIE 4 : ils constituent une leçon distincte.
        if next_marker == -1:
            exercise = re.search(r'\{\s*num\s*:\s*4\s*,', source[start + 1:])
            if exercise:
                end = start + 1 + exercise.start()
        section = source[start:end]
    else:
        # Les anciens bonus regroupent leurs leçons dans un tableau d'objets
        # { num: 1, ..., build(){ return [...] } } sans marqueur PARTIE.
        lesson = re.search(rf"\{{\s*num\s*:\s*{part}\s*,", source)
        if not lesson:
            raise ValueError(f"Leçon {part} introuvable dans le fichier")
        start = lesson.start()
        following = re.search(rf"\{{\s*num\s*:\s*{part + 1}\s*,", source[lesson.end():])
        end = lesson.end() + following.start() if following else len(source)
        section = source[start:end]
    items = []
    # Les chaînes de ce projet n'utilisent pas de guillemet double non échappé.
    pattern = re.compile(r'\b(N|C|teach2|teach|drill)\(\s*"((?:[^"\\]|\\.)*)"(?:\s*,\s*"((?:[^"\\]|\\.)*)")?(?:\s*,\s*"((?:[^"\\]|\\.)*)")?(?:\s*,[^)]*)?\)')
    direct_phrases = []
    for kind, one, two, three in pattern.findall(section):
        if kind == "N":
            for lang, text in narration_segments(js_string(one)):
                # Les fragments situés entre deux balises chinoises peuvent ne
                # contenir qu'un signe de ponctuation. Edge TTS ne renvoie pas
                # d'audio pour « . » ou « : » seuls : on les ignore.
                if text.strip() and any(char.isalnum() for char in text):
                    items.append((lang, text.strip()))
        elif kind == "C":
            zh, py, fr = js_string(one), js_string(two), js_string(three)
            items.append(("zh", zh))
            if course_group in {"hsk1", "hsk2"} and part != 4 and fr and all(zh != phrase[0] for phrase in direct_phrases):
                direct_phrases.append((zh, py, fr))
        elif kind == "drill":
            # drill(promptFr, chinois, pinyin, traduction) produit lui aussi
            # une consigne française et deux étapes chinoises dans le lecteur.
            for lang, text in narration_segments(js_string(one)):
                if text.strip() and any(char.isalnum() for char in text):
                    items.append((lang, text.strip()))
            items.append(("zh", js_string(two)))
        else:  # teach / teach2 : plusieurs lectures, un seul MP3 suffit.
            items.append(("zh", js_string(one)))

    # Le HSK3 emploie des helpers plus compacts : le pinyin est généré dans un
    # dictionnaire séparé, mais les textes français et chinois restent ici
    # directement accessibles au pipeline audio.
    hsk3_pattern = re.compile(r'\b(HC|h3teach|h3drill)\(\s*"((?:[^"\\]|\\.)*)"(?:\s*,\s*"((?:[^"\\]|\\.)*)")?(?:\s*,\s*"((?:[^"\\]|\\.)*)")?(?:\s*,[^)]*)?\)')
    for kind, one, two, three in hsk3_pattern.findall(section):
        if kind == "HC":
            zh, fr = js_string(one), js_string(two)
            items.append(("zh", zh))
            if part != 6 and fr and all(zh != phrase[0] for phrase in direct_phrases):
                direct_phrases.append((zh, "", fr))
        elif kind == "h3teach":
            items.append(("zh", js_string(one)))
        else:
            for lang, text in narration_segments(js_string(one)):
                if text.strip() and any(char.isalnum() for char in text):
                    items.append((lang, text.strip()))
            items.append(("zh", js_string(two)))

    # Le Bonus 5 emploie un dictionnaire de pinyin comme le HSK3, avec des
    # helpers dédiés afin que les 18 épisodes restent lisibles et faciles à
    # auditer. Les consignes de b5drill sont parlées avant la correction.
    bonus5_pattern = re.compile(r'\b(B5C|b5teach|b5drill|b5item)\(\s*"((?:[^"\\]|\\.)*)"(?:\s*,\s*"((?:[^"\\]|\\.)*)")?(?:\s*,\s*"((?:[^"\\]|\\.)*)")?(?:\s*,[^)]*)?\)')
    for kind, one, two, _three in bonus5_pattern.findall(section):
        if kind == "B5C":
            items.append(("zh", js_string(one)))
        elif kind == "b5teach":
            items.append(("zh", js_string(one)))
        else:
            for lang, text in narration_segments(js_string(one)):
                if text.strip() and any(char.isalnum() for char in text):
                    items.append((lang, text.strip()))
            items.append(("zh", js_string(two)))

    if course_group in {"hsk2", "hsk3"}:
        long_phrase = next((phrase for phrase in direct_phrases if hanzi_length(phrase[0]) > 18 and split_hsk2_long_phrase(phrase)), None)
        if long_phrase:
            items.append(("fr", "Construction guidée. Cette phrase est longue : entraînez-vous d'abord par groupes de sens."))
            items.extend(("zh", part) for part in split_hsk2_long_phrase(long_phrase))
            items.append(("fr", "Maintenant, reconstruisez toute la phrase : " + long_phrase[2]))
        direct_phrases = [phrase for phrase in direct_phrases if hanzi_length(phrase[0]) <= (20 if course_group == "hsk3" else 18)]
    learning_part = part != 4 if course_group in {"hsk1", "hsk2"} else part != 6
    if course_group in {"hsk1", "hsk2", "hsk3"} and learning_part and len(direct_phrases) >= 3:
        picks = [direct_phrases[0], direct_phrases[len(direct_phrases) // 2], direct_phrases[-1]]
        for _, _, fr in picks:
            items.append(("fr", "Rappel espacé. Dites en chinois : " + fr))
    # Le moteur recherche par texte : les doublons doivent partager le même MP3.
    return list(dict.fromkeys(items))


async def main(source_file: Path, part: int, output: Path):
    output.mkdir(parents=True, exist_ok=True)
    source_path = source_file.as_posix()
    course_group = (
        "hsk1" if "chapters/hsk1/" in source_path else
        "hsk2" if "chapters/hsk2/" in source_path else
        "hsk3" if "chapters/hsk3/" in source_path else ""
    )
    items = collect_segments(source_file.read_text(encoding="utf-8"), part, course_group)
    items = list(dict.fromkeys(items))
    semaphore = asyncio.Semaphore(MAX_CONCURRENT)

    async def render_item(index, item):
        lang, text = item
        voice = FR_VOICE if lang == "fr" else ZH_VOICE
        # La voix et le profil de diction font partie du nom : un changement
        # de production ne peut pas réutiliser un ancien MP3 du navigateur.
        profile = f"{ZH_PROFILE},rate={ZH_RATE}" if lang == "zh" else None
        digest_source = f"{voice}|{lang}|{profile}|{text}" if profile else f"{voice}|{lang}|{text}"
        digest = hashlib.sha256(digest_source.encode()).hexdigest()[:12]
        stem = f"{lang}-{digest}"
        target = output / f"{stem}.mp3"
        rate = ZH_RATE if lang == "zh" else "+0%"
        if target.exists() and target.stat().st_size >= 1000:
            print(f"[{index}/{len(items)}] {lang}: déjà présent")
            return f"{lang}|{text}", stem

        async with semaphore:
            print(f"[{index}/{len(items)}] {lang}: {text[:72]}")
            for attempt in range(1, MAX_ATTEMPTS + 1):
                try:
                    target.unlink(missing_ok=True)
                    await edge_tts.Communicate(text, voice=voice, rate=rate).save(str(target))
                    if target.stat().st_size < 1000:
                        raise RuntimeError("fichier audio vide ou incomplet")
                    break
                except Exception as exc:
                    target.unlink(missing_ok=True)
                    if attempt == MAX_ATTEMPTS:
                        raise
                    delay = min(2 ** (attempt - 1), 12)
                    print(f"  tentative {attempt}/{MAX_ATTEMPTS} échouée ({exc}); reprise dans {delay} s")
                    await asyncio.sleep(delay)
        return f"{lang}|{text}", stem

    rendered = await asyncio.gather(*(
        render_item(index, item) for index, item in enumerate(items, 1)
    ))
    lookup = dict(rendered)
    (output / "manifest.json").write_text(
        json.dumps({"lookup": lookup}, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    keep = {stem + ".mp3" for stem in lookup.values()}
    for old_audio in list(output.glob("fr-*.mp3")) + list(output.glob("zh-*.mp3")):
        if old_audio.name not in keep:
            old_audio.unlink()
    print(f"Terminé : {len(items)} segments dans {output}")


if __name__ == "__main__":
    if len(sys.argv) != 4:
        raise SystemExit("Usage: generate_edge_audio.py SOURCE PARTIE DOSSIER_SORTIE")
    asyncio.run(main(Path(sys.argv[1]), int(sys.argv[2]), Path(sys.argv[3])))
