/* ============================================================
   Moteur v3 — extrait de Cours_Chinois_Le_Temps.html
   - N  : narrateur français ([[汉字|pinyin]] = voix chinoise)
   - C  : phrase chinoise {zh, py, fr, rate}
   - P  : petite pause chronométrée (le texte reste affiché)
   - HOLD : PAUSE AUTOMATIQUE — la leçon attend que tu appuies ▶

   Les données de contenu vivent dans chapters/*.js, chargés
   APRÈS ce fichier. Chaque chapitre appelle registerChapter(...).
   ============================================================ */
const ZH_SLOW = 0.75;   // ralentissement global du chinois (multiplié aux vitesses)

const N = (text) => ({t:'fr', text});
const C = (zh, py, fr, rate) => ({t:'zh', zh, py, fr, rate});
const P = (sec, label) => ({t:'pause', sec, label: label||'…'});
const HOLD = (label, sec) => ({t:'hold', label: label||'Répète à voix haute, puis ▶', sec: sec||5});
const TH = () => ({t:'hold', label:'À toi de répondre à voix haute — ▶ pour entendre la réponse'});

function teach(zh, py, fr){
  return [ C(zh,py,fr,0.5), C(zh,py,fr,0.5), C(zh,py,fr,0.7), HOLD() ];
}
/* variante « 2 fois suffit » : 1× lent + 1× normal, enchaînés sans pause,
   puis HOLD pour que l'élève répète (seul moment où l'on marque un temps). */
function teach2(zh, py, fr){
  return [ C(zh,py,fr,0.5), C(zh,py,fr,0.65), HOLD() ];
}
function drill(promptFr, zh, py, fr){
  return [ N(promptFr), TH(), C(zh,py,fr,0.65), C(zh,py,fr,0.65), HOLD() ];
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
const synth = window.speechSynthesis;
let voices = [], zhVoice=null, frVoice=null;
let idx = 0, playing = false, showText = true, continuous = false, autoChain = false;
let showPinyin = true, showFr = true;   // pinyin / traduction FR sous les phrases chinoises
let pauseTimer = null, pauseRAF = null;
let runToken = 0;
let speechPaused = false;          // une phrase est suspendue via synth.pause()
let pauseRemaining = 0;            // secondes restantes d'une pause chronométrée suspendue
let pauseTotal = 0;
const ARC_LEN = 584.3;

/* ---------- estimation des durées (pour ±10 s) ---------- */
function zhDur(txt, rate){ return (txt.length * 0.38) / ((rate||0.7) * ZH_SLOW); }
function frDur(txt){ return Math.max(0.6, txt.length / 14); }
function stepDur(s){
  if(s.t==='zh') return zhDur(s.zh, s.rate) + 0.3;
  if(s.t==='pause') return s.sec;
  if(s.t==='hold') return 5;                    // valeur nominale
  // narration : segments fr + zh
  let d = 0.3;
  parseNarration(s.text).forEach(seg=>{
    d += seg.lang==='fr' ? frDur(seg.text) : zhDur(seg.hanzi, 0.6);
  });
  return d;
}
let cum = [], totalDur = 0;
function buildTimeline(){
  cum = []; let t = 0;
  for(const s of steps){ cum.push(t); t += stepDur(s); }
  totalDur = t;
}
function fmt(sec){
  sec = Math.max(0, Math.round(sec));
  return Math.floor(sec/60) + ':' + String(sec%60).padStart(2,'0');
}
function seekToIndex(i){
  if(!steps.length) return;
  stopEverything();
  idx = Math.max(0, Math.min(i, steps.length-1));
  updateProgress();
  if(playing) runStep();
  else { renderCaptionFor(idx); setPhase('','⏸','En pause'); }
}
function seekToTime(target){
  if(!steps.length) return;
  target = Math.min(Math.max(target, 0), totalDur - 0.1);
  let i = 0;
  while(i+1 < steps.length && cum[i+1] <= target) i++;
  seekToIndex(i);
}
function seek(deltaSec){
  if(!steps.length) return;
  const target = (cum[idx]||0) + deltaSec;
  let i = 0;
  while(i+1 < steps.length && cum[i+1] <= target) i++;
  // les durées sont des estimations : si l'étape en cours est plus longue
  // que le saut demandé, le calcul ne bouge pas d'étape — on avance/recule
  // quand même d'au moins une étape pour que ±10 sec fasse toujours effet
  // au lieu de relancer la même phrase depuis le début.
  if(deltaSec > 0 && i <= idx) i = Math.min(idx+1, steps.length-1);
  else if(deltaSec < 0 && i >= idx) i = Math.max(idx-1, 0);
  seekToIndex(i);
}

/* ---------- voix : les meilleures d'abord ---------- */
function voiceScore(v){
  const n = (v.name||'').toLowerCase();
  let s = 0;
  if(/natural|neural/.test(n)) s += 100;
  if(/siri/.test(n)) s += 90;
  if(/premium|enhanced|améliorée/.test(n)) s += 80;
  if(!v.localService) s += 20;
  if(/google/.test(n)) s += 10;
  // Voix Edge (Natural) préférées : Xiaoxiao pour le chinois, Ariane pour
  // le français — les mettre en tête parmi les nombreuses voix « Natural ».
  if(/xiaoxiao/.test(n)) s += 30;
  if(/ariane/.test(n)) s += 30;
  return s;
}
function pickBest(list){ return list.slice().sort((a,b)=>voiceScore(b)-voiceScore(a))[0] || null; }
/* mémorisation locale des préférences (voix, vitesses) */
const store = {
  get(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } },
  set(k,v){ try{ localStorage.setItem(k,v); }catch(e){} }
};
let userZhChoice = store.get('zhVoice'), userFrChoice = store.get('frVoice');
function fillSelect(sel, list, current){
  sel.innerHTML = '';
  list.forEach(v=>{
    const o = document.createElement('option');
    o.value = v.name;
    o.textContent = v.name + (voiceScore(v) >= 80 ? ' ★' : '');
    if(current && v.name === current.name) o.selected = true;
    sel.appendChild(o);
  });
}
function loadVoices(){
  voices = synth.getVoices();
  const zhList = voices.filter(v=>/^zh/i.test(v.lang));
  const frList = voices.filter(v=>/^fr/i.test(v.lang));
  const newZh = (userZhChoice && zhList.find(v=>v.name===userZhChoice)) || pickBest(zhList.filter(v=>/zh[-_]CN/i.test(v.lang))) || pickBest(zhList);
  const newFr = (userFrChoice && frList.find(v=>v.name===userFrChoice)) || pickBest(frList.filter(v=>/fr[-_]FR/i.test(v.lang))) || pickBest(frList);
  // certains navigateurs redéclenchent onvoiceschanged en cours de lecture avec une
  // liste momentanément vide (Bluetooth, verrouillage d'écran…) : ne jamais régresser
  // vers "aucune voix" si on en avait déjà trouvé une bonne — ça évite un bascule
  // soudain vers une voix de secours dans une autre langue.
  if(newZh) zhVoice = newZh;
  if(newFr) frVoice = newFr;
  if(!zhVoice && $('voiceWarn')) $('voiceWarn').style.display='block';
  if($('zhSelect')){ fillSelect($('zhSelect'), zhList, zhVoice); fillSelect($('frSelect'), frList, frVoice); }
}
loadVoices();
if(synth.onvoiceschanged !== undefined) synth.onvoiceschanged = loadVoices;

/* ---------- narration mixte fr/zh ---------- */
function parseNarration(text){
  const segs = [];
  const re = /\[\[([^\|\]]+)\|([^\]]+)\]\]/g;
  let last = 0, m;
  while((m = re.exec(text)) !== null){
    if(m.index > last) segs.push({lang:'fr', text:text.slice(last, m.index)});
    segs.push({lang:'zh', hanzi:m[1], pinyin:m[2]});
    last = re.lastIndex;
  }
  if(last < text.length) segs.push({lang:'fr', text:text.slice(last)});
  return segs;
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

function updateProgress(){
  const t = cum[Math.min(idx,steps.length-1)]||0;
  $('barFill').style.width = (totalDur ? t/totalDur*100 : 0).toFixed(1)+'%';
  $('stepLbl').textContent = `Étape ${Math.min(idx+1,steps.length)} / ${steps.length}`;
  $('timeLbl').textContent = fmt(cum[Math.min(idx,steps.length-1)]||0) + ' / ' + fmt(totalDur);
}

/* ---------- parole ---------- */
function speak(text, voice, lang, rate, token, onend){
  const u = new SpeechSynthesisUtterance(text);
  if(voice) u.voice = voice;
  u.lang = lang;
  u.rate = Math.max(0.1, Math.min(rate, 2));
  const done = ()=>{ if(playing && token===runToken) onend(); };
  u.onend = done;
  u.onerror = done;
  synth.speak(u);
}
function speakSegments(segs, i, token, onend){
  if(!playing || token!==runToken) return;
  if(i >= segs.length){ onend(); return; }
  const s = segs[i];
  if(s.lang==='fr'){
    const txt = s.text.trim();
    if(!txt){ speakSegments(segs, i+1, token, onend); return; }
    setPhase('speak-fr','🗣️','Écoute (français)');
    speak(txt, frVoice, 'fr-FR', frSpeedMult, token, ()=>speakSegments(segs, i+1, token, onend));
  } else {
    setPhase('speak-zh','🀄','Écoute (chinois)');
    const r = 0.6 * ZH_SLOW * zhSpeedMult;
    speak(s.hanzi, zhVoice, 'zh-CN', r, token, ()=>speakSegments(segs, i+1, token, onend));
  }
}

function stopEverything(){
  runToken++;
  synth.cancel();
  clearTimers();
  speechPaused = false;
  pauseRemaining = 0;
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
  speechPaused = false;
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
    if(recState.active){ setTimeout(stopRecording, 1500); }
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
  setArc(idx/steps.length);
  if(s.t==='fr'){
    renderContentCaption(s);
    speakSegments(parseNarration(s.text), 0, token, next);
  } else if(s.t==='zh'){
    renderContentCaption(s);
    setPhase('speak-zh','🀄','Écoute (chinois)');
    const r = s.rate * ZH_SLOW * zhSpeedMult;
    speak(s.zh, zhVoice, 'zh-CN', r, token, next);
  } else if(s.t==='hold'){
    renderCaptionFor(idx, s.label);
    if(continuous){
      // MODE CONTINU : pause chronométrée (5 s par défaut, personnalisable) au lieu d'un arrêt
      const sec = s.sec || 5;
      setPhase('pause-p','⏳','À toi…');
      pauseTotal = sec;
      startTimedPause(sec, sec, token);
    } else {
      // PAUSE AUTOMATIQUE : le texte précédent reste affiché
      playing = false; syncPlayBtn();
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
  syncBg();
}

function play(){
  if(playing) return;
  // Accueil, aucune leçon chargée : rien à jouer, on ouvre le menu.
  if(playerChapterIdx < 0){ showFolders(); return; }
  playing = true; syncPlayBtn();
  // 1) une phrase était suspendue en plein milieu → on la reprend là où elle s'était arrêtée
  if(speechPaused){
    speechPaused = false;
    const cur = steps[idx];
    if(cur){
      if(cur.t==='zh'){ renderContentCaption(cur); setPhase('speak-zh','🀄','Écoute (chinois)'); }
      else if(cur.t==='fr'){ renderContentCaption(cur); }
    }
    synth.resume();
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
  if(steps[idx] && steps[idx].t==='hold'){ idx++; }
  runStep();
}

function pause(){
  if(!playing) return;
  playing = false; syncPlayBtn();
  if(synth.speaking && !synth.paused){
    // suspendre la phrase EN COURS sans la perdre
    synth.pause();
    speechPaused = true;
  } else {
    // suspendre une pause chronométrée (pauseRemaining déjà tenu à jour)
    clearTimers();
  }
  setPhase('','⏸','En pause — ▶ pour reprendre');
}

$('playBtn').addEventListener('click', ()=> playing?pause():play());
$('fwdBtn').addEventListener('click', ()=> seek(+10));
$('backBtn').addEventListener('click', ()=> seek(-10));
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
  // si on active le mode continu pendant un arrêt automatique, on repart aussitôt
  if(continuous && !playing && steps[idx] && steps[idx].t==='hold'){ play(); }
});
$('chainChip').addEventListener('click', e=>{
  autoChain=!autoChain; e.target.classList.toggle('on',autoChain);
});

/* ---- curseurs de vitesse 🐢→🐇 (0–100, 50 = vitesse normale)
       0 = moitié moins vite (×0.5) · 100 = moitié plus vite (×1.5).
       S'applique à la prochaine phrase prononcée. ---- */
let zhSpeedMult = 1, frSpeedMult = 1;
const speedMult = v => Math.pow(3, (v-50)/50);   // 0→×0.33 · 50→×1 · 100→×3
$('zhSpeed').addEventListener('input', e=>{ zhSpeedMult = speedMult(+e.target.value); store.set('zhSpeed', e.target.value); });
$('frSpeed').addEventListener('input', e=>{ frSpeedMult = speedMult(+e.target.value); store.set('frSpeed', e.target.value); });
/* restaurer les vitesses mémorisées */
(function(){
  const zs = store.get('zhSpeed'), fs = store.get('frSpeed');
  if(zs !== null){ $('zhSpeed').value = zs; zhSpeedMult = speedMult(+zs); }
  if(fs !== null){ $('frSpeed').value = fs; frSpeedMult = speedMult(+fs); }
})();

/* ---- panneau voix ---- */
$('voiceChip').addEventListener('click', ()=>{ $('voicePanel').classList.toggle('open'); loadVoices(); });
$('zhSelect').addEventListener('change', e=>{ userZhChoice=e.target.value; zhVoice=voices.find(v=>v.name===userZhChoice)||zhVoice; store.set('zhVoice', userZhChoice); });
$('frSelect').addEventListener('change', e=>{ userFrChoice=e.target.value; frVoice=voices.find(v=>v.name===userFrChoice)||frVoice; store.set('frVoice', userFrChoice); });
$('zhTest').addEventListener('click', ()=>{
  synth.cancel();
  const u = new SpeechSynthesisUtterance('现在几点？现在十点半。');
  if(zhVoice) u.voice=zhVoice; u.lang='zh-CN'; u.rate=0.6*ZH_SLOW*zhSpeedMult;
  synth.speak(u);
});
$('frTest').addEventListener('click', ()=>{
  synth.cancel();
  const u = new SpeechSynthesisUtterance('Bonjour, je suis la voix du narrateur.');
  if(frVoice) u.voice=frVoice; u.lang='fr-FR'; u.rate=frSpeedMult;
  synth.speak(u);
});

/* ============================================================
   Contrôle par les écouteurs (AirPods, casques Bluetooth)
   Une piste silencieuse en boucle enregistre la leçon comme un
   « média » auprès du système : la pince des AirPods met en
   pause / reprend, et double/triple pince = +10 s / -10 s.
   ============================================================ */
const bg = new Audio('data:audio/wav;base64,UklGRmQfAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YUAfAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA==');
bg.loop = true;
let syncingBg = false;
function syncBg(){
  syncingBg = true;
  try{
    if(playing){ const p = bg.play(); if(p && p.catch) p.catch(()=>{}); }
    else bg.pause();
    if('mediaSession' in navigator){
      navigator.mediaSession.playbackState = playing ? 'playing' : 'paused';
    }
  }catch(e){}
  setTimeout(()=>{ syncingBg = false; }, 350);
}
// si le système (AirPods, écran verrouillé…) met la piste en pause/lecture, on suit
bg.addEventListener('pause', ()=>{ if(!syncingBg && playing) pause(); });
bg.addEventListener('play',  ()=>{ if(!syncingBg && !playing) play(); });

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
  H('nexttrack',     ()=> seek(+10));
  H('previoustrack', ()=> seek(-10));
  H('seekforward',   ()=> seek(+10));
  H('seekbackward',  ()=> seek(-10));
}

buildTimeline();
updateProgress();

/* ============================================================
   Export MP3 — capture l'audio de l'onglet (Edge/Chrome, PC)
   puis encode en MP3 dans le navigateur (lamejs).
   ============================================================ */
const recState = {active:false, recorder:null, chunks:[], stream:null, prevContinuous:false};
function recSupported(){ return !!(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia); }

async function startRecording(){
  if(!recSupported()){
    $('recHint').textContent = "⚠️ Disponible uniquement sur ordinateur (Edge ou Chrome) — pas sur iPhone/iPad.";
    return;
  }
  try{
    const stream = await navigator.mediaDevices.getDisplayMedia({video:true, audio:true});
    const atracks = stream.getAudioTracks();
    if(!atracks.length){
      stream.getTracks().forEach(t=>t.stop());
      $('recHint').textContent = "⚠️ Aucun son capturé : dans la fenêtre de partage, choisis « Cet onglet » et coche « Partager aussi l'audio de l'onglet », puis réessaie.";
      return;
    }
    const rec = new MediaRecorder(new MediaStream(atracks));
    recState.active = true; recState.recorder = rec; recState.chunks = []; recState.stream = stream;
    rec.ondataavailable = e=>{ if(e.data.size) recState.chunks.push(e.data); };
    rec.onstop = finishRecording;
    rec.start(1000);
    // rejouer la leçon depuis le début, en mode continu
    recState.prevContinuous = continuous;
    continuous = true; $('contChip').classList.add('on');
    stopEverything(); idx = 0;
    $('recBtn').style.display='none'; $('recStopBtn').style.display='inline-block';
    $('recHint').textContent = "⏺ Enregistrement en cours… La leçon se joue en entier : laisse l'onglet ouvert, le son activé, et ne touche à rien. Le fichier sera téléchargé à la fin.";
    if(!playing){ playing=true; syncPlayBtn(); }
    runStep();
  }catch(err){
    $('recHint').textContent = "Capture annulée ou refusée.";
  }
}
function stopRecording(){
  if(recState.recorder && recState.recorder.state !== 'inactive') recState.recorder.stop();
}
async function finishRecording(){
  recState.active = false;
  if(recState.stream) recState.stream.getTracks().forEach(t=>t.stop());
  $('recBtn').style.display='inline-block'; $('recStopBtn').style.display='none';
  if(!recState.prevContinuous){ continuous=false; $('contChip').classList.remove('on'); }
  const blob = new Blob(recState.chunks, {type: (recState.recorder && recState.recorder.mimeType) || 'audio/webm'});
  $('recHint').textContent = "Encodage du MP3… (quelques secondes)";
  try{
    const mp3 = await encodeMp3(blob);
    offerDownload(mp3, document.title.replace(/[^\w\- ]+/g,'').trim().replace(/\s+/g,'_') + '.mp3');
    $('recHint').textContent = "✅ MP3 prêt — le téléchargement a démarré.";
  }catch(e){
    offerDownload(blob, 'lecon.webm');
    $('recHint').textContent = "MP3 impossible ici (bibliothèque inaccessible) : fichier .webm téléchargé à la place — lisible par VLC et la plupart des lecteurs, convertible en MP3 en ligne.";
  }
}
function offerDownload(blob, name){
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name; document.body.appendChild(a); a.click();
  setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); }, 8000);
}
function loadLame(){
  return new Promise((res, rej)=>{
    if(window.lamejs) return res();
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/lamejs/1.2.0/lame.min.js';
    s.onload = ()=>res(); s.onerror = ()=>rej(new Error('lamejs indisponible'));
    document.head.appendChild(s);
  });
}
async function encodeMp3(blob){
  await loadLame();
  const buf = await blob.arrayBuffer();
  const ctx = new (window.AudioContext||window.webkitAudioContext)();
  const audio = await ctx.decodeAudioData(buf);
  const ch = audio.numberOfChannels >= 2 ? 2 : 1;
  const enc = new lamejs.Mp3Encoder(ch, audio.sampleRate, 128);
  const block = 1152;
  const l = audio.getChannelData(0);
  const r = ch===2 ? audio.getChannelData(1) : null;
  const toI16 = f => { const v = Math.max(-1, Math.min(1, f)); return v<0 ? v*32768 : v*32767; };
  const out = [];
  const li = new Int16Array(block), ri = ch===2 ? new Int16Array(block) : null;
  for(let i=0;i<l.length;i+=block){
    const n = Math.min(block, l.length-i);
    for(let j=0;j<n;j++){ li[j]=toI16(l[i+j]); if(ri) ri[j]=toI16(r[i+j]); }
    const d = ch===2 ? enc.encodeBuffer(li.subarray(0,n), ri.subarray(0,n)) : enc.encodeBuffer(li.subarray(0,n));
    if(d.length) out.push(new Int8Array(d));
  }
  const end = enc.flush();
  if(end.length) out.push(new Int8Array(end));
  ctx.close();
  return new Blob(out, {type:'audio/mpeg'});
}
$('recChip').addEventListener('click', ()=>{ $('recPanel').classList.toggle('open'); });
$('recBtn').addEventListener('click', startRecording);
$('recStopBtn').addEventListener('click', ()=>{ pause(); stopRecording(); });

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
    steps = L.build();
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
  $('voicePanel').classList.remove('open');
  $('recPanel').classList.remove('open');
  if(!resuming){
    // premier geste utilisateur : débloque l'audio
    const warm = new SpeechSynthesisUtterance(' ');
    warm.volume = 0; synth.speak(warm);
    try{ const p = bg.play(); if(p && p.catch) p.catch(()=>{}); }catch(e){}
    play();
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
   Timeline cliquable / glissable
   Clic ou glisser sur la barre de progression = se déplacer
   dans la leçon. Pendant le glisser, seule la barre bouge ;
   le saut est fait au relâchement.
   ============================================================ */
const barEl = document.querySelector('.progress .bar');
let barDragging = false;
function barFrac(clientX){
  const r = barEl.getBoundingClientRect();
  return Math.min(Math.max((clientX - r.left)/r.width, 0), 1);
}
function barPreview(f){
  $('barFill').style.width = (f*100).toFixed(1)+'%';
  $('timeLbl').textContent = fmt(f*totalDur) + ' / ' + fmt(totalDur);
}
barEl.addEventListener('pointerdown', e=>{
  if(!steps.length) return;
  barDragging = true;
  barEl.classList.add('dragging');
  try{ barEl.setPointerCapture(e.pointerId); }catch(err){}
  barPreview(barFrac(e.clientX));
  e.preventDefault();
});
barEl.addEventListener('pointermove', e=>{
  if(barDragging) barPreview(barFrac(e.clientX));
});
let lastPointerSeek = 0;
barEl.addEventListener('pointerup', e=>{
  if(!barDragging) return;
  barDragging = false;
  barEl.classList.remove('dragging');
  lastPointerSeek = Date.now();
  seekToTime(barFrac(e.clientX) * totalDur);
});
barEl.addEventListener('pointercancel', ()=>{ barDragging = false; barEl.classList.remove('dragging'); updateProgress(); });
// fallback : simple clic (navigateurs sans pointer events fiables)
barEl.addEventListener('click', e=>{
  if(!steps.length) return;
  if(Date.now() - lastPointerSeek < 600) return;  // déjà géré par pointerup
  seekToTime(barFrac(e.clientX) * totalDur);
});
