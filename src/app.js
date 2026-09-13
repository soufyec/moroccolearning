/* Dar Darija — logique de l’app. Tout est local au téléphone. */
(function(){
"use strict";

/* ---------------------------------------------------------------- état */
const KEY = "dardarija.v1";
const DAY = 864e5;
const ALL = [];
THEMES.forEach(t => t.items.forEach(i => ALL.push(Object.assign({theme:t.id}, i))));
MOTS.forEach(c => c.items.forEach(i => ALL.push(Object.assign({theme:"mots", sub:c.cat}, i))));
VERBES.forEach(v => v.forms.forEach((f,k) => ALL.push(
  { id:v.id+"f"+k, theme:"verbes", sub:v.fr, fr:f.l, phon:f.phon, fp:f.fp, ar:f.ar })));
MOULES.forEach(m => m.ex.forEach((e,k) => ALL.push(
  { id:m.id+"e"+k, theme:"moules", sub:m.fr, fr:e.fr, phon:e.phon, fp:e.fp, ar:e.ar })));
const VIRTUELS = { mots:"Les mots", verbes:"Les verbes", moules:"Les moules" };
const BY_ID = new Map(ALL.map(i => [i.id, i]));
const INTERVALS = [0, 1, 2, 5, 12, 30];   /* jours, par boîte Leitner */
const NAME = "Chloé";

const S = load();
function load(){
  let s = null;
  try { s = JSON.parse(localStorage.getItem(KEY) || "null"); } catch(e){}
  const d = { srs:{}, lastDay:null, streak:0, best:0, sessions:0, hist:{}, rate:0.8, theme:"auto", script:"fr",
              notif:{ on:false, time:"19:00" }, motDay:null, motIdx:0, badges:[] };
  const out = Object.assign(d, s || {});
  out.notif = Object.assign({ on:false, time:"19:00" }, out.notif || {});
  out.hist = out.hist || {}; out.badges = out.badges || [];
  return out;
}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e){} }
const dayKey = d => { const x = new Date(d||Date.now()); return x.getFullYear() + "-" + String(x.getMonth()+1).padStart(2,"0") + "-" + String(x.getDate()).padStart(2,"0"); };
function today(){ const k = dayKey(); return S.hist[k] || (S.hist[k] = { r:0, n:0, ok:0 }); }

/* semaine du parcours : six séances par semaine, on avance en travaillant */
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
  S.best = Math.max(S.best || 0, S.streak);
  S.lastDay = k; S.sessions++; save(); paintChrome();
}
const doneToday = () => S.lastDay === dayKey();

/* ------------------------------------------------- un mot de Zagora */
/* Les messages du jour : ce que tu gagnes à parler darija chez lui. */
const MOTS_ZAGORA = [
  "La maman de Soufyan a du nouveau sur la voisine d’en face. Le récit est en darija, et il dure vingt minutes. Tu veux les détails ? Douze minutes de séance.",
  "À Zagora, le thé est servi. Sans darija, tu bois. Avec darija, tu dis <q>bla sokkar 3afak</q> et tu gardes tes dents.",
  "Son père va te demander <q>kliti ?</q> quatre fois aujourd’hui. Ce n’est pas de la logistique, c’est de l’affection. Prépare ta réponse.",
  "Imagine : tu dis <q>Allah ybarek f yeddik</q> à sa mère devant toute la table. Adoption immédiate, sans papiers.",
  "Un jour, sa mère dira quelque chose sur toi à Soufyan en pensant que tu ne comprends pas. Ce jour-là se prépare aujourd’hui.",
  "Les tantes de Zagora ont un dossier complet sur chaque mariage de la vallée du Drâa. Accès réservé aux darijophones.",
  "<q>ma klitich walou !</q> — Tu viens de manger trois assiettes. C’est un rituel, pas un reproche. Viens réviser comment répondre.",
  "Le couscous du vendredi n’attend personne. Ta séance non plus.",
  "Soufyan ne sera pas toujours là pour traduire. Sa mère, si. Douze minutes.",
  "Le jour où tu ris à la blague de son père avant que Soufyan la traduise, tu as gagné. Objectif : ce jour-là.",
  "Les potins de Zagora se racontent après le thé, en darija, quand les hommes sont partis. Réserve ta place.",
  "<q>twa77echtek</q> à sa mère au téléphone, et elle te garde la meilleure part de gâteau jusqu’à ta prochaine visite. Tu sais la dire ?",
  "Un <q>tbarkallah</q> oublié devant le bébé de la cousine, et c’est le mauvais œil. Douze minutes de révision sauvent une réputation.",
  "Aujourd’hui, quelqu’un à Zagora a dit <q>wa3ra !</q>. Tu saurais dire si c’était un compliment ?",
  "Sa mère te trouve déjà adorable. Imagine quand tu lui répondras <q>labas, l7amdoullah</q> sans réfléchir.",
  "Le sucre dans le thé de Zagora se compte en cubes. Cinq. Ton seul rempart : <q>bla sokkar 3afak</q>.",
  "Sans darija, tu souris poliment pendant que sa mère raconte le mariage de la voisine. Avec, tu ris avec elle. Choisis.",
  "Le futur mari est de Zagora. Les dattes sont de Zagora. Les potins aussi. Il ne te manque que les mots.",
  "<q>khessni</q> (il me faut) marche avec le thé, le pain et la sieste. Trois besoins, un seul moule.",
  "Ce soir, une minute de monologue à voix haute. Sa mère ne t’entend pas encore. Ton accent, si.",
  "Sa grand-mère parle vite et ne répète qu’une fois. <q>3awdi b chwiya 3afak</q> est ta meilleure amie.",
  "Au souk de Zagora, on te dira <q>deux mille</q> pour cent dirhams. Le piège des riyals est dans l’app. Le vendeur aussi, presque.",
  "Fais-lui la surprise : réponds <q>wa 3likoum salam</q> avant que Soufyan ouvre la bouche.",
  "Une petite séance aujourd’hui, et c’est une phrase de plus que sa mère entendra avec un immense sourire.",
  "Quarante degrés à l’ombre à Zagora, et sa mère te trouvera quand même une couverture. Sache dire merci : <q>barakallahou fik</q>.",
  "On va te demander <q>wach kat3rfi tTayybi ?</q> (tu sais cuisiner ?). Ta réponse est prête dans l’app. Va la chercher.",
  "Si tu dis <q>chb3et</q> une seule fois, on te ressert. Il faut le dire quatre fois, avec le sourire. Entraîne-toi.",
  "Le silence gêné au salon, ou trois phrases de travers avec le sourire ? Sa famille préfère la deuxième option. Toujours.",
  "Ta série de jours est plus fragile qu’un verre de thé plein. Une séance, et elle tient.",
  "Un <q>nchallah</q> bien placé et tout le salon hoche la tête. Ça coûte deux syllabes.",
  "Sa mère ne te notera pas. Mais elle retiendra chaque mot de darija que tu sors. Ajoutes-en un aujourd’hui.",
  "Les voisines de Zagora ont déjà un avis sur le mariage. Tu veux savoir lequel ? Ça se passe en darija.",
  "Dernier service de la soirée : quelqu’un va dire <q>zidi chwiya</q>. Tu sais ce que ça veut dire ? Vérifie.",
  "La palmeraie, le coucher de soleil sur le Drâa… et sa mère qui te demande <q>n3esti mezyan ?</q>. Réponds-lui.",
  "<q>chwiya b chwiya</q>. C’est ce qu’ils diront de ton darija, et c’est un compliment. Mérite-le aujourd’hui.",
  "Sa mère t’appellera <q>benti</q> (ma fille) le jour où tu lui parleras en darija. Ce jour est plus proche que tu crois."
];
function motDuJour(){
  const k = dayKey();
  if (S.motDay !== k){
    S.motDay = k;
    S.motIdx = (S.motIdx + 1 + Math.floor(Math.random()*3)) % MOTS_ZAGORA.length;
    save();
  }
  return MOTS_ZAGORA[S.motIdx % MOTS_ZAGORA.length];
}
function autreMot(){ S.motIdx = (S.motIdx + 1) % MOTS_ZAGORA.length; save(); paintMot(); }
const plain = s => s.replace(/<q>/g, "« ").replace(/<\/q>/g, " »");

/* -------------------------------------------------------------- audio */
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
    ? "Voix arabe trouvée sur cet appareil : " + v.name + ". Elle sert de dépannage."
    : "Pas de voix arabe sur cet appareil. Le bouton écouter ne marchera que sur les phrases où tu as enregistré une vraie voix. Sur iPhone : Réglages, Accessibilité, Contenu énoncé, Voix, Arabe.";
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

/* enregistrement : un appui démarre, un deuxième arrête (10 s maxi) */
let recorder = null;
async function toggleRecord(btn, onDone){
  if (recorder){ stopRecord(); return; }
  let stream;
  try { stream = await navigator.mediaDevices.getUserMedia({audio:true}); }
  catch(e){ btn.textContent = "micro refusé"; return; }
  const chunks = [];
  try { recorder = new MediaRecorder(stream); }
  catch(e){ stream.getTracks().forEach(t=>t.stop()); btn.textContent = "micro indisponible"; return; }
  const label = btn.innerHTML;
  btn.dataset.state = "rec";
  btn.innerHTML = "<span>arrêter</span>";
  recorder.ondataavailable = e => chunks.push(e.data);
  recorder.onstop = () => {
    stream.getTracks().forEach(t => t.stop());
    btn.dataset.state = ""; btn.innerHTML = label;
    recorder = null;
    onDone(new Blob(chunks, {type: chunks[0] ? chunks[0].type : "audio/webm"}));
  };
  recorder.start();
  setTimeout(() => { if (recorder) stopRecord(); }, 10000);
}
function stopRecord(){ try { recorder && recorder.stop(); } catch(e){ recorder = null; } }
const buzz = p => { try { navigator.vibrate && navigator.vibrate(p); } catch(e){} };

/* ------------------------------------------------------------- rendus */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[<>&]/g, c => ({"<":"&lt;",">":"&gt;","&":"&amp;"}[c]));
/* graphie : lecture française par défaut, arabizi en second (c’est ce qui s’écrit en SMS) */
const line  = i => S.script === "fr" ? (i.fp || i.phon) : i.phon;
const other = i => S.script === "fr" ? i.phon : (i.fp || i.phon);
const otherLabel = () => S.script === "fr" ? "aussi écrit" : "se lit";
const note  = i => (S.script === "fr" ? (i.noteFp || i.note) : i.note) || "";
const ICON = {
  play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.2v13.6L19 12z"/></svg>',
  mic :'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="9" y="2.6" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3.4"/></svg>',
  star:'<svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.6 15 5.4l4.7-.8-.8 4.7 3.8 3-3.8 3 .8 4.7-4.7-.8-3 3.8-3-3.8-4.7.8.8-4.7-3.8-3 3.8-3-.8-4.7 4.7.8z"/></svg>',
  star8:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.6 15 5.4l4.7-.8-.8 4.7 3.8 3-3.8 3 .8 4.7-4.7-.8-3 3.8-3-3.8-4.7.8.8-4.7-3.8-3 3.8-3-.8-4.7 4.7.8z"/></svg>',
  shuffle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>',
  tea:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 9h11v6a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5z"/><path d="M16 11h2a2.5 2.5 0 0 1 0 5h-2M8 5c0-1 1-1 1-2M11 5c0-1 1-1 1-2"/></svg>',
  flame:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5c.6 3.6 3.5 5 3.5 9a3.5 3.5 0 0 1-7 0c0-1.4.6-2.4 1.2-3.2.3 1.2 1 1.8 1.8 1.8 0-2.4-2-3.6-2-6.6C10.7 3.2 11.3 2.8 12 2.5z"/><path d="M6.5 12.5C5.4 14 5 15.4 5 16.8A7 7 0 0 0 19 16.8c0-2-.8-3.6-1.9-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  ear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 10a6 6 0 0 1 12 0c0 3-2 4-3 6s-1 5-4 5"/><path d="M9.5 10a2.5 2.5 0 0 1 5 0c0 1.5-1.5 2-1.5 3.5"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.5-9.3C1.2 8.6 3.3 5 6.8 5c2 0 3.4 1.1 4.2 2.4C11.8 6.1 13.2 5 15.2 5c3.5 0 5.6 3.6 4.3 6.7C17.5 16.4 12 21 12 21z"/></svg>',
  plate:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/></svg>',
  bricks:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="8" height="7" rx="1.5"/><rect x="13" y="4" width="8" height="7" rx="1.5"/><rect x="8" y="13" width="8" height="7" rx="1.5"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3.5 11 12 4l8.5 7v9h-6v-6h-5v6h-6z"/></svg>',
  palm:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 21V9M12 9c-3-4-7-3-8-1 3 0 5 1 8 1zM12 9c3-4 7-3 8-1-3 0-5 1-8 1zM12 9c-1-4 1-7 4-7-1 2-2 4-4 7zM12 9C11 5 9 2 6 2c1 2 3 4 6 7z"/></svg>',
  crown:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z"/></svg>'
};

function phraseCard(item){
  const st = S.srs[item.id];
  const mastered = st && st.box >= 5;
  const hasRec = Rec.have.has(item.id);
  return '<article class="phrase' + (mastered ? " mastered" : "") + '" data-id="' + item.id + '">'
    + '<div class="fr">' + esc(item.fr) + (mastered ? " " + ICON.star : "") + '</div>'
    + '<p class="phon">' + esc(line(item)) + '</p>'
    + '<div class="alt2">' + otherLabel() + ' <span>' + esc(other(item)) + '</span></div>'
    + (item.alt ? '<div class="alt"><b>' + esc(item.alt.l) + '</b> &middot; ' + esc(line(item.alt)) + '</div>' : "")
    + '<div class="ar" aria-hidden="true">' + esc(item.ar) + '</div>'
    + (item.note ? '<div class="note">' + note(item) + '</div>' : "")
    + '<div class="controls">'
      + '<button class="chip play" data-act="play">' + ICON.play + ' Écouter</button>'
      + '<button class="chip" data-act="me">' + ICON.mic + ' M’écouter</button>'
      + '<button class="chip rec' + (hasRec ? " has" : "") + '" data-act="ref">' + ICON.mic + (hasRec ? " Ma version gardée" : " Garder ma version") + '</button>'
      + (hasRec ? '<button class="chip" data-act="del" aria-label="Supprimer ma version">&times;</button>' : "")
    + '</div></article>';
}

/* clics sur les fiches, délégué au document */
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

/* --------------------------------------------------------- aujourd’hui */
function greeting(){
  const h = new Date().getHours();
  if (h < 12) return { d:"Sbah l-khir", fr:"bonjour" };
  if (h < 18) return { d:"Labas", fr:"ça va ?" };
  return { d:"Msa l-khir", fr:"bonsoir" };
}
function paintToday(){
  const p = weekPlan(), due = dueItems().length;
  const news = freshFor(p.themes, 5);
  const first = p.themes[0], virt = VIRTUELS[first];
  const t1 = virt || (THEMES.find(t => t.id === first) || {}).name || "";
  const g = greeting();
  const done = doneToday();
  const dateStr = new Date().toLocaleDateString("fr-FR", { weekday:"long", day:"numeric", month:"long" });
  $("#hero").innerHTML =
      '<p class="date">' + esc(dateStr) + ' &middot; semaine ' + p.n + ' sur 8</p>'
    + '<h1 class="hi">' + esc(g.d) + ', <em>' + NAME + '</em></h1>'
    + '<p class="plan">' + (done
        ? "Séance faite. Sa mère serait fière. Tu peux en refaire une, ou passer au monologue du soir."
        : (due ? due + " phrase" + (due>1?"s":"") + " à réviser avant qu’elles s’échappent, puis 5 nouvelles. Douze minutes." : "Rien à réviser : cinq nouvelles phrases t’attendent. Douze minutes.")) + '</p>'
    + '<button class="btn block' + (done ? " done" : "") + '" data-drill="">' + (done ? "Encore une séance" : "Commencer ma séance") + '</button>'
    + '<div class="meta"><span><b>' + S.streak + '</b> jour' + (S.streak>1?"s":"") + ' d’affilée</span><span><b>' + masteredCount(ALL) + '</b> acquises</span><span><b>' + ALL.filter(i => S.srs[i.id]).length + '</b> vues sur ' + ALL.length + '</span></div>';
  paintMot();

  const openBtn = virt
    ? '<button class="btn ghost sm" data-go2="blocks">Ouvrir les briques</button>'
    : '<button class="btn ghost sm" data-open="' + esc(first) + '">Ouvrir le thème</button>';
  const h = today();
  $("#todayCard").innerHTML =
      '<div class="today-head">'
    +   '<span class="wk">Cette semaine</span>'
    +   '<h2>' + esc(p.title) + '</h2>'
    +   '<span class="sub">' + esc(p.desc) + '</span>'
    + '</div>'
    + '<ul class="steps">'
    +   '<li' + (h.r > 0 || !due ? ' class="ok"' : '') + '><span class="n">1</span><span><span class="t">Réviser ' + (due || "0") + ' phrase' + (due>1?"s":"") + '</span>'
    +     '<span class="d">' + (due ? "Elles sont sur le point de sortir de ta mémoire. Cinq minutes." : "Rien à réviser pour l’instant. Passe à l’étape 2.") + '</span>'
    +     '<span class="btn-row"><button class="btn sm" data-go2="drill"' + (due?"":" disabled") + '>Réviser</button></span></span></li>'
    +   '<li' + (h.n >= 5 ? ' class="ok"' : '') + '><span class="n">2</span><span><span class="t">Apprendre 5 nouvelles choses : ' + esc(t1) + '</span>'
    +     '<span class="d">Écoute, puis répète à voix haute trois fois. Pas dans ta tête : à voix haute.</span>'
    +     '<span class="btn-row">' + openBtn + '</span></span></li>'
    +   '<li><span class="n">3</span><span><span class="t">Le monologue du soir</span>'
    +     '<span class="d">Une minute, seule, à voix haute. Les trois phrases ci-dessous sont ta matière première.</span></span></li>'
    + '</ul>';

  const vocal = (news.length ? news : shuffle(ALL.filter(i => S.srs[i.id])).slice(0,3)).slice(0,3);
  $("#vocal").innerHTML = vocal.map(phraseCard).join("");

  $("#tiles").innerHTML =
      tile(h.r + h.n, "aujourd’hui")
    + tile(S.sessions, "séance" + (S.sessions>1?"s":""))
    + tile(S.best || 0, "record de jours");
}
function paintMot(){
  $("#mot").innerHTML = '<p class="who">Un mot de Zagora</p><p class="txt">' + motDuJour() + '</p>'
    + '<div class="foot"><button data-autre="1">' + ICON.shuffle + ' Un autre</button></div>';
}
const tile = (v,k) => '<div class="tile"><div class="v">' + v + '</div><div class="k">' + k + '</div></div>';

/* -------------------------------------------------------------- thèmes */
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
  if (VIRTUELS[id]){ btab = id; go("blocks"); return; }
  const t = THEMES.find(x => x.id === id); if (!t) return;
  go("themes");
  $("#themesIndex").classList.add("hidden");
  const d = $("#themeDetail");
  d.classList.remove("hidden");
  d.dataset.theme = t.id;
  d.innerHTML = '<button class="btn quiet sm" data-back="1" style="margin-bottom:16px">&larr; Tous les thèmes</button>'
    + '<p class="eyebrow">' + t.items.length + ' phrases</p>'
    + '<h1>' + esc(t.name) + '</h1><p>' + esc(t.desc) + '</p>'
    + '<div style="margin:16px 0 20px"><button class="btn block" data-drill="' + t.id + '">S’entraîner sur ce thème</button></div>'
    + t.items.map(phraseCard).join("");
  window.scrollTo(0,0);
}
function closeTheme(){
  $("#themeDetail").classList.add("hidden");
  $("#themesIndex").classList.remove("hidden");
  paintThemes();
}

/* ------------------------------------------------------------- briques */
let btab = "mots";
function rowLine(i){
  return '<button class="row" data-id="' + i.id + '" data-act="play">'
    + '<span class="rfr">' + esc(i.fr) + '</span>'
    + '<span class="rph">' + esc(line(i)) + '</span>'
    + '<span class="rplay">' + ICON.play + '</span></button>';
}
function paintBlocks(){
  const seg = '<div class="seg" role="tablist">'
    + ["mots","verbes","moules"].map(k =>
        '<button role="tab" aria-selected="' + (btab===k) + '" data-btab="' + k + '">'
        + (k === "mots" ? "Mots" : k === "verbes" ? "Verbes" : "Moules") + '</button>').join("")
    + '</div>';
  let body = "";
  if (btab === "mots"){
    body = '<p class="eyebrow">' + ALL.filter(i=>i.theme==="mots").length + ' mots</p>'
      + '<h1>Les mots</h1><p>Le stock dans lequel tu piocheras pour remplir les moules. Touche une ligne pour l’entendre.</p>'
      + '<button class="btn block" style="margin:14px 0 22px" data-drill="mots">S’entraîner sur les mots</button>'
      + MOTS.map(c => '<h3 class="grp">' + esc(c.cat) + '</h3><div class="rows">'
          + c.items.map(i => rowLine(Object.assign({}, i, {fp:i.fp}))).join("") + '</div>'
          + (c.items.filter(i=>i.note).map(i =>
              '<div class="note"><b>' + esc(line(i)) + '</b> &middot; ' + note(i) + '</div>').join(""))).join("");
  }
  if (btab === "verbes"){
    body = '<p class="eyebrow">' + VERBES.length + ' verbes, ' + ALL.filter(i=>i.theme==="verbes").length + ' formes</p>'
      + '<h1>Les verbes</h1><p>Seulement les formes dont tu te serviras vraiment : je, tu à une femme, le passé, le futur, l’ordre.</p>'
      + '<button class="btn block" style="margin:14px 0 22px" data-drill="verbes">S’entraîner sur les verbes</button>'
      + VERBES.map((v,vi) => '<article class="card" style="margin-bottom:12px"><h3 class="vtitle">' + esc(v.fr) + '</h3>'
          + (v.note ? '<div class="note" style="margin:0 0 10px">' + note(v) + '</div>' : "")
          + '<div class="rows">' + v.forms.map((f,k) =>
              rowLine({ id:v.id+"f"+k, fr:f.l, phon:f.phon, fp:f.fp })).join("") + '</div></article>').join("");
  }
  if (btab === "moules"){
    body = '<p class="eyebrow">' + MOULES.length + ' moules</p>'
      + '<h1>Les moules</h1><p>La seule façon d’arrêter de réciter. Tu gardes la structure, tu changes le mot dedans.</p>'
      + '<button class="btn block" style="margin:14px 0 22px" data-drill="moules">S’entraîner sur les moules</button>'
      + MOULES.map(m => '<article class="moule"><div class="mfr">' + esc(m.fr) + '</div>'
          + '<p class="phon mphon">' + esc(line(m)) + '</p>'
          + (m.note ? '<div class="note">' + note(m) + '</div>' : "")
          + '<div class="rows">' + m.ex.map((e,k) =>
              rowLine({ id:m.id+"e"+k, fr:e.fr, phon:e.phon, fp:e.fp })).join("") + '</div></article>').join("");
  }
  $("#blocksRoot").innerHTML = seg + body;
}

/* -------------------------------------------------------------- drills */
let Q = [], qi = 0, qn = 0, shown = false, gains = { r:0, n:0, ok:0 };
function startDrill(themeId){
  const due = dueItems();
  const plan = weekPlan();
  let list;
  if (themeId){
    list = shuffle(ALL.filter(i => i.theme === themeId)).slice(0, 24);
  } else {
    list = shuffle(due).slice(0, 18).concat(freshFor(plan.themes, due.length < 6 ? 5 : 3));
  }
  Q = list; qi = 0; qn = list.length; shown = false; gains = { r:0, n:0, ok:0 };
  go("drill"); paintDrill();
}
function shuffle(a){ a = a.slice(); for (let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

function paintDrill(){
  const root = $("#drillRoot");
  if (!Q.length){
    const due = dueItems().length;
    root.innerHTML = '<p class="eyebrow">Révision</p><h1>' + (due ? due + " phrase" + (due>1?"s":"") + " t’attend" + (due>1?"ent":"") : "Rien à réviser maintenant") + '</h1>'
      + '<p>' + (due ? "L’app te ressort chaque phrase juste avant le moment où tu l’aurais oubliée." :
         "Reviens plus tard, ou apprends de nouvelles phrases : elles entreront automatiquement dans tes révisions.") + '</p>'
      + '<div class="btn-row" style="margin-top:14px"><button class="btn" data-drill="">Commencer la séance</button>'
      + '<button class="btn ghost" data-go2="themes">Voir les thèmes</button></div>';
    return;
  }
  if (qi >= Q.length){
    markSession();
    const fresh = checkBadges();
    root.innerHTML = '<div class="finish"><div class="badge-big">' + ICON.star8 + '</div>'
      + '<h1>Séance terminée</h1>'
      + '<div class="gains"><span><b>' + gains.r + '</b> revue' + (gains.r>1?"s":"") + '</span><span><b>' + gains.n + '</b> nouvelle' + (gains.n>1?"s":"") + '</span><span><b>' + S.streak + '</b> jour' + (S.streak>1?"s":"") + ' d’affilée</span></div>'
      + (fresh.length ? '<div class="mot" style="margin:0 0 16px;text-align:left"><p class="who">Nouveau badge</p><p class="txt">' + esc(fresh[0].t) + ' — ' + esc(fresh[0].d) + '</p></div>' : "")
      + '<p style="margin:0 auto 18px">Envoie maintenant ton vocal du soir, sinon ça reste de la théorie.</p>'
      + '<div class="btn-row" style="justify-content:center"><button class="btn" data-go2="today">Le vocal du soir</button>'
      + '<button class="btn ghost" data-drill="">Encore une séance</button></div></div>';
    buzz([15, 40, 15]);
    paintToday(); paintChrome(); return;
  }
  const item = Q[qi];
  const st = S.srs[item.id];
  const listen = !st || st.box <= 2;      /* on reconnaît d’abord, on produit ensuite */
  root.innerHTML =
      '<div class="drill-top"><span class="progressline"><i style="width:' + Math.round(100*qi/qn) + '%"></i></span>'
    + '<span class="muted" style="font-variant-numeric:tabular-nums">' + (qi+1) + " / " + qn + '</span></div>'
    + '<div class="drill">'
    + '<span class="mode ' + (listen ? "listen" : "speak") + '">' + (listen ? "Comprendre" : "Parler") + '</span>'
    + '<div class="prompt" data-id="' + item.id + '">'
      + (listen
          ? '<button class="bigplay" data-act="play" aria-label="Écouter la phrase">' + ICON.play + '</button>'
            + '<p class="hint">Écoute, puis devine le sens.</p>'
          : '<p class="ask">' + esc(item.fr) + '</p><p class="hint">Dis-le à voix haute, maintenant.</p>')
      + (shown
          ? '<div class="reveal">'
            + (listen ? '<div class="fr" style="margin-bottom:8px">' + esc(item.fr) + '</div>' : "")
            + '<p class="phon">' + esc(line(item)) + '</p>'
            + '<div class="alt2">' + otherLabel() + ' <span>' + esc(other(item)) + '</span></div>'
            + (item.alt ? '<div class="alt"><b>' + esc(item.alt.l) + '</b> &middot; ' + esc(line(item.alt)) + '</div>' : "")
            + (item.note ? '<div class="note" style="text-align:left">' + note(item) + '</div>' : "")
            + '<div class="controls" style="justify-content:center">'
              + '<button class="chip play" data-act="play">' + ICON.play + ' Écouter</button>'
              + '<button class="chip" data-act="me">' + ICON.mic + ' Moi</button></div>'
            + '</div>'
          : "")
    + '</div>'
    + (shown
        ? '<div class="grade">'
          + '<button class="g1" data-grade="1">À revoir<small>je séchais</small></button>'
          + '<button class="g2" data-grade="2">Presque<small>hésitation</small></button>'
          + '<button class="g3" data-grade="3">Je l’ai<small>sortie sans effort</small></button></div>'
        : '<button class="btn block" data-reveal="1">Voir la réponse</button>')
    + '</div>';
  if (listen && !shown) setTimeout(() => play(item.id), 220);
}
function grade(g){
  const item = Q[qi];
  const isNew = !S.srs[item.id];
  const st = S.srs[item.id] || { box:1, seen:0, first:Date.now() };
  st.seen++;
  if (g === 1) st.box = 1;
  else if (g === 2) st.box = Math.max(1, st.box);
  else st.box = Math.min(5, st.box + 1);
  const days = INTERVALS[g === 1 ? 0 : st.box];
  st.due = Date.now() + (days ? days*DAY : 6e5);
  S.srs[item.id] = st;
  const h = today();
  if (isNew){ h.n++; gains.n++; } else { h.r++; gains.r++; }
  if (g === 3){ h.ok++; gains.ok++; }
  save();
  buzz(g === 3 ? 10 : g === 2 ? 20 : 35);
  if (g === 1 && Q.length - qi > 1) Q.splice(Math.min(qi + 4, Q.length), 0, item);
  qi++; shown = false; paintDrill(); paintChrome();
}

/* ------------------------------------------------------------- progrès */
const BADGES = [
  { id:"salam",  t:"Premier salam",         d:"Ta première séance.",                    ic:"tea",    test:s => s.sessions >= 1 },
  { id:"the",    t:"Le thé est servi",      d:"Trois jours d’affilée.",                 ic:"tea",    test:s => s.best >= 3 },
  { id:"adopt",  t:"Adoptée",               d:"Sept jours d’affilée. Sa mère t’appelle benti.", ic:"heart", test:s => s.best >= 7 },
  { id:"famille",t:"De la famille",         d:"Trente jours d’affilée.",                ic:"crown",  test:s => s.best >= 30 },
  { id:"survie", t:"Prête pour le salon",   d:"Les 12 de survie, toutes vues.",         ic:"home",   test:s => s.seenTheme("urgence") >= 12 },
  { id:"table",  t:"À table !",             d:"Le thème À table entièrement vu.",       ic:"plate",  test:s => s.seenTheme("table") >= s.sizeTheme("table") },
  { id:"oreille",t:"Oreille de Zagora",     d:"Ce qu’ils vont te dire, tout vu.",       ic:"ear",    test:s => s.seenTheme("ecoute") >= s.sizeTheme("ecoute") },
  { id:"cent",   t:"Cent phrases",          d:"Cent fiches vues.",                       ic:"star8",  test:s => s.seen >= 100 },
  { id:"trente", t:"Trente acquises",       d:"Trente fiches en boîte 5.",              ic:"flame",  test:s => s.mastered >= 30 },
  { id:"moules", t:"Fabricante de phrases", d:"Tous les moules vus. Tu ne récites plus.", ic:"bricks", test:s => s.seenTheme("moules") >= s.sizeTheme("moules") },
  { id:"moitie", t:"La moitié du chemin",   d:"La moitié des fiches vues.",             ic:"palm",   test:s => s.seen >= Math.ceil(s.total/2) },
  { id:"cinq",   t:"Cinquante séances",     d:"Cinquante séances. Un vrai rituel.",     ic:"crown",  test:s => s.sessions >= 50 },
  { id:"darija", t:"Darijophone",           d:"Toutes les fiches vues. Zagora t’attend.", ic:"star8", test:s => s.seen >= s.total }
];
function stats(){
  const seen = ALL.filter(i => S.srs[i.id]).length;
  return {
    seen, total: ALL.length, mastered: masteredCount(ALL), sessions:S.sessions, best:S.best || 0,
    seenTheme: id => ALL.filter(i => i.theme === id && S.srs[i.id]).length,
    sizeTheme: id => ALL.filter(i => i.theme === id).length
  };
}
function checkBadges(){
  const s = stats(), fresh = [];
  BADGES.forEach(b => { if (!S.badges.includes(b.id) && b.test(s)){ S.badges.push(b.id); fresh.push(b); } });
  if (fresh.length) save();
  return fresh;
}
function paintProgress(){
  const s = stats();
  const pctSeen = s.seen / s.total, pctGot = s.mastered / s.total;
  const C = 2 * Math.PI * 50;
  const ring = '<div class="ring"><svg viewBox="0 0 118 118">'
    + '<circle class="bg" cx="59" cy="59" r="50"/>'
    + '<circle class="seen" cx="59" cy="59" r="50" stroke-dasharray="' + C + '" stroke-dashoffset="' + (C * (1 - pctSeen)) + '"/>'
    + '<circle class="got" cx="59" cy="59" r="50" stroke-dasharray="' + C + '" stroke-dashoffset="' + (C * (1 - pctGot)) + '"/>'
    + '</svg><div class="c"><b>' + Math.round(100*pctSeen) + '%</b><small>du darija vu</small></div></div>';
  const kv = '<div class="kv">'
    + '<div><i style="background:var(--accent)"></i><b>' + s.mastered + '</b><span>acquises (boîte 5)</span></div>'
    + '<div><i style="background:color-mix(in srgb, var(--accent) 38%, var(--surface-2))"></i><b>' + s.seen + '</b><span>vues sur ' + s.total + '</span></div>'
    + '<div><i style="background:var(--saffron)"></i><b>' + S.streak + '</b><span>jour' + (S.streak>1?"s":"") + ' d’affilée · record ' + s.best + '</span></div>'
    + '</div>';

  /* calendrier : 16 semaines, colonnes = semaines, lignes = lundi → dimanche */
  const now = new Date(); now.setHours(0,0,0,0);
  const dow = (now.getDay() + 6) % 7;                   /* lundi = 0 */
  const start = new Date(now); start.setDate(now.getDate() - dow - 7*15);
  let heat = "", activeDays = 0, totalRev = 0;
  for (let d = new Date(start); d <= now; d.setDate(d.getDate()+1)){
    const k = dayKey(d), h = S.hist[k]; const v = h ? h.r + h.n : 0;
    if (v) activeDays++; totalRev += v;
    const lvl = !v ? "" : v < 6 ? " l1" : v < 14 ? " l2" : v < 25 ? " l3" : " l4";
    heat += '<i class="' + lvl.trim() + (k === dayKey() ? " auj" : "") + '" title="' + k + ' : ' + v + '"></i>';
  }
  /* 14 derniers jours */
  const days = [], labels = []; let max = 1;
  for (let i = 13; i >= 0; i--){
    const d = new Date(now); d.setDate(now.getDate() - i);
    const h = S.hist[dayKey(d)]; const v = h ? h.r + h.n : 0;
    max = Math.max(max, v); days.push(v);
    labels.push(i === 0 ? "auj." : d.toLocaleDateString("fr-FR", { weekday:"narrow" }));
  }
  const bars = days.map((v,i) => '<div><i class="' + (v ? (i === 13 ? "now" : "") : "zero") + '" style="height:' + (v ? Math.max(4, Math.round(100*v/max)) : 3) + '%"></i>'
    + ((v && (v === max || i === 13)) ? '<b>' + v + '</b>' : "") + '</div>').join("");

  /* boîtes Leitner */
  const boxes = [0,0,0,0,0];
  ALL.forEach(i => { const st = S.srs[i.id]; if (st) boxes[Math.min(5, Math.max(1, st.box)) - 1]++; });
  const bmax = Math.max(1, ...boxes);
  const boxNames = ["Fraîche", "Fragile", "Ça vient", "Solide", "Acquise"];
  const boxHtml = boxes.map((v,i) => '<div class="box b' + (i+1) + '"><span class="k">' + boxNames[i] + '</span>'
    + '<span class="b"><i style="width:' + Math.round(100*v/bmax) + '%"></i></span><span class="v">' + v + '</span></div>').join("");

  /* par thème */
  const groups = THEMES.map(t => ({ id:t.id, name:t.name, items:t.items }))
    .concat(Object.keys(VIRTUELS).map(k => ({ id:k, name:VIRTUELS[k], items:ALL.filter(i => i.theme === k) })));
  const tl = groups.map(g => {
    const n = g.items.length, sn = seenCount(g.items), m = masteredCount(g.items);
    return '<button class="trow" data-open="' + g.id + '"><span class="n">' + esc(g.name) + '</span>'
      + '<span class="bar"><i class="s" style="width:' + Math.round(100*sn/n) + '%"></i><i class="m" style="width:' + Math.round(100*m/n) + '%"></i></span>'
      + '<span class="c">' + m + '/' + n + '</span></button>';
  }).join("");

  const w = week();
  const weeks = PROGRAM.map(p =>
    '<div class="week' + (p.n === w ? " now" : p.n < w ? " done" : "") + '"><div class="no">' + (p.n < w ? "&#10003; " : "SEM ") + p.n + '</div>'
    + '<div><div class="t">' + esc(p.title) + (p.n === w ? " &middot; tu es ici" : "") + '</div>'
    + '<div class="d">' + esc(p.desc) + '</div></div></div>').join("");

  checkBadges();
  const badges = BADGES.map(b => {
    const got = S.badges.includes(b.id);
    return '<div class="badge' + (got ? "" : " locked") + '"><span class="ic">' + ICON[b.ic] + '</span>'
      + '<span class="t">' + esc(b.t) + '</span><span class="d">' + esc(b.d) + '</span></div>';
  }).join("");

  $("#progressRoot").innerHTML =
      '<p class="eyebrow">Ton évolution</p><h1>Où tu en es</h1>'
    + '<p>Chaque séance compte. Voici ce que sa famille entendra la prochaine fois.</p>'
    + '<div class="prog-head">' + ring + kv + '</div>'
    + '<div class="section-t"><h2>Tes jours de darija</h2><span>' + activeDays + ' jour' + (activeDays>1?"s":"") + ' actifs sur 16 semaines</span></div>'
    + '<div class="heat">' + heat + '</div>'
    + '<div class="heat-legend">moins <i></i><i class="l1"></i><i class="l2"></i><i class="l3"></i><i class="l4"></i> plus</div>'
    + '<div class="section-t"><h2>Les deux dernières semaines</h2><span>' + days.reduce((a,b)=>a+b,0) + ' fiches</span></div>'
    + '<div class="days">' + bars + '</div><div class="days-x">' + labels.map(l => '<span>' + esc(l) + '</span>').join("") + '</div>'
    + '<div class="section-t"><h2>Où en sont tes phrases</h2><span>' + s.seen + ' en circulation</span></div>'
    + '<div class="boxes">' + boxHtml + '</div>'
    + '<p class="muted" style="margin-top:10px">Une phrase monte d’une boîte à chaque révision réussie, et redescend en boîte 1 si tu sèches. En boîte 5, elle est à toi.</p>'
    + '<div class="section-t"><h2>Par thème</h2><span>acquises / total</span></div>'
    + '<div class="tlist">' + tl + '</div>'
    + '<div class="section-t"><h2>Tes badges</h2><span>' + S.badges.length + ' / ' + BADGES.length + '</span></div>'
    + '<div class="badges">' + badges + '</div>'
    + '<div class="section-t"><h2>Le parcours en huit semaines</h2><span>' + S.sessions + ' séance' + (S.sessions>1?"s":"") + '</span></div>'
    + '<p>Une semaine équivaut à six séances. Tu avances quand tu travailles, pas quand le calendrier avance.</p>'
    + '<div class="weeks">' + weeks + '</div>';
}

/* ------------------------------------------------------------ rappels */
const Notif = {
  timer:null,
  supported: typeof Notification !== "undefined",
  perm(){ return this.supported ? Notification.permission : "unsupported"; },
  async enable(){
    if (!this.supported) return false;
    let p = Notification.permission;
    if (p === "default"){ try { p = await Notification.requestPermission(); } catch(e){} }
    return p === "granted";
  },
  schedule(){
    clearTimeout(this.timer);
    if (!S.notif.on || this.perm() !== "granted") return;
    const [h, m] = S.notif.time.split(":").map(Number);
    const now = new Date(), at = new Date();
    at.setHours(h, m, 0, 0);
    if (at <= now) at.setDate(at.getDate() + 1);
    this.timer = setTimeout(() => {
      if (!doneToday()) this.fire();
      this.schedule();
    }, Math.min(at - now, 2147483000));
  },
  fire(){
    const body = plain(MOTS_ZAGORA[Math.floor(Math.random()*MOTS_ZAGORA.length)]);
    if (this.perm() === "granted"){
      try {
        const n = new Notification("Dar Darija — un mot de Zagora", { body, tag:"dardarija", lang:"fr" });
        n.onclick = () => { try { window.focus(); } catch(e){} n.close(); };
        return true;
      } catch(e){}
    }
    toast("Un mot de Zagora", body);
    return false;
  },
  info(){
    const el = $("#notifInfo"); if (!el) return;
    const p = this.perm();
    if (!this.supported) el.textContent = "Ce navigateur n’affiche pas de notifications. Sur iPhone, ajoute d’abord l’app à l’écran d’accueil, ou utilise le rappel calendrier ci-dessous.";
    else if (p === "denied") el.textContent = "Les notifications sont bloquées pour cette app dans les réglages du téléphone. Le rappel calendrier marche quand même.";
    else if (S.notif.on && p === "granted") el.textContent = "Rappel prévu chaque jour à " + S.notif.time + ", tant que l’app reste ouverte (même en arrière-plan). Si tu as déjà fait ta séance, il se tait.";
    else el.textContent = "Active le rappel : le téléphone te demandera l’autorisation une seule fois.";
  }
};
function toast(title, text){
  const t = $("#toast");
  t.innerHTML = "<b>" + esc(title) + "</b>" + esc(text);
  t.classList.remove("hidden");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.add("hidden"), 7000);
}
/* fichier calendrier : un événement par jour de la semaine, chacun avec son message */
function icsFile(){
  const [h, m] = S.notif.time.split(":").map(Number);
  const pad = n => String(n).padStart(2, "0");
  const fmt = d => d.getFullYear() + pad(d.getMonth()+1) + pad(d.getDate()) + "T" + pad(d.getHours()) + pad(d.getMinutes()) + "00";
  const escI = s => s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
  const days = ["MO","TU","WE","TH","FR","SA","SU"];
  const stamp = new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
  const msgs = shuffle(MOTS_ZAGORA).slice(0, 7).map(plain);
  let out = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Dar Darija//FR", "CALSCALE:GREGORIAN"];
  days.forEach((dw, i) => {
    const d = new Date(); d.setHours(h, m, 0, 0);
    const dow = (d.getDay() + 6) % 7;
    d.setDate(d.getDate() + ((i - dow + 7) % 7));
    if (i === dow && d <= new Date()) d.setDate(d.getDate() + 7);
    out.push("BEGIN:VEVENT",
      "UID:dardarija-" + dw + "@dardarija",
      "DTSTAMP:" + stamp,
      "DTSTART:" + fmt(d),
      "DURATION:PT12M",
      "RRULE:FREQ=WEEKLY;BYDAY=" + dw,
      "SUMMARY:" + escI("Dar Darija · 12 minutes"),
      "DESCRIPTION:" + escI(msgs[i]),
      "BEGIN:VALARM", "TRIGGER:PT0M", "ACTION:DISPLAY", "DESCRIPTION:" + escI(msgs[i]), "END:VALARM",
      "END:VEVENT");
  });
  out.push("END:VCALENDAR");
  return out.join("\r\n");
}
function downloadIcs(){
  try {
    const blob = new Blob([icsFile()], { type:"text/calendar;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "dar-darija-rappel.ics";
    document.body.appendChild(a); a.click(); a.remove();
    toast("Calendrier", "Ouvre le fichier téléchargé : sept rappels hebdomadaires, un message différent chaque jour.");
  } catch(e){ toast("Calendrier", "Le téléchargement n’a pas marché ici. Ouvre l’app depuis un fichier ou un site pour l’utiliser."); }
}
function paintNotif(){
  $("#notifOn").checked = !!S.notif.on;
  $("#notifTime").value = S.notif.time;
  Notif.info();
}

/* --------------------------------------------------------------- guide */
function paintGuide(){
  $("#rules").innerHTML = GUIDE.rules.map(r =>
    '<li><span><b>' + esc(r.t) + '</b><span>' + esc(r.d) + '</span></span></li>').join("");
  $("#sounds").innerHTML = GUIDE.sounds.map(s =>
    '<div class="sound"><div class="sym">' + esc(s.sym) + '</div><div><h3>' + esc(s.name) + '</h3>'
    + '<div class="how">' + esc(s.how) + '</div><div class="ex">' + esc(s.ex) + '</div></div></div>').join("");
  $("#ecoute").innerHTML = GUIDE.ecoute.map(r =>
    '<li><span><b>' + esc(r.t) + '</b><span>' + esc(r.d) + '</span></span></li>').join("");
  document.querySelectorAll("[data-script]").forEach(b =>
    b.setAttribute("aria-selected", String(b.dataset.script === S.script)));
  $("#rate").value = S.rate;
  paintNotif();
}

/* ------------------------------------------------------------ chrome */
function paintChrome(){
  const d = dueItems().length;
  $("#streakN").textContent = S.streak;
  $("#streak").classList.toggle("zero", S.streak === 0);
  $("#dueDot").classList.toggle("hidden", d === 0);
}
function go(view){
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("on", v.id === "v-" + view));
  document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", String(t.dataset.go === view)));
  if (view === "today") paintToday();
  if (view === "themes"){ if ($("#themeDetail").classList.contains("hidden")) paintThemes(); }
  if (view === "blocks") paintBlocks();
  if (view === "drill" && !Q.length) paintDrill();
  if (view === "progress") paintProgress();
  if (view === "guide") paintGuide();
  window.scrollTo(0,0);
}
function applyTheme(){
  if (S.theme === "auto") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", S.theme);
}

/* ------------------------------------------------------------- events */
document.addEventListener("click", e => {
  const t = e.target.closest("[data-go],[data-go2],[data-open],[data-back],[data-drill],[data-reveal],[data-grade],[data-btab],[data-autre]");
  if (!t) return;
  if (t.dataset.btab){ btab = t.dataset.btab; paintBlocks(); window.scrollTo(0,0); }
  else if (t.dataset.autre) autreMot();
  else if (t.dataset.go) go(t.dataset.go);
  else if (t.dataset.go2) go(t.dataset.go2);
  else if (t.hasAttribute("data-open")) openTheme(t.dataset.open);
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
document.addEventListener("click", e => {
  const b = e.target.closest("[data-script]"); if (!b) return;
  S.script = b.dataset.script; save(); paintGuide(); paintToday();
  if ($("#v-blocks").classList.contains("on")) paintBlocks();
  if (!$("#themeDetail").classList.contains("hidden")) openTheme($("#themeDetail").dataset.theme);
});
$("#notifOn").addEventListener("change", async e => {
  if (e.target.checked){
    const ok = await Notif.enable();
    S.notif.on = ok;
    if (!ok) e.target.checked = false;
  } else S.notif.on = false;
  save(); Notif.schedule(); Notif.info();
});
$("#notifTime").addEventListener("change", e => { S.notif.time = e.target.value || "19:00"; save(); Notif.schedule(); Notif.info(); });
$("#notifTest").addEventListener("click", async () => { await Notif.enable(); Notif.info(); Notif.fire(); });
$("#icsBtn").addEventListener("click", downloadIcs);
$("#resetBtn").addEventListener("click", () => {
  if (!confirm("Effacer ta progression et les voix enregistrées ? C’est définitif.")) return;
  Object.keys(S.srs).forEach(k => delete S.srs[k]);
  S.streak = 0; S.best = 0; S.sessions = 0; S.lastDay = null; S.hist = {}; S.badges = []; save();
  Rec.have.forEach(id => Rec.del(id));
  location.reload();
});
document.addEventListener("visibilitychange", () => { if (!document.hidden) Notif.schedule(); });

/* --------------------------------------------------------------- boot */
applyTheme();
try { speechSynthesis.onvoiceschanged = refreshVoices; } catch(e){}
refreshVoices(); setTimeout(refreshVoices, 400);
Rec.init().then(() => { paintToday(); paintThemes(); paintChrome(); });
paintToday(); paintThemes(); paintGuide(); paintChrome();
Notif.schedule();
/* si le rappel est passé pendant que l’app était fermée, on le montre à l’ouverture */
if (S.notif.on && !doneToday()){
  const [h, m] = S.notif.time.split(":").map(Number);
  const at = new Date(); at.setHours(h, m, 0, 0);
  if (new Date() > at) setTimeout(() => toast("Un mot de Zagora", plain(motDuJour())), 900);
}
})();
