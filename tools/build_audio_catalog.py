#!/usr/bin/env python3
"""Regroupe les manifestes audio dans un script utilisable depuis file://."""

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
AUDIO = ROOT / "audio"
OUTPUT = AUDIO / "catalog.js"


def main() -> None:
    catalog = {}
    for manifest in sorted(AUDIO.rglob("manifest.json")):
        data = json.loads(manifest.read_text(encoding="utf-8"))
        base = manifest.parent.relative_to(ROOT).as_posix()
        catalog[base] = data["lookup"]

    payload = json.dumps(catalog, ensure_ascii=False, separators=(",", ":"))
    OUTPUT.write_text(
        "/* Généré par tools/build_audio_catalog.py — ne pas modifier. */\n"
        "window.AUDIO_CATALOG=" + payload + ";\n",
        encoding="utf-8",
    )
    print(f"{len(catalog)} manifestes regroupés dans {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
