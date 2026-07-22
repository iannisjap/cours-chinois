#!/usr/bin/env python3
"""Génère les MP3 des deux sous-dossiers pratiques du Bonus 5."""

import argparse
import asyncio
import importlib.util
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
COURSES = {
    "production": (
        ROOT / "chapters/bonus/syntaxe-production.js",
        ROOT / "audio/bonus/05/production",
        "Bonus 5A · ateliers de phrases",
    ),
    "dialogues": (
        ROOT / "chapters/bonus/syntaxe-dialogues.js",
        ROOT / "audio/bonus/05/dialogues",
        "Bonus 5B · dialogues guidés",
    ),
}


def load_tool(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Impossible de charger {path}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


EDGE_AUDIO = load_tool("generate_edge_audio", ROOT / "tools/generate_edge_audio.py")
AUDIO_CATALOG = load_tool("build_audio_catalog", ROOT / "tools/build_audio_catalog.py")


def parse_args():
    parser = argparse.ArgumentParser(
        description="Générer les 30 leçons pratiques du Bonus 5"
    )
    parser.add_argument(
        "--section",
        choices=COURSES,
        help="Limiter la génération aux ateliers ou aux dialogues",
    )
    parser.add_argument(
        "--part", type=int, choices=range(1, 16), help="Limiter à une leçon"
    )
    parser.add_argument(
        "--plan", action="store_true", help="Contrôler le plan sans contacter Edge TTS"
    )
    return parser.parse_args()


async def run(args):
    sections = [args.section] if args.section else list(COURSES)
    parts = [args.part] if args.part else list(range(1, 16))
    total = 0
    for section in sections:
        source, output_base, label = COURSES[section]
        source_text = source.read_text(encoding="utf-8")
        for part in parts:
            count = len(EDGE_AUDIO.collect_segments(source_text, part, ""))
            total += count
            output = output_base / str(part)
            if args.plan:
                print(f"{label} · leçon {part}: {count} segments -> {output.relative_to(ROOT)}")
                continue
            print(f"\n=== {label} · leçon {part}/{parts[-1]} ===")
            await EDGE_AUDIO.main(source, part, output)
    if args.plan:
        print(f"Plan validé : {len(sections) * len(parts)} leçons, {total} segments audio.")
    else:
        AUDIO_CATALOG.main()
        print(
            f"Bonus 5 pratique terminé : {len(sections) * len(parts)} leçons "
            "générées et catalogue à jour."
        )


if __name__ == "__main__":
    asyncio.run(run(parse_args()))
