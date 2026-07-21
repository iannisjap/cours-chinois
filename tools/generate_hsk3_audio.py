#!/usr/bin/env python3
"""Génère l'ensemble des voix HSK3, partie par partie.

Ce script envoie le texte des cours à Microsoft Edge TTS. Il ne doit être
lancé qu'après l'autorisation explicite de l'utilisateur pour le HSK3.

Exemples :
  .venv-tts/bin/python tools/generate_hsk3_audio.py --plan
  .venv-tts/bin/python tools/generate_hsk3_audio.py
  .venv-tts/bin/python tools/generate_hsk3_audio.py --chapter 3 --part 2
"""

import argparse
import asyncio
import importlib.util
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
HSK3 = ROOT / "chapters/hsk3"


def load_tool(name: str, path: Path):
    spec = importlib.util.spec_from_file_location(name, path)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Impossible de charger {path}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


EDGE_AUDIO = load_tool("generate_edge_audio", ROOT / "tools/generate_edge_audio.py")
AUDIO_CATALOG = load_tool("build_audio_catalog", ROOT / "tools/build_audio_catalog.py")


def parse_args():
    parser = argparse.ArgumentParser(description="Générer les MP3 des 108 cours HSK3")
    parser.add_argument("--chapter", type=int, choices=range(1, 19), help="Limiter à une leçon HSK3")
    parser.add_argument("--part", type=int, choices=range(1, 7), help="Limiter à une partie")
    parser.add_argument("--plan", action="store_true", help="Afficher le travail prévu sans contacter Edge TTS")
    return parser.parse_args()


def jobs(chapter=None, part=None):
    for source in sorted(HSK3.glob("[0-9][0-9]-*.js")):
        chapter_num = int(source.name[:2])
        if chapter is not None and chapter_num != chapter:
            continue
        text = source.read_text(encoding="utf-8")
        chapter_id = re.search(r'id:\s*"(hsk3-[0-9]{2})"', text)
        if not chapter_id:
            raise ValueError(f"Identifiant HSK3 introuvable dans {source}")
        for part_num in range(1, 7):
            if part is not None and part_num != part:
                continue
            output = ROOT / "audio" / f"{chapter_id.group(1)}-{part_num}"
            yield source, text, chapter_id.group(1), part_num, output


async def run(args):
    planned = list(jobs(args.chapter, args.part))
    if not planned:
        raise SystemExit("Aucun cours HSK3 à traiter")

    if args.plan:
        total = 0
        for source, text, chapter_id, part_num, output in planned:
            count = len(EDGE_AUDIO.collect_segments(text, part_num, "hsk3"))
            total += count
            print(f"{chapter_id} · partie {part_num}: {count} segments -> {output.relative_to(ROOT)}")
        print(f"Plan validé : {len(planned)} cours, {total} segments audio.")
        return

    for index, (source, _text, chapter_id, part_num, output) in enumerate(planned, 1):
        print(f"\n=== [{index}/{len(planned)}] {chapter_id} · partie {part_num} ===")
        await EDGE_AUDIO.main(source, part_num, output)
        # Le lecteur local peut ainsi utiliser immédiatement chaque partie
        # terminée, même si une longue génération est interrompue plus tard.
        AUDIO_CATALOG.main()

    print(f"HSK3 terminé : {len(planned)} cours générés et catalogue à jour.")


if __name__ == "__main__":
    asyncio.run(run(parse_args()))
