/* Assemble src/ en un fichier unique, ouvrable hors ligne et publiable tel quel. */
const fs = require("fs");
const read = p => fs.readFileSync(p, "utf8");

const html = read("src/index.html")
  .replace("<!--STYLES-->", "<style>\n" + read("src/styles.css") + "\n</style>")
  .replace("<!--DATA-->", "<script>\n" + read("src/data.js") + "\n</script>")
  .replace("<!--APP-->", "<script>\n" + read("src/app.js") + "\n</script>");

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/dar-darija.html", html);
console.log("dist/dar-darija.html ecrit —", (html.length/1024).toFixed(0), "Ko");
