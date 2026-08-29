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
  const PARTICLES = new Set(['了','吗','吧','呢','的','得','地','过']);
  const MODIFIERS = [
    '一点儿','一会儿','有点儿','多云','没有','还是','可能','应该','可以','已经','差不多',
    '我们','你们','他们','她们','有些','多少','怎么样'
  ];
  const ATOMIC_WORDS = new Set(MODIFIERS);
  const PREFIXES = ['不','没','很','太','也','还','再','就','才','会','要','想','能','更','最','只','都','多'];
  const FORCED_SPLITS = new Map([
    ['变大',['变','大']], ['吃完',['吃','完']], ['出去',['出','去']],
    ['打电话',['打','电话']], ['大雨',['大','雨']], ['得很',['得','很']],
    ['的话',['的','话']], ['好多',['好','多']], ['花开',['花','开']],
    ['喝水',['喝','水']], ['流鼻涕',['流','鼻涕']], ['请先',['请','先']],
    ['下楼',['下','楼']], ['有风',['有','风']], ['在家',['在','家']],
    ['早晚',['早','晚']], ['怎么说',['怎么','说']],
    ['哪个',['哪','个']], ['这个',['这','个']], ['这次',['这','次']],
    ['这种',['这','种']], ['这几天',['这','几','天']]
  ]);

  function create(prompt, answer, distractors, punctuation){
    const answerBlocks = Array.isArray(answer) ? answer.slice() : wordTokens(answer);
    const inferredPunctuation = Array.isArray(answer) ? '。' : punctuationFor(answer);
    return {
      t:'tiles', prompt,
      answer:answerBlocks,
      distractors:(distractors||[]).slice(),
      punctuation:punctuation||inferredPunctuation
    };
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

    // Intl.Segmenter colle parfois plusieurs mots grammaticaux (不会, 就不,
    // 我的…). On les sépare, tout en conservant les véritables unités
    // lexicales enseignées comme 有点儿, 一会儿 et 多云.
    const lexical = [];
    for(let index=0; index<raw.length; index++){
      const three = raw.slice(index, index + 3).join('');
      const two = raw.slice(index, index + 2).join('');
      if(raw[index] === '说明' && raw[index + 1] === '天'){
        lexical.push('说','明天'); index += 1; continue;
      }
      if(three === '一会儿'){ lexical.push(three); index += 2; continue; }
      if(two === '一点儿' || two === '有点儿' || two === '多云' || two === '怎么样'){
        lexical.push(two); index += 1; continue;
      }
      lexical.push(raw[index]);
    }

    function splitWord(token){
      if(!token || PUNCTUATION_RE.test(token) || ATOMIC_WORDS.has(token)) return [token];
      if(FORCED_SPLITS.has(token)) return FORCED_SPLITS.get(token).slice();
      const measureMatch = token.match(/^([零一二两三四五六七八九十百千万几多少]+)(度|天|次|片|把|个|件|场)$/u);
      if(measureMatch) return [measureMatch[1], measureMatch[2]];
      if(token === '最低气温') return ['最','低','气温'];
      if(token === '回家') return ['回','家'];
      if(token === '回去') return ['回','去'];
      if(token.startsWith('有些') && token !== '有些') return ['有些', ...splitWord(token.slice(2))];
      const pronounMatch = token.match(/^(我们|你们|他们|她们|我|你|他|她)(.+)$/u);
      if(pronounMatch){
        return [pronounMatch[1], ...splitWord(pronounMatch[2])];
      }
      for(const particle of PARTICLES){
        if(token.length > particle.length && token.endsWith(particle)){
          return [...splitWord(token.slice(0, -particle.length)), particle];
        }
      }
      for(const prefix of PREFIXES){
        if(token.length > prefix.length && token.startsWith(prefix)){
          return [prefix, ...splitWord(token.slice(prefix.length))];
        }
      }
      for(const prefix of ['已经','可能','今天','昨天','怎么','请','别','在','有','了']){
        if(token.length > prefix.length && token.startsWith(prefix)){
          return [prefix, ...splitWord(token.slice(prefix.length))];
        }
      }
      return [token];
    }

    const tokens = [];
    lexical.flatMap(splitWord).forEach(token=>{
      if(PUNCTUATION_RE.test(token)){
        if(tokens.length) tokens[tokens.length - 1] += token;
      } else {
        tokens.push(token);
      }
    });
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

  function sentenceKey(exercise){
    return exercise.answer.map(audioText).join('').replace(/\s+/gu, '');
  }

  function build(lessonSteps, extraExercises){
    const phrases = uniqueChineseSteps(lessonSteps);
    const extras = (extraExercises || []).slice();
    const pool = phrases.flatMap(step=>wordTokens(step.zh))
      .concat(extras.flatMap(exercise=>exercise.answer));
    const result = [];
    const sentences = new Set();
    const appendLessonPhrase = step=>{
      const words = wordTokens(step.zh);
      if(!words.length) return;
      const exercise = create(
        step.fr,
        words,
        chooseDistractors(words, pool, step.zh),
        punctuationFor(step.zh)
      );
      const key = sentenceKey(exercise);
      if(sentences.has(key)) return;
      sentences.add(key);
      result.push(exercise);
    };

    // La fin de leçon reprend d'abord toutes les phrases chinoises réellement
    // entendues, une seule fois chacune et dans leur ordre pédagogique.
    phrases.forEach(appendLessonPhrase);

    // Le fichier du cours fournit ensuite cinq productions de transfert :
    // elles restent dans le même thème, mais n'ont jamais été dites auparavant.
    extras.forEach(source=>{
      if(!source.answer.length) return;
      const key = sentenceKey(source);
      if(sentences.has(key)) return;
      sentences.add(key);
      const distractors = source.distractors.length
        ? source.distractors
        : chooseDistractors(source.answer, pool, source.prompt + '|' + key);
      result.push(create(source.prompt, source.answer, distractors, source.punctuation));
    });
    return result;
  }

  return {create, build, audioText, wordTokens};
});
