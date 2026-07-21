#!/usr/bin/env python3
"""Génère les voix du Bonus 5, après autorisation Edge TTS explicite."""

import argparse
import asyncio
import importlib.util
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "chapters/bonus/syntaxe.js"


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
    parser = argparse.ArgumentParser(description="Générer les 18 épisodes du Bonus 5")
    parser.add_argument("--part", type=int, choices=range(1, 19), help="Limiter à un épisode")
    parser.add_argument("--plan", action="store_true", help="Contrôler le plan sans contacter Edge TTS")
    return parser.parse_args()


async def run(args):
    source_text = SOURCE.read_text(encoding="utf-8")
    parts = [args.part] if args.part else list(range(1, 19))
    total = 0
    for part in parts:
        count = len(EDGE_AUDIO.collect_segments(source_text, part, ""))
        total += count
        output = ROOT / "audio/bonus/05" / str(part)
        if args.plan:
            print(f"Bonus 5 · épisode {part}: {count} segments -> {output.relative_to(ROOT)}")
            continue
        print(f"\n=== Bonus 5 · épisode {part}/{parts[-1]} ===")
        await EDGE_AUDIO.main(SOURCE, part, output)
        AUDIO_CATALOG.main()
    if args.plan:
        print(f"Plan validé : {len(parts)} épisodes, {total} segments audio.")
    else:
        print(f"Bonus 5 terminé : {len(parts)} épisodes générés et catalogue à jour.")


if __name__ == "__main__":
    asyncio.run(run(parse_args()))
