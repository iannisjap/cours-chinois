/* Générateur partagé navigateur/Node des exercices de reconstruction.
   Le pipeline audio charge ce même fichier : l'écran et les manifestes
   emploient donc toujours exactement les mêmes blocs chinois. */
(function(root, factory){
  const api = factory();
  if(typeof module === 'object' && module.exports) module.exports = api;
  root.TileExercises = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function(){
  'use strict';

  const FALLBACK_DISTRACTORS = ['也','还','已经','没有','可能','很','吗','了','今天','明天'];
  const PUNCTUATION_RE = /^[，。！？；：、,.!?;:]$/u;
  const TRAILING_RE = /([。！？!?])$/u;
  const SUFFIX_PARTICLES = new Set(['了','吗','吧','呢','的','得','地','儿']);
  const PREFIX_WORDS = new Set(['一','不','没','别','很','太','也','还','再','就','才','会','要','想','能','可以','应该','可能','更','最','只','都','多']);
  const LEXICON = new Set([
    '一会儿','一点儿','有点儿','天气预报','最高气温','最低气温','什么季节','怎么样',
    '下雨','下雪','刮风','下大雨','回家','拿伞','带伞','穿外套','出门','变天','改天',
    '再去','就去','爬山','跑步','散步','冷得多','差不多','不舒服','头疼','肚子疼',
    '嗓子疼','脚疼','胳膊疼','流鼻涕','打喷嚏','发烧','看医生','看病','去医院',
    '开药','吃药','喝水','多喝水','按时吃药','好好休息','着凉','淋雨','上课','没来',
    '好多了','好点儿','中医','西医'
  ]);

  function create(prompt, answer, distractors, punctuation){
    return {t:'tiles', prompt, answer:answer.slice(), distractors:(distractors||[]).slice(), punctuation:punctuation||'。'};
  }

  function audioText(value){
    return String(value || '').replace(/[，。！？；：、,.!?;:]+$/u, '').trim();
  }

  function punctuationFor(text){
    const match = String(text || '').match(TRAILING_RE);
    if(!match) return '。';
    return /[？?]/.test(match[1]) ? '？' : /[！!]/.test(match[1]) ? '！' : '。';
  }

  function wordTokens(text){
    const clean = String(text || '').replace(TRAILING_RE, '').trim();
    const raw = [];
    if(typeof Intl !== 'undefined' && Intl.Segmenter){
      const segmenter = new Intl.Segmenter('zh-Hans', {granularity:'word'});
      for(const part of segmenter.segment(clean)) if(part.segment.trim()) raw.push(part.segment);
    } else {
      raw.push(...Array.from(clean).filter(character=>character.trim()));
    }
    const lexical = [];
    for(let index=0; index<raw.length;){
      if(PUNCTUATION_RE.test(raw[index])){
        lexical.push(raw[index++]);
        continue;
      }
      let match = '', end = index + 1;
      let joined = '';
      for(let cursor=index; cursor<Math.min(raw.length, index + 5); cursor++){
        if(PUNCTUATION_RE.test(raw[cursor])) break;
        joined += raw[cursor];
        if(LEXICON.has(joined)){ match = joined; end = cursor + 1; }
      }
      lexical.push(match || raw[index]);
      index = match ? end : index + 1;
    }
    const attached = [];
    lexical.forEach(token=>{
      if(PUNCTUATION_RE.test(token)){
        if(attached.length) attached[attached.length - 1] += token;
      } else if(SUFFIX_PARTICLES.has(token) && attached.length) {
        attached[attached.length - 1] += token;
      } else {
        attached.push(token);
      }
    });
    const tokens = [];
    let prefix = '';
    attached.forEach(token=>{
      if(PREFIX_WORDS.has(token)){
        prefix += token;
        return;
      }
      tokens.push(prefix + token);
      prefix = '';
    });
    if(prefix) tokens.push(prefix);
    return tokens;
  }

  function uniqueChineseSteps(lessonSteps){
    const seen = new Set();
    return lessonSteps.filter(step=>{
      if(step.t !== 'zh' || !step.zh || !step.fr || step.zh === '再见！') return false;
      const key = step.zh.trim();
      if(seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function chooseDistractors(answer, pool, seedText){
    const used = new Set(answer.map(audioText));
    const candidates = [...new Set(pool.concat(FALLBACK_DISTRACTORS).map(audioText))]
      .filter(token=>token && !used.has(token));
    let seed = Array.from(seedText).reduce((sum, character)=>
      (sum * 33 + character.codePointAt(0)) >>> 0, 5381);
    const selected = [];
    while(candidates.length && selected.length < 3){
      seed = (seed * 1664525 + 1013904223) >>> 0;
      selected.push(candidates.splice(seed % candidates.length, 1)[0]);
    }
    return selected;
  }

  function build(lessonSteps, manualExercises, minimum){
    const target = Math.max(10, Number(minimum) || 10);
    const phrases = uniqueChineseSteps(lessonSteps);
    const pool = phrases.flatMap(step=>wordTokens(step.zh));
    const result = (manualExercises || []).slice();
    const signatures = new Set(result.map(item=>item.prompt + '|' + item.answer.join('|')));
    const appendVariant = step=>{
      const words = wordTokens(step.zh);
      const answer = words;
      if(answer.length < 2) return;
      const signature = step.fr + '|' + answer.join('|');
      if(signatures.has(signature)) return;
      signatures.add(signature);
      result.push(create(
        step.fr,
        answer,
        chooseDistractors(answer, pool, signature),
        punctuationFor(step.zh)
      ));
    };
    // Chaque phrase nouvelle est d'abord reconstruite avec de vrais mots et
    // groupes grammaticaux. Les places restantes deviennent des rappels
    // espacés : aucun bloc artificiel n'est créé en collant deux mots voisins.
    for(const step of phrases){
      if(result.length >= target) break;
      appendVariant(step);
    }
    // Les rares leçons très courtes reçoivent une seconde distribution des
    // blocs manuels : la phrase reste la même, mais le mélange change.
    let cursor = 0;
    while(result.length < target && result.length){
      const source = result[cursor++ % result.length];
      result.push(create(source.prompt, source.answer, source.distractors.slice().reverse(), source.punctuation));
    }
    return result;
  }

  return {create, build, audioText, wordTokens};
});
