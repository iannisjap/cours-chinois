#!/usr/bin/env node
/* Calcule les exercices comme le navigateur et renvoie leurs blocs audio. */
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const TileExercises = require('../engine/tile-exercises.js');

const sourceFile = process.argv[2];
const lessonNumber = Number(process.argv[3]);
if (!sourceFile || !lessonNumber) {
  console.error('Usage: node tools/export_tile_audio.cjs SOURCE LEÇON');
  process.exit(2);
}

let chapter = null;
const banks = Object.create(null);
const C = (zh, py, fr, rate, origin) => ({t:'zh', zh, py, fr, rate, origin:origin || 'direct'});
const N = text => ({t:'fr', text});
const HOLD = (label, sec) => ({t:'hold', label, sec});
const TH = () => ({t:'hold'});
const P = (sec, label) => ({t:'pause', sec, label});
const teach = (zh, py, fr) => [C(zh, py, fr), HOLD()];
const teach2 = teach;
const drill = (prompt, zh, py, fr) => [N(prompt), TH(), C(zh, py, fr), HOLD()];
const sandbox = {
  C, N, HOLD, TH, P, teach, teach2, drill,
  TILES: TileExercises.create,
  registerChapter(value){ chapter = value; },
  registerTileExercises(id, value){ banks[id] = value; },
};

const source = fs.readFileSync(path.resolve(sourceFile), 'utf8');
vm.runInNewContext(source, sandbox, {filename:sourceFile});
if (!chapter) throw new Error('Chapitre introuvable');
const lesson = chapter.lessons.find(item => Number(item.num) === lessonNumber);
if (!lesson) throw new Error(`Leçon ${lessonNumber} introuvable`);
const lessonSteps = lesson.build();
const manual = banks[chapter.id] && banks[chapter.id][lessonNumber];
if (!manual) {
  process.stdout.write('[]');
  process.exit(0);
}
const exercises = TileExercises.build(lessonSteps, manual);
const texts = [...new Set(exercises.flatMap(exercise => [
  ...exercise.answer.concat(exercise.distractors).map(TileExercises.audioText),
  exercise.answer.join('') + exercise.punctuation,
]).filter(Boolean))];
process.stdout.write(JSON.stringify(texts));
