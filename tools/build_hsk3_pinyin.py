#!/usr/bin/env python3
"""Construit le dictionnaire de pinyin des leçons HSK3."""

import json
import re
from pathlib import Path

from pypinyin import Style, lazy_pinyin, load_phrases_dict


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "chapters/hsk3"
OUTPUT = SOURCE / "pinyin.js"

load_phrases_dict({
    "长得": [["zhǎng"], ["de"]],
    "过得": [["guò"], ["de"]],
    "跑得": [["pǎo"], ["de"]],
    "写得": [["xiě"], ["de"]],
    "做得": [["zuò"], ["de"]],
    "说得": [["shuō"], ["de"]],
    "学得": [["xué"], ["de"]],
    "打得": [["dǎ"], ["de"]],
    "踢得": [["tī"], ["de"]],
    "游得": [["yóu"], ["de"]],
    "唱得": [["chàng"], ["de"]],
    "玩得": [["wán"], ["de"]],
    "睡得": [["shuì"], ["de"]],
    "赢得": [["yíng"], ["dé"]],
    "想好": [["xiǎng"], ["hǎo"]],
    "选好": [["xuǎn"], ["hǎo"]],
})


def decode_js(value: str) -> str:
    return json.loads('"' + value + '"')


def make_pinyin(text: str) -> str:
    syllables = lazy_pinyin(
        text,
        style=Style.TONE,
        neutral_tone_with_five=False,
        errors=lambda chars: list(chars),
    )
    # pypinyin lit souvent 得 comme dé hors dictionnaire. Dans les cours,
    # 得 est neutre après un verbe/adjectif, děi lorsqu'il signifie « devoir »,
    # et dé seulement dans 得到 / 得分.
    if len(syllables) == len(text):
        for index, char in enumerate(text):
            if char == "教" and text[index + 1:index + 2] == "汉":
                syllables[index] = "jiāo"
            if char == "地":
                lexical_after = text[index:index + 2] in {"地方", "地图", "地铁", "地点"}
                lexical_before = text[max(0, index - 1):index + 1] in {"当地", "外地", "草地"}
                if not lexical_after and not lexical_before:
                    syllables[index] = "de"
            if char != "得":
                continue
            following = text[index:index + 2]
            previous = text[index - 1] if index else ""
            if following == "得到" and previous == "做":
                syllables[index] = "de"
            elif following in {"得到", "得分"} or previous == "赢":
                syllables[index] = "dé"
            elif previous in "我你他她它们还就，。！？；：":
                syllables[index] = "děi"
            else:
                syllables[index] = "de"
    result = " ".join(syllables)
    result = re.sub(r"\s+([，。！？；：,.!?;:])", r"\1", result)
    result = result.translate(str.maketrans("，。！？；：", ",.!?;:"))
    for source, target in (
        ("yǒu diǎn ér", "yǒudiǎnr"), ("yǒu diǎn er", "yǒudiǎnr"),
        ("yī diǎn ér", "yìdiǎnr"), ("yī diǎn er", "yìdiǎnr"),
        ("yì diǎn ér", "yìdiǎnr"), ("yì diǎn er", "yìdiǎnr"),
        ("yī huì ér", "yíhuìr"), ("yī huì er", "yíhuìr"),
        ("yí huì ér", "yíhuìr"), ("yí huì er", "yíhuìr"),
        ("liáo tiān ér", "liáotiānr"), ("liáo tiān er", "liáotiānr"),
        ("wán ér", "wánr"), ("wán er", "wánr"),
        ("diǎn ér", "diǎnr"), ("diǎn er", "diǎnr"),
        ("nǎ ér", "nǎr"), ("nǎ er", "nǎr"),
    ):
        result = result.replace(source, target)
    return result[:1].upper() + result[1:]


def main() -> None:
    phrases = set()
    first_arg = re.compile(r'\b(?:HC|h3teach)\(\s*"((?:[^"\\]|\\.)*)"')
    second_arg = re.compile(r'\bh3drill\(\s*"(?:[^"\\]|\\.)*"\s*,\s*"((?:[^"\\]|\\.)*)"')
    for source in sorted(SOURCE.glob("[0-9]*.js")):
        text = source.read_text(encoding="utf-8")
        phrases.update(decode_js(value) for value in first_arg.findall(text))
        phrases.update(decode_js(value) for value in second_arg.findall(text))
    lookup = {phrase: make_pinyin(phrase) for phrase in sorted(phrases)}
    OUTPUT.write_text(
        "/* Généré par tools/build_hsk3_pinyin.py — ne pas modifier. */\n"
        "const HSK3_PINYIN = " + json.dumps(lookup, ensure_ascii=False, separators=(",", ":")) + ";\n",
        encoding="utf-8",
    )
    print(f"{len(lookup)} phrases HSK3 écrites dans {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
