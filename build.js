/* Assemble src/ en un fichier unique, ouvrable hors ligne et publiable tel quel.
   Au passage, fabrique pour chaque phrase sa ligne de prononciation francaise
   a partir du lexique de src/translit.js. */
const fs = require("fs");
const { toFR, MISSING, FR_LEX } = require("./src/translit.js");

/* Dans les notes, les mots darija sont en gras : on les transcrit aussi,
   mais seulement quand chaque mot du gras est connu du lexique — sinon
   c est du francais mis en valeur, et on n y touche pas. */
function noteFR(html){
  if (!html) return html;
  return html.replace(/<b>([^<]+)<\/b>/g, (m, inner) => {
    const toks = inner.match(/[A-Za-z0-9]+/g) || [];
    if (!toks.length || !toks.every(t => FR_LEX[t] !== undefined)) return m;
    return "<b>" + toFR(inner) + "</b>";
  });
}
const read = p => fs.readFileSync(p, "utf8");

const data = read("src/data.js"), blocks = read("src/blocks.js");
const C = new Function(data + blocks + ";return {GUIDE,PROGRAM,THEMES,MOTS,VERBES,MOULES}")();

C.THEMES.forEach(t => t.items.forEach(i => {
  i.fp = toFR(i.phon);
  i.noteFp = noteFR(i.note);
  if (i.alt) i.alt.fp = toFR(i.alt.phon);
}));
C.MOTS.forEach(c => c.items.forEach(i => { i.fp = toFR(i.phon); i.noteFp = noteFR(i.note); }));
C.VERBES.forEach(v => { v.noteFp = noteFR(v.note); v.forms.forEach(f => { f.fp = toFR(f.phon); }); });
C.MOULES.forEach(m => {
  m.fp = toFR(m.phon); m.noteFp = noteFR(m.note);
  m.ex.forEach(e => { e.fp = toFR(e.phon); });
});
C.GUIDE.rules.forEach(r => { r.d = r.d; });

if (MISSING.size){
  console.error("Mots absents du lexique de prononciation (src/translit.js) :");
  console.error([...MISSING].sort().join(" "));
  process.exit(1);
}

const js = Object.entries(C).map(([k,v]) => "const " + k + " = " + JSON.stringify(v) + ";").join("\n");
const html = read("src/index.html")
  .replace("<!--STYLES-->", "<style>\n" + read("src/styles.css") + "\n</style>")
  .replace("<!--DATA-->", "<script>\n" + js + "\n</script>")
  .replace("<!--APP-->", "<script>\n" + read("src/app.js") + "\n</script>");

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/dar-darija.html", html);

const n = C.THEMES.reduce((a,t)=>a+t.items.length,0)
  + C.MOTS.reduce((a,c)=>a+c.items.length,0)
  + C.VERBES.reduce((a,v)=>a+v.forms.length,0)
  + C.MOULES.reduce((a,m)=>a+m.ex.length,0);
console.log("dist/dar-darija.html —", (html.length/1024).toFixed(0), "Ko,", n, "fiches");
