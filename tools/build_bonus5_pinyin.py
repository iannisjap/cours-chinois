#!/usr/bin/env python3
"""Construit le dictionnaire de pinyin du Bonus 5 sur la syntaxe."""

import importlib.util
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCES = [
    ROOT / "chapters/bonus/syntaxe.js",
    ROOT / "chapters/bonus/syntaxe-production.js",
    ROOT / "chapters/bonus/syntaxe-dialogues.js",
]
OUTPUT = ROOT / "chapters/bonus/syntaxe-pinyin.js"


def load_hsk3_builder():
    path = ROOT / "tools/build_hsk3_pinyin.py"
    spec = importlib.util.spec_from_file_location("hsk3_pinyin_builder", path)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Impossible de charger {path}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def decode_js(value: str) -> str:
    return json.loads('"' + value + '"')


def main():
    first_arg = re.compile(r'\b(?:B5C|b5teach)\(\s*"((?:[^"\\]|\\.)*)"')
    second_arg = re.compile(r'\b(?:b5drill|b5item)\(\s*"(?:[^"\\]|\\.)*"\s*,\s*"((?:[^"\\]|\\.)*)"')
    phrases = set()
    for source in SOURCES:
        text = source.read_text(encoding="utf-8")
        phrases.update(decode_js(value) for value in first_arg.findall(text))
        phrases.update(decode_js(value) for value in second_arg.findall(text))
    builder = load_hsk3_builder()
    lookup = {phrase: builder.make_pinyin(phrase) for phrase in sorted(phrases)}
    OUTPUT.write_text(
        "/* Généré par tools/build_bonus5_pinyin.py — ne pas modifier. */\n"
        "const BONUS5_PINYIN = "
        + json.dumps(lookup, ensure_ascii=False, separators=(",", ":"))
        + ";\n",
        encoding="utf-8",
    )
    print(f"{len(lookup)} phrases écrites dans {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
