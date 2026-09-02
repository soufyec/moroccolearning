/* Dar Darija — logique de l app. Tout est local au telephone. */
(function(){
"use strict";

/* ---------------------------------------------------------------- etat */
const KEY = "dardarija.v1";
const DAY = 864e5;
const ALL = THEMES.flatMap(t => t.items.map(i => Object.assign({theme:t.id}, i)));
const BY_ID = new Map(ALL.map(i => [i.id, i]));
const INTERVALS = [0, 1, 2, 5, 12, 30];   /* jours, par boite Leitner */

const S = load();
function load(){
  let s = null;
  try { s = JSON.parse(localStorage.getItem(KEY) || "null"); } catch(e){}
  return Object.assign({ srs:{}, lastDay:null, streak:0, sessions:0, rate:0.8, theme:"auto" }, s || {});
}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e){} }
const dayKey = d => new Date(d||Date.now()).toISOString().slice(0,10);

/* semaine du parcours : six seances par semaine, on avance en travaillant */
function week(){ return Math.min(PROGRAM.length, Math.floor(S.sessions/6) + 1); }
function weekPlan(){ return PROGRAM[week()-1]; }
function dueItems(){ const now = Date.now(); return ALL.filter(i => S.srs[i.id] && S.srs[i.id].due <= now); }
function seenCount(list){ return list.filter(i => S.srs[i.id]).length; }
function masteredCount(list){ return list.filter(i => S.srs[i.id] && S.srs[i.id].box >= 5).length; }
function freshFor(themeIds, n){
  const out = [];
  for (const tid of themeIds){
    for (const i of ALL) if (i.theme === tid && !S.srs[i.id]){ out.push(i); if (out.length >= n) return out; }
  }
  for (const i of ALL) if (!S.srs[i.id]){ out.push(i); if (out.length >= n) return out; }
  return out;
}
function markSession(){
  const k = dayKey();
  if (S.lastDay === k) return;
  const yesterday = dayKey(Date.now() - DAY);
  S.streak = (S.lastDay === yesterday) ? S.streak + 1 : 1;
  S.lastDay = k; S.sessions++; save(); paintChrome();
}

/* -------------------------------------------------------------- audio */
/* Priorite : la voix enregistree (celle de ton copain) ; sinon la synthese. */
const Rec = {
  db:null, have:new Set(),
  open(){
    return new Promise(res => {
      let r; try { r = indexedDB.open("dardarija-audio", 1); } catch(e){ return res(null); }
      r.onupgradeneeded = () => { r.result.createObjectStore("clips"); };
      r.onsuccess = () => res(r.result);
      r.onerror = () => res(null);
    });
  },
  async init(){
    this.db = await this.open();
    if (!this.db) return;
    await new Promise(res => {
      try {
        const q = this.db.transaction("clips").objectStore("clips").getAllKeys();
        q.onsuccess = () => { (q.result||[]).forEach(k => this.have.add(k)); res(); };
        q.onerror = () => res();
      } catch(e){ res(); }
    });
  },
  put(id, blob){
    return new Promise(res => {
      if (!this.db) return res(false);
      try {
        const tx = this.db.transaction("clips","readwrite");
        tx.objectStore("clips").put(blob, id);
        tx.oncomplete = () => { this.have.add(id); res(true); };
        tx.onerror = () => res(false);
      } catch(e){ res(false); }
    });
  },
  get(id){
    return new Promise(res => {
      if (!this.db) return res(null);
      try {
        const q = this.db.transaction("clips").objectStore("clips").get(id);
        q.onsuccess = () => res(q.result || null);
        q.onerror = () => res(null);
      } catch(e){ res(null); }
    });
  },
  del(id){
    return new Promise(res => {
      if (!this.db) return res();
      try {
        const tx = this.db.transaction("clips","readwrite");
        tx.objectStore("clips").delete(id);
        tx.oncomplete = () => { this.have.delete(id); res(); };
        tx.onerror = () => res();
      } catch(e){ res(); }
    });
  }
};

let voices = [], player = null;
function arVoice(){
  return voices.find(v => /^ar[-_]MA/i.test(v.lang)) || voices.find(v => /^ar/i.test(v.lang)) || null;
}
function refreshVoices(){
  try { voices = speechSynthesis.getVoices() || []; } catch(e){ voices = []; }
  const info = document.getElementById("voiceInfo");
  if (!info) return;
  const v = arVoice();
  info.textContent = v
    ? "Voix arabe trouvee sur cet appareil : " + v.name + ". Elle sert de depannage."
    : "Pas de voix arabe sur cet appareil. Le bouton ecouter ne marchera que sur les phrases ou tu as enregistre une vraie voix. Sur iPhone : Reglages, Accessibilite, Contenu enonce, Voix, Arabe.";
}
async function play(id){
  const item = BY_ID.get(id); if (!item) return;
  try { speechSynthesis.cancel(); } catch(e){}
  if (player){ player.pause(); player = null; }
  const blob = Rec.have.has(id) ? await Rec.get(id) : null;
  if (blob){
    player = new Audio(URL.createObjectURL(blob));
    player.play().catch(()=>{});
    return;
  }
  const v = arVoice();
  try {
    const u = new SpeechSynthesisUtterance(item.ar);
    u.lang = v ? v.lang : "ar-MA";
    if (v) u.voice = v;
    u.rate = S.rate;
    speechSynthesis.speak(u);
  } catch(e){}
}
async function playBlob(blob){
  if (!blob) return;
  if (player){ player.pause(); }
  player = new Audio(URL.createObjectURL(blob));
  player.play().catch(()=>{});
}

/* enregistrement : un appui demarre, un deuxieme arrete (10 s maxi) */
let recorder = null, recTarget = null;
async function toggleRecord(btn, onDone){
  if (recorder){ stopRecord(); return; }
  let stream;
  try { stream = await navigator.mediaDevices.getUserMedia({audio:true}); }
  catch(e){ btn.textContent = "micro refuse"; return; }
  const chunks = [];
  try { recorder = new MediaRecorder(stream); }
  catch(e){ stream.getTracks().forEach(t=>t.stop()); btn.textContent = "micro indisponible"; return; }
  recTarget = btn;
  const label = btn.innerHTML;
  btn.dataset.state = "rec";
  btn.innerHTML = "<span>arreter</span>";
  recorder.ondataavailable = e => chunks.push(e.data);
  recorder.onstop = () => {
    stream.getTracks().forEach(t => t.stop());
    btn.dataset.state = ""; btn.innerHTML = label;
    recorder = null; recTarget = null;
    onDone(new Blob(chunks, {type: chunks[0] ? chunks[0].type : "audio/webm"}));
  };
  recorder.start();
  setTimeout(() => { if (recorder) stopRecord(); }, 10000);
}
function stopRecord(){ try { recorder && recorder.stop(); } catch(e){ recorder = null; } }

/* ------------------------------------------------------------- rendus */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[<>&]/g, c => ({"<":"&lt;",">":"&gt;","&":"&amp;"}[c]));
const ICON = {
  play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.2v13.6L19 12z"/></svg>',
  mic :'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="9" y="2.6" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3.4"/></svg>',
  star:'<svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.6 15 5.4l4.7-.8-.8 4.7 3.8 3-3.8 3 .8 4.7-4.7-.8-3 3.8-3-3.8-4.7.8.8-4.7-3.8-3 3.8-3-.8-4.7 4.7.8z"/></svg>'
};

function phraseCard(item){
  const st = S.srs[item.id];
  const mastered = st && st.box >= 5;
  const hasRec = Rec.have.has(item.id);
  return '<article class="phrase' + (mastered ? " mastered" : "") + '" data-id="' + item.id + '">'
    + '<div class="fr">' + esc(item.fr) + (mastered ? " " + ICON.star : "") + '</div>'
    + '<p class="phon">' + esc(item.phon) + '</p>'
    + (item.alt ? '<div class="alt"><b>' + esc(item.alt.l) + '</b> &middot; ' + esc(item.alt.phon) + '</div>' : "")
    + '<div class="ar" aria-hidden="true">' + esc(item.ar) + '</div>'
    + (item.note ? '<div class="note">' + item.note + '</div>' : "")
    + '<div class="controls">'
      + '<button class="chip play" data-act="play">' + ICON.play + ' Ecouter</button>'
      + '<button class="chip rec' + (hasRec ? " has" : "") + '" data-act="ref">' + ICON.mic + (hasRec ? " Sa voix, enregistree" : " Enregistrer sa voix") + '</button>'
      + '<button class="chip" data-act="me">' + ICON.mic + ' Moi</button>'
      + (hasRec ? '<button class="chip" data-act="del" aria-label="Supprimer la voix enregistree">&times;</button>' : "")
    + '</div></article>';
}

/* clics sur les fiches, delegue au document */
document.addEventListener("click", async e => {
  const btn = e.target.closest("[data-act]");
  if (!btn) return;
  const card = btn.closest("[data-id]"); if (!card) return;
  const id = card.dataset.id;
  const act = btn.dataset.act;
  if (act === "play") play(id);
  if (act === "ref") toggleRecord(btn, async blob => {
    await Rec.put(id, blob);
    refreshCard(card, id);
    playBlob(blob);
  });
  if (act === "me") toggleRecord(btn, blob => playBlob(blob));
  if (act === "del"){ await Rec.del(id); refreshCard(card, id); }
});
function refreshCard(card, id){
  const item = BY_ID.get(id); if (!item) return;
  const tmp = document.createElement("div");
  tmp.innerHTML = phraseCard(item);
  card.replaceWith(tmp.firstChild);
}

/* --------------------------------------------------------- aujourd hui */
function paintToday(){
  const p = weekPlan(), due = dueItems().length;
  const news = freshFor(p.themes, 5);
  const t1 = THEMES.find(t => t.id === p.themes[0]);
  $("#todayCard").innerHTML =
      '<div class="today-head">'
    +   '<span class="wk">Semaine ' + p.n + ' sur 8</span>'
    +   '<h2>' + esc(p.title) + '</h2>'
    +   '<span class="sub">' + esc(p.desc) + '</span>'
    + '</div>'
    + '<ul class="steps">'
    +   '<li><span class="n">1</span><span><span class="t">Reviser ' + (due || "0") + ' phrase' + (due>1?"s":"") + '</span>'
    +     '<span class="d">' + (due ? "Elles sont sur le point de sortir de ta memoire. Cinq minutes." : "Rien a reviser pour l instant. Passe a l etape 2.") + '</span>'
    +     '<span class="btn-row" style="margin-top:9px"><button class="btn" data-go2="drill"' + (due?"":" disabled") + '>Reviser</button></span></span></li>'
    +   '<li><span class="n">2</span><span><span class="t">Apprendre 5 phrases : ' + esc(t1 ? t1.name : "") + '</span>'
    +     '<span class="d">Ecoute, puis repete a voix haute trois fois. Pas dans ta tete : a voix haute.</span>'
    +     '<span class="btn-row" style="margin-top:9px"><button class="btn ghost" data-open="' + esc(p.themes[0]) + '">Ouvrir le theme</button></span></span></li>'
    +   '<li><span class="n">3</span><span><span class="t">Envoyer le vocal du soir</span>'
    +     '<span class="d">Les trois phrases ci-dessous, en vocal, a ton copain. Vingt secondes.</span></span></li>'
    + '</ul>';

  const vocal = (news.length ? news : ALL.filter(i => S.srs[i.id]).slice(0,3)).slice(0,3);
  $("#vocal").innerHTML = vocal.map(phraseCard).join("");

  const done = ALL.filter(i => S.srs[i.id]).length;
  $("#tiles").innerHTML =
      tile(done, "phrases vues")
    + tile(masteredCount(ALL), "acquises")
    + tile(S.sessions, "seances");
}
const tile = (v,k) => '<div class="tile"><div class="v">' + v + '</div><div class="k">' + k + '</div></div>';

/* -------------------------------------------------------------- themes */
function paintThemes(){
  $("#themeList").innerHTML = THEMES.map(t => {
    const n = t.items.length, m = masteredCount(t.items), s = seenCount(t.items);
    return '<button class="theme' + (t.key ? " key" : "") + '" data-open="' + t.id + '">'
      + '<span class="name">' + esc(t.name) + (t.key ? ' <span class="tagline">essentiel</span>' : "") + '</span>'
      + '<span class="desc">' + esc(t.desc) + '</span>'
      + '<span class="meter"><span class="count">' + m + " / " + n + '</span>'
      + '<span class="bar"><i style="width:' + Math.round(100*(s?Math.max(m/n,0.04):0)) + '%"></i></span></span>'
      + '</button>';
  }).join("");
}
function openTheme(id){
  const t = THEMES.find(x => x.id === id); if (!t) return;
  go("themes");
  $("#themesIndex").classList.add("hidden");
  const d = $("#themeDetail");
  d.classList.remove("hidden");
  d.innerHTML = '<button class="btn quiet" data-back="1" style="margin-bottom:16px">&larr; Tous les themes</button>'
    + '<p class="eyebrow">' + t.items.length + ' phrases</p>'
    + '<h1>' + esc(t.name) + '</h1><p>' + esc(t.desc) + '</p>'
    + '<div style="margin:16px 0 20px"><button class="btn block" data-drill="' + t.id + '">S entrainer sur ce theme</button></div>'
    + t.items.map(phraseCard).join("");
  window.scrollTo(0,0);
}
function closeTheme(){
  $("#themeDetail").classList.add("hidden");
  $("#themesIndex").classList.remove("hidden");
  paintThemes();
}

/* -------------------------------------------------------------- drills */
let Q = [], qi = 0, qn = 0, shown = false;
function startDrill(themeId){
  const due = dueItems();
  const plan = weekPlan();
  let list;
  if (themeId){
    const t = THEMES.find(x => x.id === themeId);
    list = t.items.map(i => Object.assign({theme:t.id}, i));
  } else {
    list = shuffle(due).slice(0, 18).concat(freshFor(plan.themes, due.length < 6 ? 5 : 3));
  }
  Q = list; qi = 0; qn = list.length; shown = false;
  go("drill"); paintDrill();
}
function shuffle(a){ a = a.slice(); for (let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

function paintDrill(){
  const root = $("#drillRoot");
  if (!Q.length){
    const due = dueItems().length;
    root.innerHTML = '<p class="eyebrow">Revision</p><h1>' + (due ? due + " phrases t attendent" : "Rien a reviser maintenant") + '</h1>'
      + '<p>' + (due ? "L app te ressort chaque phrase juste avant le moment ou tu l aurais oubliee." :
         "Reviens plus tard, ou apprends de nouvelles phrases : elles entreront automatiquement dans tes revisions.") + '</p>'
      + '<div class="btn-row" style="margin-top:14px"><button class="btn" data-drill="">Commencer la seance</button>'
      + '<button class="btn ghost" data-go2="themes">Voir les themes</button></div>';
    return;
  }
  if (qi >= Q.length){
    markSession();
    root.innerHTML = '<div class="center" style="padding:30px 0">' + ICON.star
      + '<h1 style="margin-top:10px">Seance terminee</h1>'
      + '<p style="margin:0 auto 18px">' + qn + ' phrases passees. Envoie maintenant ton vocal du soir, sinon ca reste de la theorie.</p>'
      + '<div class="btn-row" style="justify-content:center"><button class="btn" data-go2="today">Le vocal du soir</button>'
      + '<button class="btn ghost" data-drill="">Encore une seance</button></div></div>';
    paintToday(); paintChrome(); return;
  }
  const item = Q[qi];
  const st = S.srs[item.id];
  const listen = !st || st.box <= 2;      /* on reconnait d abord, on produit ensuite */
  root.innerHTML =
      '<div class="drill-top"><span class="progressline"><i style="width:' + Math.round(100*qi/qn) + '%"></i></span>'
    + '<span class="muted" style="font-variant-numeric:tabular-nums">' + (qi+1) + " / " + qn + '</span></div>'
    + '<div class="drill">'
    + '<span class="mode ' + (listen ? "listen" : "speak") + '">' + (listen ? "Comprendre" : "Parler") + '</span>'
    + '<div class="prompt" data-id="' + item.id + '">'
      + (listen
          ? '<button class="bigplay" data-act="play" aria-label="Ecouter la phrase">' + ICON.play + '</button>'
            + '<p class="hint">Ecoute, puis devine le sens.</p>'
          : '<p class="ask">' + esc(item.fr) + '</p><p class="hint">Dis-le a voix haute, maintenant.</p>')
      + (shown
          ? '<div class="reveal">'
            + (listen ? '<div class="fr" style="margin-bottom:8px">' + esc(item.fr) + '</div>' : "")
            + '<p class="phon">' + esc(item.phon) + '</p>'
            + (item.alt ? '<div class="alt"><b>' + esc(item.alt.l) + '</b> &middot; ' + esc(item.alt.phon) + '</div>' : "")
            + (item.note ? '<div class="note" style="text-align:left">' + item.note + '</div>' : "")
            + '<div class="controls" style="justify-content:center">'
              + '<button class="chip play" data-act="play">' + ICON.play + ' Ecouter</button>'
              + '<button class="chip" data-act="me">' + ICON.mic + ' Moi</button></div>'
            + '</div>'
          : "")
    + '</div>'
    + (shown
        ? '<div class="grade">'
          + '<button class="g1" data-grade="1">A revoir<small>je sechais</small></button>'
          + '<button class="g2" data-grade="2">Presque<small>hesitation</small></button>'
          + '<button class="g3" data-grade="3">Je l ai<small>sortie sans effort</small></button></div>'
        : '<button class="btn block" data-reveal="1">Voir la reponse</button>')
    + '</div>';
  if (listen && !shown) setTimeout(() => play(item.id), 220);
}
function grade(g){
  const item = Q[qi];
  const st = S.srs[item.id] || { box:1, seen:0 };
  st.seen++;
  if (g === 1) st.box = 1;
  else if (g === 2) st.box = Math.max(1, st.box);
  else st.box = Math.min(5, st.box + 1);
  const days = INTERVALS[g === 1 ? 0 : st.box];
  st.due = Date.now() + (days ? days*DAY : 6e5);
  S.srs[item.id] = st; save();
  if (g === 1 && Q.length - qi > 1) Q.splice(Math.min(qi + 4, Q.length), 0, item);
  qi++; shown = false; paintDrill(); paintChrome();
}

/* --------------------------------------------------------------- guide */
function paintGuide(){
  $("#rules").innerHTML = GUIDE.rules.map(r =>
    '<li><span><b>' + esc(r.t) + '</b><span>' + esc(r.d) + '</span></span></li>').join("");
  $("#sounds").innerHTML = GUIDE.sounds.map(s =>
    '<div class="sound"><div class="sym">' + esc(s.sym) + '</div><div><h3>' + esc(s.name) + '</h3>'
    + '<div class="how">' + esc(s.how) + '</div><div class="ex">' + esc(s.ex) + '</div></div></div>').join("");
  const w = week();
  $("#weeks").innerHTML = PROGRAM.map(p =>
    '<div class="week' + (p.n === w ? " now" : "") + '"><div class="no">SEM ' + p.n + '</div>'
    + '<div><div class="t">' + esc(p.title) + (p.n === w ? " &middot; tu es ici" : "") + '</div>'
    + '<div class="d">' + esc(p.desc) + '</div></div></div>').join("");
  $("#rate").value = S.rate;
}

/* ------------------------------------------------------------ chrome */
function paintChrome(){
  const d = dueItems().length;
  const sk = $("#streak");
  sk.textContent = S.streak + (S.streak > 1 ? " jours d affilee" : " jour");
  sk.classList.toggle("hidden", S.streak === 0);
  $("#dueDot").classList.toggle("hidden", d === 0);
}
function go(view){
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("on", v.id === "v-" + view));
  document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", String(t.dataset.go === view)));
  if (view === "today") paintToday();
  if (view === "themes"){ if ($("#themeDetail").classList.contains("hidden")) paintThemes(); }
  if (view === "drill" && !Q.length) paintDrill();
  if (view === "guide") paintGuide();
  window.scrollTo(0,0);
}
function applyTheme(){
  if (S.theme === "auto") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", S.theme);
}

/* ------------------------------------------------------------- events */
document.addEventListener("click", e => {
  const t = e.target.closest("[data-go],[data-go2],[data-open],[data-back],[data-drill],[data-reveal],[data-grade]");
  if (!t) return;
  if (t.dataset.go) go(t.dataset.go);
  else if (t.dataset.go2) go(t.dataset.go2);
  else if (t.dataset.open !== undefined && t.hasAttribute("data-open")) openTheme(t.dataset.open);
  else if (t.dataset.back) closeTheme();
  else if (t.hasAttribute("data-drill")) startDrill(t.dataset.drill || null);
  else if (t.dataset.reveal){ shown = true; paintDrill(); const it = Q[qi]; if (it && S.srs[it.id] && S.srs[it.id].box > 2) setTimeout(()=>play(it.id), 150); }
  else if (t.dataset.grade) grade(Number(t.dataset.grade));
});
$("#themeBtn").addEventListener("click", () => {
  S.theme = S.theme === "auto" ? "dark" : S.theme === "dark" ? "light" : "auto";
  save(); applyTheme();
});
$("#rate").addEventListener("input", e => { S.rate = Number(e.target.value); save(); });
$("#resetBtn").addEventListener("click", () => {
  if (!confirm("Effacer ta progression et les voix enregistrees ? C est definitif.")) return;
  Object.keys(S.srs).forEach(k => delete S.srs[k]);
  S.streak = 0; S.sessions = 0; S.lastDay = null; save();
  Rec.have.forEach(id => Rec.del(id));
  location.reload();
});

/* --------------------------------------------------------------- boot */
applyTheme();
try { speechSynthesis.onvoiceschanged = refreshVoices; } catch(e){}
refreshVoices(); setTimeout(refreshVoices, 400);
Rec.init().then(() => { paintToday(); paintThemes(); paintChrome(); });
paintToday(); paintThemes(); paintGuide(); paintChrome();
})();
