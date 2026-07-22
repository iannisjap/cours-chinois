/* Socle pédagogique HSK3 : le contenu reste lisible dans chaque fichier de
   leçon, tandis que le pinyin est généré et vérifié séparément. */
function hsk3Pinyin(zh){
  return (typeof HSK3_PINYIN !== 'undefined' && HSK3_PINYIN[zh]) || '';
}

function HC(zh, fr, rate, origin){
  return C(zh, hsk3Pinyin(zh), fr, rate || .65, origin || 'direct');
}

function h3teach(zh, fr){
  return [
    HC(zh, fr, .65, 'teach'),
    HOLD('Répète à voix haute, puis ▶')
  ];
}

function h3drill(prompt, zh, fr){
  return [
    N(prompt),
    TH(),
    HC(zh, fr, .68, 'drill'),
    HOLD('Répète maintenant le modèle, puis ▶')
  ];
}

function enhanceHsk3Lesson(lessonSteps){
  let result = addHsk2LongPhraseScaffold(lessonSteps);
  result = addSpacedHskReview(result, 20);
  return result;
}
