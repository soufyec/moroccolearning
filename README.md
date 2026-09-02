# Dar Darija

Une méthode et une app pour apprendre à **parler** le darija marocain avec la famille de ton copain.
Pas de lecture, pas d'écriture, pas de grammaire : uniquement l'oreille et la bouche.

**L'app :** ouvre `dist/dar-darija.html` dans un navigateur. Un seul fichier, il marche hors ligne,
tout est stocké dans ton téléphone (rien n'est envoyé nulle part, personne ne voit où tu en es).

Sur iPhone : ouvre le fichier dans Safari, puis *Partager → Sur l'écran d'accueil*.

---

## La prononciation est écrite pour une bouche française

La ligne principale de chaque fiche se lit **comme du français**. Trois conventions seulement :

| On écrit | Ça se prononce |
|---|---|
| `h` | h soufflé du fond de la gorge, jamais muet — `l-hammdou-llah` |
| `kh` | la jota, comme dans « khôl » — `khouya` (mon frère) |
| `gh` | le r grasseyé de Paris, tu l'as déjà — `l-maghrib` |
| `r` | roulé, à l'espagnole — `merhba` |
| `â` | le son du fond de gorge ; si tu le rates, dis un a bien ouvert — `âafak` |
| `q` | k prononcé tout au fond — `l-qahoua` |
| `-` | ne se prononce pas : découpe le mot et t'empêche de nasaliser — `kann-bghi` |

On écrit **ine, ane, one** et jamais in, an, on : le darija n'a aucune nasale française.
`bnine`, `mezyane`, `fine`.

Un réglage permet de basculer sur l'**arabizi** (`bnin bezzaf`, avec les chiffres 3 et 7) : c'est ce
que les Marocains écrivent vraiment en SMS, tu finiras par le croiser. Les deux graphies sont
toujours affichées, l'une en grand, l'autre en petit.

## Ce qu'il y a dedans — 519 fiches

**242 phrases, 15 thèmes** — pour tenir une soirée chez sa famille.

| Thème | À quoi ça sert |
|---|---|
| Les 12 de survie | Si tu n'apprends que ça, tu tiens déjà un repas entier |
| Ce qu'ILS vont te dire | Le plus rentable : comprendre avant de savoir parler |
| À table | Complimenter la cuisine, refuser un quatrième service sans vexer |
| Saluer, se présenter, politesse | Les rituels qui ouvrent et ferment chaque visite |
| Papoter, la famille, chez eux | Ne pas rester muette dans le salon |
| Dehors, téléphone, fêtes | Taxi, souk, appels, Aïd, mariage, condoléances |
| Avec lui | Les phrases du quotidien à deux |

**Les briques**, pour fabriquer tes propres phrases au lieu d'en réciter :

- **134 mots** classés par famille (les gens, à table, la maison, le temps, dehors, les adjectifs,
  le corps, les petits mots qui relient).
- **24 verbes, 83 formes** — seulement celles qui servent : *je*, *tu* à une femme, le passé, le
  futur, l'ordre. `kann-akoul` (je mange), `klite` (j'ai mangé), `ghadi nakoul` (je vais manger).
- **20 moules à trous** avec leurs exemples : `bghite ___` (je veux ___), `ma ___ ch` (la négation),
  `fine kayne ___ ?` (où est ___ ?), `khessni ___` (il me faut ___). Une phrase apprise sert une
  fois ; un moule sert cinquante fois.

Chaque fiche donne le sens, la prononciation, la variante quand tu parles à une femme plutôt qu'à un
homme, et une note culturelle quand se tromper coûte cher : le `tbaraka-llah` contre le mauvais œil,
les prix annoncés en riyals au souk, la *hchouma*.

## La méthode

Neuf règles, dans l'app. Les trois qui comptent le plus :

1. **Ne récite pas, fabrique.** Dès que tu tiens un moule, change le mot dedans.
2. **Comprendre avant de parler.** En famille, tu écouteras 80 % du temps.
3. **Le monologue du soir.** Une minute, seule, à voix haute, sur ta journée, avec le peu que tu
   sais. Le bouton *M'écouter* enregistre ta voix et te la rejoue : c'est en t'entendant que tu
   corriges ton accent.

**Rien ne passe par lui.** Aucune étape ne demande son aide, sa voix, ni un message : tu peux
travailler huit semaines sans qu'il en sache rien. Pour l'oreille, l'app te dit où trouver du darija
réel toute seule — séries marocaines, radio, vlogs, une chanson en boucle.

L'app te fait réviser en **répétitions espacées** (5 boîtes) et alterne deux modes : *Comprendre*
(tu entends, tu devines) tant que la phrase est fraîche, puis *Parler* (tu vois le français, tu dois
la sortir de ta bouche). Parcours en 8 semaines, six séances par semaine, 12 minutes par séance.

⚠️ La voix du téléphone lit de l'**arabe classique** : elle donne le squelette du mot, pas l'accent
marocain. Et si aucune voix arabe n'est installée sur l'appareil, le bouton *Écouter* reste muet —
l'app te le dit et t'indique où l'installer (iPhone : Réglages → Accessibilité → Contenu énoncé →
Voix → Arabe).

---

## Le code

```
src/index.html   coquille
src/styles.css   styles
src/data.js      les 242 phrases, le guide, le parcours
src/blocks.js    les mots, les verbes, les moules
src/translit.js  le lexique de prononciation : 550 mots darija → lecture française
build.js         assemble tout dans dist/dar-darija.html
```

Ajouter une phrase : copie une fiche existante dans le bon thème de `src/data.js`, donne-lui un `id`
unique, puis `node build.js`. Si un mot n'est pas encore dans le lexique de prononciation, le build
s'arrête et te dit lequel ajouter à `src/translit.js` — la ligne française ne peut donc jamais être
oubliée.
