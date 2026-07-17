/* ============================================================
   Moteur v3 — extrait de Cours_Chinois_Le_Temps.html
   - N  : narrateur français ([[汉字|pinyin]] = voix chinoise)
   - C  : phrase chinoise {zh, py, fr, rate}
   - P  : petite pause chronométrée (le texte reste affiché)
   - HOLD : PAUSE AUTOMATIQUE — la leçon attend que tu appuies ▶

   Les données de contenu vivent dans chapters/*.js, chargés
   APRÈS ce fichier. Chaque chapitre appelle registerChapter(...).
   ============================================================ */
const N = (text) => ({t:'fr', text});
const C = (zh, py, fr, rate, origin) => ({t:'zh', zh, py, fr, rate, origin:origin||'direct'});
const P = (sec, label) => ({t:'pause', sec, label: label||'…'});
const HOLD = (label, sec) => ({t:'hold', label: label||'Répète à voix haute, puis ▶', sec: sec||5});
const TH = () => ({t:'hold', label:'À toi de répondre à voix haute — ▶ pour entendre la réponse'});

function teach(zh, py, fr){
  return [ C(zh,py,fr,0.5,'teach'), C(zh,py,fr,0.5,'teach'), C(zh,py,fr,0.7,'teach'), HOLD() ];
}
/* variante « 2 fois suffit » : 1× lent + 1× normal, enchaînés sans pause,
   puis HOLD pour que l'élève répète (seul moment où l'on marque un temps). */
function teach2(zh, py, fr){
  return [ C(zh,py,fr,0.5,'teach'), C(zh,py,fr,0.65,'teach'), HOLD() ];
}
function drill(promptFr, zh, py, fr){
  return [ N(promptFr), TH(), C(zh,py,fr,0.65,'drill'), C(zh,py,fr,0.65,'drill'), HOLD() ];
}

function addSpacedHskReview(lessonSteps){
  const seen = new Set();
  const candidates = lessonSteps.filter(step=>{
    if(step.t !== 'zh' || step.origin !== 'direct' || !step.fr) return false;
    if(seen.has(step.zh)){ return false; }
    seen.add(step.zh);
    return true;
  });
  if(candidates.length < 3) return lessonSteps;
  const picks = [candidates[0], candidates[Math.floor(candidates.length / 2)], candidates[candidates.length - 1]];
  return lessonSteps.concat(...picks.map(step=>[
    N('Rappel espacé. Dites en chinois : ' + step.fr),
    TH(),
    C(step.zh, step.py, step.fr, .65, 'spaced-review'),
    HOLD('Répète à voix haute, puis ▶')
  ]));
}

/* ---------- registre des chapitres ---------- */
const CHAPTERS = [];
function registerChapter(ch){ CHAPTERS.push(ch); }

let steps = [];
let cur = 0;                 // index de la leçon courante dans le chapitre
let playerChapterIdx = -1;   // chapitre qui alimente le lecteur actif (-1 = aucun)
let playerLessons = [];      // tableau des leçons du chapitre actif (indépendant
                              // du chapitre que l'on est peut-être en train de
                              // parcourir dans le menu, pendant que ça joue)
let curChapter = null;       // chapitre courant
let LESSONS = [];            // leçons du chapitre courant

/* ============================================================ */
const $ = id => document.getElementById(id);
let idx = 0, playing = false, showText = true, continuous = false, autoChain = false;
let slowMode = false;             // bouton « + lent » : voix ralenties de 20 %
let showPinyin = true, showFr = true;   // pinyin / traduction FR sous les phrases chinoises
let pauseTimer = null, pauseRAF = null;
let runToken = 0;
let audioPaused = false;           // MP3 suspendu au milieu d'une phrase
let pauseRemaining = 0;            // secondes restantes d'une pause chronométrée suspendue
let pauseTotal = 0;
let activeStepAudioOffset = 0;      // durée des fragments déjà lus dans une narration mixte
let activeAudioStep = -1;
let activeAudioLang = '';
let audioBoundaryTimer = null;
let activeAudioEarlyFinish = 0;
let activeAudioDone = null;
const ARC_LEN = 584.3;
function voicePlaybackRate(lang){ return slowMode && lang === 'zh' ? 0.8 : 1; }

/* Les MP3 Edge contiennent une courte queue de silence. Pour les narrations
   mêlant français et chinois, on la retire au changement de langue : moitié
   de la pause français → chinois, trois quarts chinois → français. */
const MIXED_SEGMENT_GAP = 0.24;
function narrationEarlyFinish(current, next){
  if(!next || current.lang === next.lang) return 0;
  if(current.lang === 'fr' && next.lang === 'zh') return MIXED_SEGMENT_GAP / 2;
  if(current.lang === 'zh' && next.lang === 'fr') return MIXED_SEGMENT_GAP * 3 / 4;
  return 0;
}

/* ---------- timeline fondée sur les vraies durées des MP3 ---------- */
function stepDur(s){
  if(!AUDIO) return 0;
  if(s.t==='zh') return audioDurationFor('zh', s.zh);
  if(s.t==='pause') return s.sec;
  if(s.t==='hold') return continuous ? (s.sec || 5) : 0;
  const segs = playableNarrationSegments(s.text);
  return segs.reduce((total, seg, i)=>
    total + narrationSegmentDuration(seg, segs[i+1]), 0);
}
let cum = [], stepDurations = [], totalDur = 0;
function buildTimeline(){
  cum = []; stepDurations = []; let t = 0;
  for(const s of steps){
    const duration = stepDur(s);
    cum.push(t); stepDurations.push(duration); t += duration;
  }
  totalDur = t;
}
function fmt(sec){
  sec = Math.max(0, Math.floor(sec));
  return Math.floor(sec/60) + ':' + String(sec%60).padStart(2,'0');
}
function seekToIndex(i){
  if(!steps.length) return;
  const wasPlaying = playing;
  stopEverything();
  idx = Math.max(0, Math.min(i, steps.length-1));
  updateProgress();
  if(wasPlaying){ playing=true; syncPlayBtn(); runStep(); }
  else { renderCaptionFor(idx); setPhase('','⏸','En pause'); }
}
function moveSequence(direction){
  if(!steps.length) return;
  let target = idx + direction;
  while(target >= 0 && target < steps.length &&
        steps[target].t !== 'fr' && steps[target].t !== 'zh'){
    target += direction;
  }
  if(target < 0) target = 0;
  if(target >= steps.length) target = steps.length - 1;
  seekToIndex(target);
}
function seekTimeline(ratio){
  if(!totalDur || !steps.length) return;
  const targetTime = Math.max(0, Math.min(1, ratio)) * totalDur;
  let target = steps.length - 1;
  for(let i=0; i<steps.length; i++){
    if(targetTime < cum[i] + stepDurations[i] || i === steps.length - 1){
      target = i;
      break;
    }
  }
  // Une barre de progression mène toujours à du contenu audible, jamais à
  // une pause vide entre deux phrases.
  while(target < steps.length - 1 && steps[target].t !== 'fr' && steps[target].t !== 'zh') target++;
  seekToIndex(target);
}

/* ---------- préférences d'affichage ---------- */
const store = {
  get(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } },
  set(k,v){ try{ localStorage.setItem(k,v); }catch(e){} }
};

let practiceRecorder = null, practiceStream = null, practiceChunks = [];
let practiceUrl = null, practiceStep = -1, practiceGeneration = 0;
let practiceStarting = false;
let practiceStopTimer = null, practicePlayback = null, referencePlayback = null;
let repeatPlayback = null, repeatToken = 0;
function stopPracticePlayback(){
  [practicePlayback, referencePlayback].forEach(audio=>{
    if(!audio) return;
    audio.pause();
    try{ audio.currentTime = 0; }catch(e){}
  });
}
function stopRepeatPlayback(){
  repeatToken++;
  if(!repeatPlayback) return;
  repeatPlayback.pause();
  try{ repeatPlayback.currentTime = 0; }catch(e){}
  repeatPlayback = null;
}
function repeatLastContent(){
  const step = steps[lastContentIndex(idx)];
  if(!step || (step.t !== 'fr' && step.t !== 'zh')) return;
  // Un contrôle Bluetooth peut être actionné pendant la lecture : on immobilise
  // alors la leçon avant de rejouer la séquence, pour éviter tout chevauchement.
  if(playing) pause();
  stopPracticePlayback();
  stopRepeatPlayback();
  const token = ++repeatToken;
  const items = step.t === 'zh'
    ? [{lang:'zh', text:step.zh}]
    : playableNarrationSegments(step.text).map(segment=>({lang:segment.lang, text:segmentText(segment)}));
  const playItem = position=>{
    if(token !== repeatToken || position >= items.length) return;
    const item = items[position], url = audioFileFor(item.lang, item.text);
    if(!url){ alert('Référence audio introuvable.'); return; }
    const audio = repeatPlayback = new Audio(url);
    audio.playbackRate = voicePlaybackRate(item.lang);
    audio.onended = ()=>playItem(position + 1);
    audio.play().catch(()=>alert('Impossible de répéter cette séquence.'));
  };
  playItem(0);
}
function comparisonTargetFor(stepIndex){
  // Après une phrase enseignée, on répète cette phrase. Après une question
  // française (TH), la prochaine phrase chinoise est au contraire la réponse
  // attendue : on la choisit donc avant de remonter plus loin dans la leçon.
  let previous = stepIndex - 1;
  while(previous >= 0 && steps[previous].t === 'pause') previous--;
  if(previous >= 0 && steps[previous].t === 'zh') return steps[previous];
  for(let i=stepIndex+1; i<steps.length; i++) if(steps[i].t === 'zh') return steps[i];
  for(let i=previous; i>=0; i--) if(steps[i].t === 'zh') return steps[i];
  return null;
}
function listenToReference(){
  const target = comparisonTargetFor(idx), url = target && audioFileFor('zh', target.zh);
  if(!target || !url){ alert('Référence chinoise introuvable pour cette séquence.'); return; }
  stopPracticePlayback();
  referencePlayback = new Audio(url);
  referencePlayback.play().catch(()=>alert('Impossible de lire la référence.'));
}
function clearPracticeRecording(){
  practiceGeneration++;
  practiceStarting = false;
  if(practiceStopTimer){ clearTimeout(practiceStopTimer); practiceStopTimer = null; }
  stopPracticePlayback();
  stopRepeatPlayback();
  if(practiceRecorder && practiceRecorder.state === 'recording') practiceRecorder.stop();
  if(practiceStream) practiceStream.getTracks().forEach(track=>track.stop());
  practiceRecorder = null; practiceStream = null; practiceChunks = [];
  if(practiceUrl){ URL.revokeObjectURL(practiceUrl); practiceUrl = null; }
  practiceStep = -1;
}
async function startPracticeRecording(){
  if(practiceStarting) return;
  clearPracticeRecording();
  const generation = ++practiceGeneration;
  practiceStarting = true;
  renderCaptionFor(idx, steps[idx]&&steps[idx].t==='hold'?steps[idx].label:null);
  try{
    if(!navigator.mediaDevices || !window.MediaRecorder) throw new Error('Enregistrement micro non pris en charge par ce navigateur.');
    practiceStream = await navigator.mediaDevices.getUserMedia({audio:true});
    if(generation !== practiceGeneration){ practiceStream.getTracks().forEach(track=>track.stop()); return; }
    const chunks = practiceChunks = []; practiceStep = idx;
    const recorder = practiceRecorder = new MediaRecorder(practiceStream);
    let recordingConfirmed = false;
    const confirmRecording = ()=>{
      if(recordingConfirmed || generation !== practiceGeneration) return;
      recordingConfirmed = true;
      practiceStarting = false;
      renderCaptionFor(idx, steps[idx]&&steps[idx].t==='hold'?steps[idx].label:null);
    };
    recorder.ondataavailable = event=>{
      if(event.data.size){
        chunks.push(event.data);
        // Le premier fragment non vide est la preuve que le micro fournit
        // vraiment des données ; seulement là le bouton devient « Stop ».
        confirmRecording();
      }
    };
    recorder.onstop = ()=>{
      if(generation !== practiceGeneration) return;
      if(practiceStopTimer){ clearTimeout(practiceStopTimer); practiceStopTimer = null; }
      practiceStarting = false;
      if(chunks.length){
        practiceUrl = URL.createObjectURL(new Blob(chunks, {type:recorder.mimeType||'audio/webm'}));
      }
      if(practiceStream) practiceStream.getTracks().forEach(track=>track.stop());
      practiceStream = null;
      renderCaptionFor(idx, steps[idx]&&steps[idx].t==='hold'?steps[idx].label:null);
    };
    // Un court timeslice permet d'attendre une vraie donnée du micro plutôt
    // que de présenter « Stop » dès l'appel asynchrone à MediaRecorder.start.
    recorder.start(250);
    // Protection : même si l'on oublie le bouton Stop, le micro est coupé
    // après trente secondes et l'essai est alors conservé normalement.
    practiceStopTimer = setTimeout(()=>{
      if(generation === practiceGeneration && recorder.state === 'recording') recorder.stop();
    }, 30000);
  }catch(error){
    practiceStarting = false;
    renderCaptionFor(idx, steps[idx]&&steps[idx].t==='hold'?steps[idx].label:null);
    throw error;
  }
}
function stopPracticeRecording(){ if(practiceRecorder && practiceRecorder.state === 'recording') practiceRecorder.stop(); }

/* ---------- narration mixte fr/zh ---------- */
/* Un fragment de texte français peut contenir du chinois « brut »,
   glissé sans balisage [[...]] (ex. « avec 吧 », « la structure 是……的 »).
   On repère ces suites de sinogrammes pour les faire parler par la
   voix chinoise : sans ça, la voix française les saute purement et
   simplement (elle ne sait pas les prononcer). Pas de pinyin affiché
   pour ces segments-là — seule la balise [[...]] en fournit un. */
const CJK_RE = /[一-鿿]+/g;
function splitBareHanzi(text){
  const out = [];
  let last = 0, m;
  CJK_RE.lastIndex = 0;
  while((m = CJK_RE.exec(text)) !== null){
    if(m.index > last) out.push({lang:'fr', text:text.slice(last, m.index)});
    out.push({lang:'zh', hanzi:m[0], pinyin:''});
    last = CJK_RE.lastIndex;
  }
  if(last < text.length) out.push({lang:'fr', text:text.slice(last)});
  return out;
}
function parseNarration(text){
  const segs = [];
  const re = /\[\[([^\|\]]+)\|([^\]]+)\]\]/g;
  let last = 0, m;
  while((m = re.exec(text)) !== null){
    if(m.index > last) segs.push(...splitBareHanzi(text.slice(last, m.index)));
    segs.push({lang:'zh', hanzi:m[1], pinyin:m[2]});
    last = re.lastIndex;
  }
  if(last < text.length) segs.push(...splitBareHanzi(text.slice(last)));
  return segs;
}
function segmentText(seg){ return seg.lang === 'fr' ? seg.text.trim() : seg.hanzi; }
function hasSpeakableChars(text){ return /[A-Za-zÀ-ÿ0-9一-鿿]/.test(text); }
function playableNarrationSegments(text){
  return parseNarration(text).filter(seg=>hasSpeakableChars(segmentText(seg)));
}
function narrationHTML(text){
  return text.replace(/\[\[([^\|\]]+)\|([^\]]+)\]\]/g, '<span class="py-inline">$2</span>');
}

/* ---------- affichage ---------- */
function setPhase(kind, icon, label){
  const ph = $('phaseLbl'), ic = $('coreIcon');
  ph.className = 'phase ' + kind;
  ph.textContent = label;
  ic.textContent = icon;
  ic.classList.toggle('pulse', kind==='speak-zh'||kind==='speak-fr');
}
function setArc(f){ $('arc').style.strokeDashoffset = ARC_LEN * (1 - f); }
function clearTimers(){ if(pauseTimer){clearTimeout(pauseTimer);pauseTimer=null;} if(pauseRAF){cancelAnimationFrame(pauseRAF);pauseRAF=null;} }

function renderContentCaption(step, yourTurnLabel){
  const c = $('caption'); c.innerHTML='';
  if(!step) return;
  if(step.t==='zh'){
    if(showText){
      c.innerHTML = `<div class="zh hanzi">${step.zh}</div>`
        + (showPinyin && step.py ? `<div class="py">${step.py}</div>` : '')
        + (showFr && step.fr ? `<div class="fr">${step.fr}</div>` : '');
    } else {
      c.innerHTML = `<div class="hidden-note">Texte masqué — mode 100 % audio</div>`;
    }
  } else if(step.t==='fr'){
    c.innerHTML = `<div class="fr">${narrationHTML(step.text)}</div>`;
  }
  if(yourTurnLabel){
    const d = document.createElement('div');
    d.className = 'your-turn';
    d.textContent = yourTurnLabel;
    c.appendChild(d);
    // Une pause de question attend une réponse personnelle : pas de micro,
    // mais le bouton Répéter reste disponible pour réécouter la consigne.
    if(!continuous && !yourTurnLabel.startsWith('À toi de répondre')){
      const controls = document.createElement('div');
      controls.className = 'record-controls';
      const recording = practiceRecorder && practiceRecorder.state === 'recording';
      const starting = practiceStarting;
      const record = document.createElement('button');
      record.className = 'record-btn' + (recording ? ' recording' : '') + (starting ? ' starting' : '');
      record.textContent = recording ? '■ Stop' : (starting ? 'Connexion au micro…' : '● Enregistrer');
      record.disabled = starting;
      record.addEventListener('click', async ()=>{
        try{ recording ? stopPracticeRecording() : await startPracticeRecording(); }
        catch(error){ alert(error.message || 'Micro indisponible.'); }
      });
      controls.appendChild(record);
      if(practiceUrl && practiceStep === idx){
        const replay = document.createElement('button');
        replay.className = 'record-play'; replay.textContent = '▶ Écouter mon essai';
        replay.addEventListener('click', ()=>{
          // Un seul lecteur d'essai existe : plusieurs clics redémarrent le même
          // son au lieu de superposer plusieurs enregistrements.
          if(!practicePlayback || practicePlayback.src !== practiceUrl){
            stopPracticePlayback();
            practicePlayback = new Audio(practiceUrl);
          } else {
            practicePlayback.pause();
            practicePlayback.currentTime = 0;
          }
          practicePlayback.play().catch(()=>alert('Impossible de lire votre essai.'));
        });
        controls.appendChild(replay);
        const reference = document.createElement('button');
        reference.className = 'record-compare'; reference.textContent = '🎧 Écouter la référence';
        reference.addEventListener('click', listenToReference);
        controls.appendChild(reference);
      }
      c.appendChild(controls);
    }
  }
  if(!playing && (yourTurnLabel || audioPaused || pauseRemaining > 0) && (step.t === 'fr' || step.t === 'zh')){
    const repeat = document.createElement('button');
    repeat.className = 'repeat-last'; repeat.textContent = '↻ Répéter';
    repeat.addEventListener('click', repeatLastContent);
    c.appendChild(repeat);
  }
}
/* le contenu affiché pendant une pause/hold = le dernier vrai contenu */
function lastContentIndex(i){
  let j = Math.min(i, steps.length-1);
  while(j>=0 && (steps[j].t==='pause' || steps[j].t==='hold')) j--;
  return j;
}
function renderCaptionFor(i, yourTurnLabel){
  renderContentCaption(steps[lastContentIndex(i)], yourTurnLabel);
}

function currentTimelineTime(){
  let t = cum[Math.min(idx, steps.length-1)] || 0;
  if(activeAudioStep === idx && Number.isFinite(sfx.duration)){
    t += activeStepAudioOffset
      + Math.min(sfx.currentTime || 0, sfx.duration) / voicePlaybackRate(activeAudioLang);
  } else if(steps[idx] && steps[idx].t === 'pause' && pauseTotal > 0){
    t += Math.max(0, pauseTotal - pauseRemaining);
  } else if(steps[idx] && steps[idx].t === 'hold' && continuous && pauseTotal > 0){
    t += Math.max(0, pauseTotal - pauseRemaining);
  }
  return Math.min(t, totalDur || 0);
}
function updateProgress(){
  const t = currentTimelineTime();
  $('barFill').style.width = (totalDur ? t/totalDur*100 : 0).toFixed(1)+'%';
  $('stepLbl').textContent = `Séquence ${Math.min(idx+1,steps.length)} / ${steps.length}`;
  $('timeLbl').textContent = fmt(t) + ' / ' + fmt(totalDur);
  setArc(totalDur ? t/totalDur : 0);
}

/* ============================================================
   Audio pré-généré (MP3) — obligatoire, par leçon
   Pour un chapitre HSK, si audio/<chapitre>-<partie>/manifest.json
   existe ; pour un bonus, si audio/bonus/<numéro>/<partie>/manifest.json
   existe, chaque phrase est jouée depuis son MP3. Le manifeste et
   tous les fichiers sont vérifiés avant le démarrage de la leçon.
   Une absence ou une erreur de chargement arrête le lecteur et affiche
   un message explicite : il n'existe plus de synthèse vocale de secours.
   ============================================================ */
let AUDIO = null;          // { base, lookup, durations } de la partie en cours
const sfx = document.createElement('audio'); // média réel pour lecture et AirPods
sfx.id = 'lessonAudio';
sfx.hidden = true;
sfx.setAttribute('playsinline', '');
document.body.appendChild(sfx);
sfx.preload = 'auto';
sfx.addEventListener('timeupdate', updateProgress);
sfx.addEventListener('loadedmetadata', updateProgress);
sfx.addEventListener('play', ()=>{
  // Certains appareils Apple envoient directement « play » au média plutôt
  // qu'à Media Session lorsque la leçon attend une réponse. On intercepte ce
  // signal pour reprendre la séquence suivante sans rejouer la fin du MP3.
  if(!playing && steps[idx] && steps[idx].t === 'hold'){
    sfx.pause();
    play();
  }
});
async function loadAudioManifest(chapterId, lessonNum){
  AUDIO = null;
  const chapter = CHAPTERS.find(ch => ch.id === chapterId);
  let bonusNum = '';
  if(chapter && chapter.group === 'bonus'){
    const match = String(chapter.id).match(/^(\d+)/);
    if(match) bonusNum = match[1];
  }
  const base = bonusNum
    ? 'audio/bonus/' + bonusNum + '/' + lessonNum
    : 'audio/' + chapterId + '-' + lessonNum;
  let m;
  if(location.protocol === 'file:'){
    // fetch() des fichiers JSON locaux est bloqué par les navigateurs.
    // Le catalogue est chargé par une balise <script>, autorisée en file://.
    const lookup = window.AUDIO_CATALOG && window.AUDIO_CATALOG[base];
    if(!lookup) throw new Error('Manifeste absent du catalogue audio local : ' + base);
    m = {lookup};
  } else {
    const r = await fetch(base + '/manifest.json');
    if(!r.ok) throw new Error('Manifeste audio introuvable (' + r.status + ')');
    m = await r.json();
  }
  if(!m || !m.lookup) throw new Error('Manifeste audio invalide');
  AUDIO = { base, lookup: m.lookup, durations: new Map() };
  await prepareLessonAudio();
}
function resetAudioFile(){
  try{ sfx.pause(); }catch(e){}
  if(audioBoundaryTimer){ clearTimeout(audioBoundaryTimer); audioBoundaryTimer = null; }
  sfx.onended = null; sfx.onerror = null; sfx.onloadedmetadata = null;
  try{ sfx.currentTime = 0; }catch(e){}
  activeAudioStep = -1;
  activeAudioLang = '';
  activeStepAudioOffset = 0;
  activeAudioEarlyFinish = 0;
  activeAudioDone = null;
}
function audioFileFor(lang, text){
  if(!AUDIO) return null;
  const k = AUDIO.lookup[lang.slice(0,2) + '|' + text];
  return k ? AUDIO.base + '/' + k + '.mp3' : null;
}
function audioDurationFor(lang, text){
  const url = audioFileFor(lang, text);
  const original = url && AUDIO ? (AUDIO.durations.get(url) || 0) : 0;
  return original / voicePlaybackRate(lang);
}
function narrationSegmentDuration(segment, next){
  return Math.max(0, audioDurationFor(segment.lang, segmentText(segment))
    - narrationEarlyFinish(segment, next) / voicePlaybackRate(segment.lang));
}
function requiredAudioItems(){
  const items = [];
  steps.forEach(step=>{
    if(step.t === 'zh') items.push(['zh', step.zh]);
    else if(step.t === 'fr') playableNarrationSegments(step.text)
      .forEach(seg=>items.push([seg.lang, segmentText(seg)]));
  });
  return items;
}
function loadAudioDuration(url){
  return new Promise((resolve, reject)=>{
    const probe = new Audio();
    const timer = setTimeout(()=>reject(new Error('Délai dépassé pour ' + url)), 15000);
    const clean = ()=>{ clearTimeout(timer); probe.onloadedmetadata=null; probe.onerror=null; };
    probe.preload = 'metadata';
    probe.onloadedmetadata = ()=>{
      const duration = probe.duration;
      clean();
      if(Number.isFinite(duration) && duration > 0) resolve(duration);
      else reject(new Error('Durée audio invalide pour ' + url));
    };
    probe.onerror = ()=>{ clean(); reject(new Error('MP3 introuvable ou illisible : ' + url)); };
    probe.src = url;
  });
}
async function prepareLessonAudio(){
  const urls = new Set();
  for(const [lang, text] of requiredAudioItems()){
    const url = audioFileFor(lang, text);
    if(!url) throw new Error('MP3 absent du manifeste pour : « ' + text.slice(0,80) + ' »');
    urls.add(url);
  }
  // Limiter le nombre de requêtes simultanées : Safari/iOS supporte mal
  // l'ouverture de dizaines d'éléments Audio en même temps.
  const list = [...urls];
  for(let i=0; i<list.length; i+=8){
    await Promise.all(list.slice(i, i+8).map(async url=>{
      AUDIO.durations.set(url, await loadAudioDuration(url));
    }));
  }
  buildTimeline();
}
function showAudioError(error){
  playing = false;
  audioPaused = false;
  resetAudioFile();
  clearTimers();
  syncPlayBtn();
  setPhase('error','⚠️','Erreur audio');
  $('caption').innerHTML = '<div class="audio-error"><b>Impossible de lire cette leçon.</b><br>'
    + String(error && error.message ? error.message : error) + '<br><small>Vérifie que le dossier audio et son manifeste sont accessibles, puis recharge la page.</small></div>';
}
function handlePlayFailure(error){
  if(error && error.name === 'NotAllowedError'){
    playing = false;
    audioPaused = true;
    syncPlayBtn();
    setPhase('','▶','Appuie sur lecture');
  } else {
    showAudioError(error);
  }
}

/* ---------- lecture MP3 ---------- */
function armAudioBoundary(){
  if(audioBoundaryTimer){ clearTimeout(audioBoundaryTimer); audioBoundaryTimer = null; }
  if(!activeAudioEarlyFinish || !activeAudioDone || !Number.isFinite(sfx.duration)) return;
  const remaining = sfx.duration - sfx.currentTime - activeAudioEarlyFinish;
  audioBoundaryTimer = setTimeout(()=>{
    audioBoundaryTimer = null;
    if(!playing || !activeAudioDone) return;
    if(sfx.duration - sfx.currentTime > activeAudioEarlyFinish + .02){
      armAudioBoundary();
      return;
    }
    const done = activeAudioDone;
    activeAudioDone = null;
    sfx.onended = null;
    sfx.pause();
    done();
  }, Math.max(0, remaining / voicePlaybackRate(activeAudioLang) * 1000));
}
function playAudioSegment(text, lang, token, onend, startAt, stepOffset, earlyFinish){
  const done = ()=>{
    if(audioBoundaryTimer){ clearTimeout(audioBoundaryTimer); audioBoundaryTimer = null; }
    activeAudioDone = null;
    if(playing && token===runToken) onend();
  };
  const url = audioFileFor(lang, text);
  if(!url){ showAudioError(new Error('MP3 absent pour « ' + text.slice(0,80) + ' »')); return; }
  resetAudioFile();
  activeAudioStep = idx;
  activeAudioLang = lang;
  activeStepAudioOffset = (stepOffset || 0) - (startAt || 0) / voicePlaybackRate(lang);
  activeAudioEarlyFinish = earlyFinish || 0;
  activeAudioDone = done;
  sfx.src = url;
  sfx.playbackRate = voicePlaybackRate(lang);
  sfx.onended = done;
  sfx.onerror = ()=>showAudioError(new Error('MP3 impossible à charger : ' + url));
  const start = ()=>{
    if(startAt > 0) sfx.currentTime = Math.min(startAt, Math.max(0, sfx.duration - .05));
    // Ne jamais rogner un très court MP3 : on garde toujours au moins 80 ms.
    activeAudioEarlyFinish = Math.min(activeAudioEarlyFinish,
      Math.max(0, sfx.duration - sfx.currentTime - .08));
    const p = sfx.play();
    if(p && p.catch) p.catch(handlePlayFailure);
    armAudioBoundary();
  };
  if(sfx.readyState >= 1) start();
  else sfx.onloadedmetadata = start;
}
function playNarrationSegments(segs, i, token, onend, elapsed){
  if(!playing || token!==runToken) return;
  if(i >= segs.length){ onend(); return; }
  const s = segs[i];
  const text = segmentText(s);
  const nextSegment = segs[i+1];
  const segmentDuration = narrationSegmentDuration(s, nextSegment);
  const earlyFinish = narrationEarlyFinish(s, nextSegment);
  if(s.lang==='fr'){
    setPhase('speak-fr','🗣️','Écoute (français)');
    playAudioSegment(text, 'fr', token, ()=>playNarrationSegments(
      segs, i+1, token, onend, elapsed + segmentDuration), 0, elapsed, earlyFinish);
  } else {
    setPhase('speak-zh','🀄','Écoute (chinois)');
    playAudioSegment(text, 'zh', token, ()=>playNarrationSegments(
      segs, i+1, token, onend, elapsed + segmentDuration), 0, elapsed, earlyFinish);
  }
}

function stopEverything(){
  clearPracticeRecording();
  runToken++;
  resetAudioFile();
  clearTimers();
  audioPaused = false;
  pauseRemaining = 0;
}

// Un <audio> arrivé à son terme perd parfois le contrôle des AirPods. À un
// arrêt pédagogique, on le replace silencieusement juste avant la fin : il
// reste un vrai média en pause, donc les boutons casque gardent « play ».
function keepMediaControlsReady(){
  if(!sfx.src || !Number.isFinite(sfx.duration) || sfx.duration <= 0) return;
  try{
    sfx.onended = null;
    sfx.currentTime = Math.max(0, sfx.duration - .05);
    sfx.pause();
  }catch(e){}
}

/* ---------- déroulement ---------- */
function startTimedPause(sec, total, token){
  const t0 = performance.now();
  const tick = (now)=>{
    const elapsed = (now-t0)/1000;
    pauseRemaining = Math.max(0, sec - elapsed);
    const f = Math.min((total - pauseRemaining)/total, 1);
    setArc((idx + f)/steps.length);
    if(pauseRemaining>0 && playing && token===runToken) pauseRAF = requestAnimationFrame(tick);
  };
  pauseRAF = requestAnimationFrame(tick);
  pauseTimer = setTimeout(()=>{ if(playing && token===runToken){ pauseRemaining=0; next(); } }, sec*1000);
}

function runStep(){
  clearTimers();
  audioPaused = false;
  pauseRemaining = 0;
  updateProgress();
  const token = ++runToken;
  if(idx >= steps.length){
    playing=false; syncPlayBtn();
    setPhase('','🎉','Leçon terminée'); setArc(1);
    // Toujours se baser sur playerChapterIdx / playerLessons (le chapitre qui
    // JOUE), jamais sur curChapterIdx / LESSONS (le chapitre éventuellement
    // parcouru dans le menu en arrière-plan pendant que ça joue).
    const hasNext = cur + 1 < playerLessons.length;
    const backToMenuHash = '#/dossier/'+CHAPTERS[playerChapterIdx].group+'/ch/'+(playerChapterIdx+1);
    if(autoChain){
      const nxt = nextLessonRef();
      if(nxt){
        const chainToken = ++runToken;
        $('caption').innerHTML = '<div class="fr">🎉 Bravo ! Enchaînement automatique vers la leçon suivante…</div>';
        setTimeout(()=>{
          if(!autoChain || chainToken!==runToken) return; // désactivé ou navigation manuelle entre-temps
          nav('#/dossier/'+CHAPTERS[nxt.chapterIdx].group+'/ch/'+(nxt.chapterIdx+1)+'/lecon/'+(nxt.lessonIdx+1));
        }, 2500);
        return;
      }
      $('caption').innerHTML =
        '<div class="fr">🎉🎉 Bravo, tu as terminé tout l\'enchaînement !</div>' +
        '<button class="menu-inline ghost" onclick="nav(\''+backToMenuHash+'\')">☰ Retour au menu</button>';
      return;
    }
    $('caption').innerHTML =
      '<div class="fr">🎉 Bravo, leçon terminée ! Refais-la demain — la répétition espacée fait tout.</div>' +
      (hasNext ? '<button class="menu-inline" onclick="nav(\''+backToMenuHash+'/lecon/'+(cur+2)+'\')">▶ Leçon suivante : '+playerLessons[cur+1].title+'</button>' : '') +
      '<button class="menu-inline ghost" onclick="nav(\''+backToMenuHash+'\')">☰ Retour au menu</button>';
    return;
  }
  const s = steps[idx];
  if(s.t==='fr'){
    renderContentCaption(s);
    playNarrationSegments(playableNarrationSegments(s.text), 0, token, next, 0);
  } else if(s.t==='zh'){
    renderContentCaption(s);
    setPhase('speak-zh','🀄','Écoute (chinois)');
    activeStepAudioOffset = 0;
    playAudioSegment(s.zh, 'zh', token, next, 0, 0);
  } else if(s.t==='hold'){
    if(continuous){
      renderCaptionFor(idx, s.label);
      // MODE CONTINU : pause chronométrée (5 s par défaut, personnalisable) au lieu d'un arrêt
      const sec = s.sec || 5;
      setPhase('pause-p','⏳','À toi…');
      pauseTotal = sec;
      startTimedPause(sec, sec, token);
    } else {
      // PAUSE AUTOMATIQUE : le texte précédent reste affiché
      playing = false; syncPlayBtn();
      renderCaptionFor(idx, s.label);
      keepMediaControlsReady();
      setPhase('pause-p','✋', 'À toi — ▶ pour continuer');
    }
  } else { // pause chronométrée : le texte reste affiché
    renderCaptionFor(idx);
    setPhase('pause-p','⏳', s.label);
    pauseTotal = s.sec;
    startTimedPause(s.sec, s.sec, token);
  }
}
function next(){ idx++; runStep(); }

function syncPlayBtn(){
  $('playIcon').style.display = playing?'none':'block';
  $('pauseIcon').style.display = playing?'block':'none';
  if('mediaSession' in navigator){
    try{ navigator.mediaSession.playbackState = playing ? 'playing' : 'paused'; }catch(e){}
  }
}

function play(){
  if(playing) return;
  // Accueil, aucune leçon chargée : rien à jouer, on ouvre le menu.
  if(playerChapterIdx < 0){ showFolders(); return; }
  playing = true; syncPlayBtn();
  stopRepeatPlayback();
  // 1) un MP3 était suspendu au milieu d'une phrase : reprendre exactement
  //    à la même position, sans recréer l'élément et sans revenir au début.
  if(audioPaused && activeAudioStep === idx && sfx.src){
    audioPaused = false;
    const p = sfx.play();
    if(p && p.catch) p.catch(handlePlayFailure);
    armAudioBoundary();
    return;
  }
  // 2) une pause chronométrée était suspendue → on reprend le compte à rebours restant
  if(pauseRemaining > 0){
    const token = ++runToken;
    renderCaptionFor(idx);
    setPhase('pause-p','⏳','…');
    startTimedPause(pauseRemaining, pauseTotal, token);
    return;
  }
  // 3) on est sur une étape HOLD → on passe à la suite
  if(steps[idx] && steps[idx].t==='hold'){ clearPracticeRecording(); idx++; }
  runStep();
}

function pause(){
  if(!playing) return;
  playing = false; syncPlayBtn();
  if(activeAudioStep === idx && sfx.src && !sfx.ended){
    audioPaused = true;
    sfx.pause();
  } else {
    // suspendre une pause chronométrée (pauseRemaining déjà tenu à jour)
    clearTimers();
  }
  renderCaptionFor(idx, steps[idx]&&steps[idx].t==='hold'?steps[idx].label:null);
  setPhase('','⏸','En pause — ▶ pour reprendre');
}

$('playBtn').addEventListener('click', ()=> playing?pause():play());
// Raccourci ordinateur : Espace pilote le lecteur comme dans un lecteur audio
// classique, sans faire défiler la page. On le laisse aux boutons/menus quand
// ils ont le focus afin que leurs propres raccourcis restent accessibles.
document.addEventListener('keydown', event=>{
  if(event.code !== 'Space' || event.repeat) return;
  const target = event.target;
  if(target && target.closest && target.closest('button, input, textarea, select, [contenteditable]')) return;
  if(['folderOverlay','chapterOverlay','overlay'].some(id=>$(id).style.display !== 'none')) return;
  event.preventDefault();
  playing ? pause() : play();
});
$('fwdBtn').addEventListener('click', ()=> moveSequence(+1));
$('backBtn').addEventListener('click', ()=> moveSequence(-1));
let previousTrackTimer = null;
function restartCurrentLesson(){
  if(playerChapterIdx < 0 || !steps.length) return;
  const wasPlaying = playing;
  stopEverything();
  idx = 0;
  playing = false;
  updateProgress();
  if(wasPlaying){
    playing = true;
    syncPlayBtn();
    runStep();
  } else {
    renderCaptionFor(idx);
    setPhase('','⏸','Début de la leçon');
  }
}
function openTrack(ref){
  if(!ref) return;
  nav('#/dossier/'+CHAPTERS[ref.chapterIdx].group+'/ch/'+(ref.chapterIdx+1)+'/lecon/'+(ref.lessonIdx+1));
}
function previousLessonRef(){
  if(cur > 0) return { chapterIdx: playerChapterIdx, lessonIdx: cur - 1 };
  const group = CHAPTERS[playerChapterIdx].group;
  const sameGroup = [];
  CHAPTERS.forEach((chapter, chapterIdx)=>{ if(chapter.group === group) sameGroup.push(chapterIdx); });
  const pos = sameGroup.indexOf(playerChapterIdx);
  if(pos > 0){
    const chapterIdx = sameGroup[pos - 1];
    return { chapterIdx, lessonIdx: CHAPTERS[chapterIdx].lessons.length - 1 };
  }
  return null;
}
function previousTrack(){
  if(playerChapterIdx < 0) return;
  if(previousTrackTimer){
    clearTimeout(previousTrackTimer);
    previousTrackTimer = null;
    const previous = previousLessonRef();
    if(previous) openTrack(previous);
    else restartCurrentLesson();
    return;
  }
  previousTrackTimer = setTimeout(()=>{
    previousTrackTimer = null;
    restartCurrentLesson();
  }, 280);
}
function nextTrack(){
  if(playerChapterIdx < 0) return;
  openTrack(nextLessonRef());
}
$('prevTrackBtn').addEventListener('click', previousTrack);
$('nextTrackBtn').addEventListener('click', nextTrack);
$('timelineBar').addEventListener('click', event=>{
  const rect = event.currentTarget.getBoundingClientRect();
  seekTimeline((event.clientX - rect.left) / rect.width);
});
$('replayChip').addEventListener('click', ()=>{
  stopEverything();
  let j = Math.min(idx, steps.length-1);
  while(j>=0 && steps[j].t!=='zh') j--;
  if(j>=0){ idx=j; if(!playing){playing=true;syncPlayBtn();} runStep(); }
});
function reRenderCaption(){
  renderCaptionFor(idx, steps[idx]&&steps[idx].t==='hold'?steps[idx].label:null);
}
$('textChip').addEventListener('click', e=>{
  showText=!showText; e.target.classList.toggle('on',showText);
  reRenderCaption();
});
$('pyChip').addEventListener('click', e=>{
  showPinyin=!showPinyin; e.target.classList.toggle('on',showPinyin);
  store.set('showPinyin', showPinyin?'1':'0'); reRenderCaption();
});
$('frTradChip').addEventListener('click', e=>{
  showFr=!showFr; e.target.classList.toggle('on',showFr);
  store.set('showFr', showFr?'1':'0'); reRenderCaption();
});
/* restaurer les préférences d'affichage pinyin / traduction */
(function(){
  const sp = store.get('showPinyin'), sf = store.get('showFr');
  if(sp==='0'){ showPinyin=false; $('pyChip').classList.remove('on'); }
  if(sf==='0'){ showFr=false; $('frTradChip').classList.remove('on'); }
})();
$('contChip').addEventListener('click', e=>{
  continuous=!continuous; e.target.classList.toggle('on',continuous);
  // En mode continu, il n'y a pas d'arrêt pour s'enregistrer. Si le mode est
  // activé pendant une répétition, on ferme donc aussi le micro en cours.
  if(continuous) clearPracticeRecording();
  buildTimeline(); updateProgress();
  if(steps[idx] && steps[idx].t==='hold') renderCaptionFor(idx, steps[idx].label);
  // si on active le mode continu pendant un arrêt automatique, on repart aussitôt
  if(continuous && !playing && steps[idx] && steps[idx].t==='hold'){ play(); }
});
$('chainChip').addEventListener('click', e=>{
  autoChain=!autoChain; e.target.classList.toggle('on',autoChain);
});
$('slowChip').addEventListener('click', e=>{
  slowMode = !slowMode;
  e.currentTarget.classList.toggle('on', slowMode);
  e.currentTarget.setAttribute('aria-pressed', slowMode ? 'true' : 'false');
  // Le changement s'applique immédiatement, y compris au MP3 en cours.
  sfx.playbackRate = voicePlaybackRate(activeAudioLang);
  armAudioBoundary();
  buildTimeline();
  updateProgress();
});

/* ============================================================
   Contrôle AirPods et casques Bluetooth via le vrai média MP3.
   ============================================================ */
if('mediaSession' in navigator){
  try{
    navigator.mediaSession.metadata = new MediaMetadata({
      title: document.title,
      artist: 'Leçon de chinois mandarin',
      album: 'Méthode audio'
    });
  }catch(e){}
  const H = (name, fn)=>{ try{ navigator.mediaSession.setActionHandler(name, fn); }catch(e){} };
  H('play',  ()=>{ if(!playing) play(); });
  H('pause', ()=>{ if(playing) pause(); });
  // Sur les AirPods, le double-clic envoie généralement « piste suivante ».
  // Il sert ici à réécouter le dernier segment plutôt qu'à quitter la phrase.
  H('nexttrack',     ()=> repeatLastContent());
  H('previoustrack', ()=> previousTrack());
  H('seekforward',   ()=> moveSequence(+1));
  H('seekbackward',  ()=> moveSequence(-1));
}

buildTimeline();
updateProgress();

/* ============================================================
   Menu des chapitres et des leçons
   ============================================================ */
const FOLDERS = [
  { key: 'hsk1', hanzi: 'HSK1', title: 'HSK 1', desc: 'Les 15 leçons du manuel officiel' },
  { key: 'hsk2', hanzi: 'HSK2', title: 'HSK 2', desc: 'Les 15 leçons du manuel officiel' },
  { key: 'bonus', hanzi: '★', title: 'Bonus', desc: 'Chapitres thématiques complémentaires' }
];
function buildFolderMenu(){
  const el = $('folderList'); el.innerHTML = '';
  FOLDERS.forEach(f=>{
    const count = CHAPTERS.filter(ch=>ch.group===f.key).length;
    const b = document.createElement('button');
    b.className = 'menu-item';
    b.innerHTML = '<span class="mi-num">'+count+'</span>'
      + '<span class="mi-hz hanzi">'+f.hanzi+'</span>'
      + '<span class="mi-tx"><b>'+f.title+'</b><small>'+f.desc+'</small></span>';
    b.addEventListener('click', ()=>openFolder(f.key));
    el.appendChild(b);
  });
}
function buildChapterMenu(folderKey){
  const el = $('chapterList'); el.innerHTML = '';
  CHAPTERS.forEach((ch, i)=>{
    if(ch.group !== folderKey) return;
    const b = document.createElement('button');
    b.className = 'menu-item';
    const badge = ch.badge != null ? ch.badge : (i+1);
    const starCls = ch.star ? ' star' : '';
    b.innerHTML = '<span class="mi-num'+starCls+'">'+badge+'</span>'
      + '<span class="mi-hz hanzi">'+ch.hanzi+'</span>'
      + '<span class="mi-tx"><b>'+ch.title+'</b><small>'+ch.desc+'</small></span>';
    b.addEventListener('click', ()=>openChapter(i));
    el.appendChild(b);
  });
}
function buildMenu(){
  const el = $('menuList'); el.innerHTML = '';
  LESSONS.forEach((L, i)=>{
    const b = document.createElement('button');
    b.className = 'menu-item';
    const isRev = !!L.star;
    b.innerHTML = '<span class="mi-num'+(isRev?' star':'')+'">'+(isRev?'★':L.num)+'</span>'
      + '<span class="mi-hz hanzi">'+L.hanzi+'</span>'
      + '<span class="mi-tx"><b>'+L.title+'</b><small>'+L.desc+'</small></span>';
    b.addEventListener('click', ()=>openLesson(i));
    el.appendChild(b);
  });
}
let curChapterIdx = 0;
function setChapter(i){
  curChapterIdx = i;
  curChapter = CHAPTERS[i];
  LESSONS = curChapter.lessons;
}

/* ---- rendu des écrans (sans toucher à l'historique navigateur) ----
   Le menu (dossiers / chapitres / leçons) n'est qu'un aperçu affiché
   PAR-DESSUS le lecteur : ce n'est pas une vraie page distincte, c'est
   le lecteur qui est « chez lui ». Naviguer dans le menu — même en
   changeant de dossier ou de chapitre affiché — ne coupe donc JAMAIS
   la lecture en cours : elle continue en arrière-plan. Seul le fait de
   choisir explicitement une AUTRE leçon (clic sur une leçon) déclenche
   un vrai changement, géré dans renderPlayer(). La croix ✕, présente
   sur les trois écrans du menu, referme l'aperçu et révèle le lecteur
   tel qu'il est actuellement (cf. closeMenu()). ---- */
let curFolderKey = null;
/* Accueil : le lecteur lui-même, sans leçon chargée, avec un message
   invitant à ouvrir le menu. C'est l'écran affiché au tout premier
   chargement (et tant qu'aucune leçon n'a jamais été choisie) —
   plus question d'imposer le menu des dossiers par-dessus. */
function renderHome(){
  curFolderKey = null;
  $('folderOverlay').style.display = 'none';
  $('chapterOverlay').style.display = 'none';
  $('overlay').style.display = 'none';
  document.querySelector('header h1').innerHTML = '<span class="hanzi">中文</span>Cours audio de chinois';
  document.title = 'Cours audio de chinois';
  $('lessonTag').textContent = '—';
  $('stepLbl').textContent = '—';
  $('timeLbl').textContent = '';
  $('caption').innerHTML = '<div class="fr">Sélectionne une leçon dans le menu ☰ pour commencer.</div>';
}
function renderFolders(){
  curFolderKey = null;
  $('overlay').style.display = 'none';
  $('chapterOverlay').style.display = 'none';
  $('folderOverlay').style.display = 'flex';
}
function renderChapters(folderKey){
  curFolderKey = folderKey;
  const f = FOLDERS.find(f=>f.key===folderKey);
  $('folderBigHanzi').textContent = f ? f.hanzi : '';
  $('folderOverlayTitle').textContent = f ? f.title : '';
  $('folderOverlayIntro').textContent = f ? f.desc : '';
  buildChapterMenu(folderKey);
  $('folderOverlay').style.display = 'none';
  $('overlay').style.display = 'none';
  $('chapterOverlay').style.display = 'flex';
}
function renderLessons(i){
  setChapter(i);
  curFolderKey = curChapter.group;
  $('lessonBigHanzi').textContent = curChapter.hanzi;
  $('lessonOverlayTitle').textContent = curChapter.title + ' · Cours audio de chinois';
  $('lessonOverlayIntro').textContent = curChapter.intro || '';
  buildMenu();
  $('folderOverlay').style.display = 'none';
  $('chapterOverlay').style.display = 'none';
  $('overlay').style.display = 'flex';
}
function renderPlayer(i){
  const L = LESSONS[i];
  const resuming = steps.length > 0 && cur === i && playerChapterIdx === curChapterIdx;
  if(!resuming){
    cur = i;
    playerChapterIdx = curChapterIdx;
    playerLessons = LESSONS;
    stopEverything();
    AUDIO = null;
    steps = L.build();
    if(curChapter.group === 'hsk1' && L.num !== 4) steps = addSpacedHskReview(steps);
    idx = 0; playing = false;
    buildTimeline();
  }
  syncPlayBtn(); updateProgress();
  $('lessonTag').textContent = (L.star ? 'Révision' : 'Leçon ' + L.num);
  // fil d'Ariane : « Chapitre › Leçon » — le nom du chapitre ramène à la liste des leçons
  document.querySelector('header h1').innerHTML =
    '<button class="crumb" onclick="showMenu()">'+curChapter.title+'</button>'
    + '<span class="crumb-sep">›</span>'
    + '<span class="hanzi">'+L.hanzi+'</span>'+L.title;
  document.title = L.hanzi + ' · Leçon ' + L.num + ' — ' + L.title;
  if('mediaSession' in navigator){
    try{ navigator.mediaSession.metadata = new MediaMetadata({
      title:'Leçon '+L.num+' — '+L.title, artist:'Cours de chinois · '+(curChapter?curChapter.title:'')}); }catch(e){}
  }
  $('folderOverlay').style.display = 'none';
  $('chapterOverlay').style.display = 'none';
  $('overlay').style.display = 'none';
  if(!resuming){
    $('caption').innerHTML = '<div class="fr">Chargement et vérification des MP3…</div>';
    setPhase('','⏳','Chargement audio');
    // On vérifie le manifeste et chaque MP3 avant le démarrage. Le jeton
    // protège d'une navigation ailleurs entre-temps.
    const startToken = runToken;
    loadAudioManifest(curChapter.id, L.num).then(()=>{
      if(startToken !== runToken) return;
      updateProgress();
      play();
    }).catch(error=>{
      if(startToken !== runToken) return;
      showAudioError(error);
    });
  }
}

/* ---- navigation par hash dans l'URL :
       #/                        → menu des dossiers (HSK 1 / Bonus)
       #/dossier/hsk1            → chapitres du dossier hsk1
       #/dossier/hsk1/ch/1       → leçons du chapitre 1
       #/dossier/hsk1/ch/1/lecon/2  → leçon 2 du chapitre 1
       Chaque écran change l'URL : les boutons page précédente /
       suivante du navigateur fonctionnent, et on peut recharger
       ou partager un lien direct vers une leçon. ---- */
function route(){
  if(location.hash === '#/menu'){ renderFolders(); return; }
  const m = location.hash.match(/^#\/dossier\/([^/]+)(?:\/ch\/(\d+)(?:\/lecon\/(\d+))?)?/);
  if(m){
    const folderKey = decodeURIComponent(m[1]);
    if(m[2]){
      const ci = parseInt(m[2],10) - 1;
      if(ci >= 0 && ci < CHAPTERS.length && CHAPTERS[ci].group === folderKey){
        // Toujours resynchroniser curFolderKey ici, y compris pour un lien
        // direct vers une leçon (rechargement, favori) qui ne passe jamais
        // par renderLessons/renderChapters : sinon « ☰ Menu » et la croix
        // calculeraient un hash invalide (dossier "null").
        curFolderKey = folderKey;
        if(m[3]){
          const li = parseInt(m[3],10) - 1;
          setChapter(ci);
          if(li >= 0 && li < LESSONS.length){ renderPlayer(li); return; }
        }
        renderLessons(ci); return;
      }
    }
    if(FOLDERS.some(f=>f.key===folderKey)){ renderChapters(folderKey); return; }
  }
  renderHome();
}
function nav(hash){
  if(location.hash === hash) route();   // même hash : re-rendre quand même
  else location.hash = hash;            // sinon hashchange déclenche route()
}
function openFolder(key){ nav('#/dossier/'+key); }
function openChapter(i){ nav('#/dossier/'+CHAPTERS[i].group+'/ch/'+(i+1)); }
function openLesson(i){ nav('#/dossier/'+curFolderKey+'/ch/'+(curChapterIdx+1)+'/lecon/'+(i+1)); }
/* ---- enchaînement automatique : leçon suivante, ou premier chapitre
       suivant du même dossier (HSK1/Bonus) une fois le chapitre fini ---- */
function nextLessonRef(){
  // Basé sur le chapitre qui JOUE (playerChapterIdx/playerLessons), jamais
  // sur celui éventuellement parcouru dans le menu en arrière-plan.
  if(cur + 1 < playerLessons.length) return { chapterIdx: playerChapterIdx, lessonIdx: cur + 1 };
  const group = CHAPTERS[playerChapterIdx].group;
  const sameGroup = [];
  CHAPTERS.forEach((c, i)=>{ if(c.group === group) sameGroup.push(i); });
  const pos = sameGroup.indexOf(playerChapterIdx);
  if(pos >= 0 && pos + 1 < sameGroup.length){
    return { chapterIdx: sameGroup[pos + 1], lessonIdx: 0 };
  }
  return null;
}
function showMenu(){
  // Rien n'a encore été chargé (accueil) : « ☰ Menu » ouvre directement
  // le choix d'un dossier, il n'y a pas encore de chapitre à afficher.
  if(playerChapterIdx < 0){ showFolders(); return; }
  nav('#/dossier/'+curFolderKey+'/ch/'+(curChapterIdx+1));
}
function showChapters(){ nav('#/dossier/'+curFolderKey); }
function showFolders(){ nav('#/menu'); }
/* Fermer le menu (croix, présente sur les 3 écrans dossiers/chapitres/
   leçons) et révéler le lecteur tel qu'il est actuellement — peu importe
   à quel niveau du menu on se trouve, et peu importe le chemin parcouru
   pour y arriver. S'il n'y a jamais eu de leçon chargée (tout premier
   lancement), il n'y a rien à révéler : on reste sur l'accueil. */
function closeMenu(){
  if(playerChapterIdx >= 0 && playerChapterIdx < CHAPTERS.length){
    nav('#/dossier/'+CHAPTERS[playerChapterIdx].group+'/ch/'+(playerChapterIdx+1)+'/lecon/'+(cur+1));
  } else {
    nav('#/');
  }
}
window.addEventListener('hashchange', route);
function initApp(){
  buildFolderMenu();
  route();   // supporte le rechargement / lien direct vers une leçon
}
window.openFolder = openFolder;
window.openChapter = openChapter;
window.openLesson = openLesson;
window.showMenu = showMenu;
window.showChapters = showChapters;
window.showFolders = showFolders;
window.closeMenu = closeMenu;
window.initApp = initApp;
$('menuBtn').addEventListener('click', showMenu);

/* ============================================================
   Timeline continue : la position réelle de l'élément MP3 est lue à
   chaque image. La barre et les deux compteurs avancent donc pendant
   la phrase, au lieu de sauter seulement au changement de séquence.
   ============================================================ */
function progressLoop(){
  if(steps.length) updateProgress();
  requestAnimationFrame(progressLoop);
}
requestAnimationFrame(progressLoop);
