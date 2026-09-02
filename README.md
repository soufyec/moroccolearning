# Dar Darija

Une méthode et une app pour apprendre à **parler** le darija marocain avec la famille de ton copain.
Pas de lecture, pas d'écriture, pas de grammaire : uniquement l'oreille et la bouche.

**L'app :** ouvre `dist/dar-darija.html` dans un navigateur. Un seul fichier, il marche hors ligne,
tout est stocké dans ton téléphone (rien n'est envoyé nulle part).

Sur iPhone : ouvre le fichier dans Safari, puis *Partager → Sur l'écran d'accueil*. Tu auras une
icône comme une vraie app.

---

## Ce qu'il y a dedans

**242 phrases, 15 thèmes**, choisies pour un seul usage : tenir une soirée chez sa famille.

| Thème | À quoi ça sert |
|---|---|
| Les 12 de survie | Si tu n'apprends que ça, tu tiens déjà un repas entier |
| Ce qu'ILS vont te dire | Le plus rentable : comprendre avant de savoir parler |
| À table | Complimenter la cuisine, refuser un quatrième service sans vexer |
| Saluer, se présenter, politesse | Les rituels qui ouvrent et ferment chaque visite |
| Papoter, la famille, chez eux | Ne pas rester muette dans le salon |
| Dehors, téléphone, fêtes | Taxi, souk, appels avec sa mère, Aïd, mariage, condoléances |
| Avec lui | De quoi transformer ton copain en prof quotidien |

Chaque fiche donne : le sens en français, **la phonétique en gros** (lecture à la française), la
variante quand tu parles à une femme plutôt qu'à un homme, et une note culturelle quand se tromper
coûte cher (le `tbarkallah` contre le mauvais œil, les prix en riyals, la 7chouma…).

## Comment l'app te fait travailler

- **Écouter → répéter à voix haute → s'enregistrer → comparer.** Le bouton *Moi* enregistre ta voix
  et te la rejoue juste après la référence.
- **Fais enregistrer ton copain.** Sur chaque fiche, *Enregistrer sa voix* garde sa prononciation
  dans le téléphone : c'est ta vraie référence. La voix de synthèse lit de l'arabe classique, elle
  donne le squelette du mot, pas l'accent marocain. Un thème enregistré par semaine suffit.
- **Révisions espacées** (5 boîtes) : l'app ressort chaque phrase juste avant le moment où tu
  l'aurais oubliée. Deux modes selon ta maîtrise — *Comprendre* (tu entends, tu devines) puis
  *Parler* (tu vois le français, tu dois le sortir de ta bouche).
- **Parcours en 8 semaines**, six séances par semaine, 12 minutes par séance. Tu avances en
  travaillant, pas quand le calendrier avance.

## La méthode, en huit règles

1. **Zéro écriture, zéro grammaire.** Tu apprends des blocs entiers, pas un système.
2. **Toujours à voix haute.** Une phrase lue des yeux ne sort pas de ta bouche le jour J.
3. **La voix de ton copain est la référence**, pas celle du téléphone.
4. **Comprendre avant de parler.** En famille, tu écoutes 80 % du temps.
5. **12 minutes par jour battent 2 heures le dimanche.**
6. **Le vocal du soir** : chaque soir, 20 secondes de vocal à ton copain avec les phrases du jour.
   C'est le seul exercice qui fait passer de « je sais la dire » à « je l'ai dite ».
7. **Cinq mots te sauvent partout** : `bezzaf` (beaucoup), `chwiya` (un peu), `safi` (c'est bon),
   `wakha` (d'accord), `nchallah` (si Dieu veut).
8. **Vise 30 phrases, pas la perfection.** Sa famille ne te note pas.

## Les sons à connaître

| Symbole | Son |
|---|---|
| `7` | h soufflé du fond de la gorge (`l7amdoullah`) |
| `kh` | la jota espagnole (`khoya`, mon frère) |
| `gh` | le r français grasseyé — tu l'as déjà (`lmaghrib`) |
| `r` | roulé, à l'espagnole (`mer7ba`) |
| `3` | gorge serrée, un a très ouvert (`3afak`) |
| `q` | k prononcé tout au fond (`qhwa`, café) |
| `ou` | toujours le ou français, jamais le u de « tu » |

---

## Le fichier

```
src/index.html   coquille
src/styles.css   styles
src/data.js      tout le contenu — c'est là qu'on ajoute des phrases
src/app.js       révisions, audio, enregistrement
build.js         assemble le tout dans dist/dar-darija.html
```

Ajouter une phrase : ouvre `src/data.js`, copie une fiche existante dans le bon thème, donne-lui un
`id` unique, puis `node build.js`.
