# Cours audio de chinois — Spécification du projet

Ce document permet à Claude (dans un nouveau chat ou dans Claude Code) de
reprendre le projet et de créer de nouveaux chapitres/leçons au même format.

## 1. Vue d'ensemble

Application d'apprentissage audio du chinois mandarin dans l'esprit **Pimsleur** :
narrateur français + phrases chinoises lues depuis des MP3 pré-générés,
pauses pour répéter, questions avec pause automatique, rappels espacés.

Un cours = **un fichier HTML autonome** (moteur + données), utilisable sur
iPhone (Safari, app Documents), Android et PC (Edge recommandé pour les voix
neuronales gratuites).

Fichier de référence existant : `Cours_Chinois_Le_Temps.html`
(chapitre « 谈时间 · Le temps », 7 leçons).

## 2. Architecture du fichier

- **CSS** : thème sombre (encre `#14213d`, cinabre `#c73e2e`, or `#e8b84b`,
  papier `#f7f3ea`), mobile-first, max-width 520 px.
- **HTML** : écran menu (overlay listant les leçons) + écran lecteur
  (anneau de progression, sous-titres, contrôles).
- **JS — moteur** (ne pas modifier pour ajouter du contenu) :
  lecture MP3 obligatoire, timeline fondée sur les durées réelles,
  pause/reprise exacte au milieu d'un fichier, navigation −/+ par séquence,
  Media Session pour les AirPods et casques Bluetooth, et bouton « + lent »
  pour ralentir la voix chinoise de 20 %.
- **JS — données** : tableau `const LESSONS = [...]` (voir §3).

Contrainte : PAS de `localStorage` (le fichier doit fonctionner dans
l'aperçu de l'app Claude). État en mémoire uniquement.

## 3. Format d'une leçon

```js
{ num: 1, hanzi: "谈时间", title: "Parler de l'heure",
  desc: "几点 · 点 · 半 · 一刻 · 差",
  build(){ return [ /* étapes */ ]; } }
```

### Types d'étapes

| Helper | Rôle |
|---|---|
| `N("texte")` | Narrateur français. Les mots chinois s'écrivent `[[汉字\|pinyin]]` : prononcés par la voix chinoise (à partir des caractères), affichés en pinyin doré. |
| `C(zh, pinyin, traductionFr, rate)` | Phrase chinoise. `rate` : voir vitesses §4. |
| `P(sec, "…")` | Pause chronométrée courte ; le texte précédent reste affiché. |
| `HOLD()` ou `HOLD("libellé")` | **Pause automatique** : la leçon s'arrête, l'élève appuie ▶. (Le « Mode continu » la transforme en pause de 5 s.) |
| `TH()` | HOLD avec libellé « À toi de répondre… » — après une question. |
| `teach(zh, py, fr)` | Présentation d'un mot : 2× lent (0.5) + 1× normal (0.7) + HOLD. |
| `drill(promptFr, zh, py, fr)` | Question du narrateur → TH() → réponse 2× (0.65) → HOLD. |

### Vitesses (rate) — le chinois doit être LENT
- Dialogue d'introduction d'une leçon : **0.4** avec `P(2,"…")` entre les répliques
- Présentation lente d'un mot : 0.5 · vitesse « normale » : 0.65–0.7
- Phrases longues : 0.5–0.6
- Un facteur global `ZH_SLOW = 0.75` s'applique en plus dans le moteur.

## 4. Structure pédagogique d'une leçon (~15 min)

1. **Révision espacée** : 2-3 questions des leçons précédentes (N + TH + C)
2. **Dialogue cible** : écoute complète à 0.4, avec pauses de 2 s
3. **Enseignement** : mots nouveaux avec `teach`, construction à rebours
   pour les mots longs (fin du mot d'abord : diǎn → jǐ diǎn → xiànzài jǐ diǎn)
4. **Drills** : `drill` + rappels espacés des items vus plus tôt dans la leçon
5. **Mini-conversation** : l'élève joue un rôle du dialogue cible
6. **Révision finale** : série rapide N + TH + C + P(1.5)
7. Clôture : encouragement + consigne de réécoute demain + 再见！

Règles : max ~8 mots nouveaux par leçon ; toujours donner la traduction
française ; ordre des mots chinois expliqué quand il diffère du français ;
jamais de pinyin seul dans le texte parlé du narrateur (toujours `[[汉字|pinyin]]`).

## 5. Chapitres existants et à venir

- ✅ Chapitre 1 · 谈时间 Le temps (7 leçons, dont révision totale)
- Idées suivantes : les nombres et l'argent (多少钱), se présenter (自我介绍),
  la nourriture (点菜), les directions (问路), la famille (家人).

Chaque chapitre se termine par une leçon « ★ Révision totale » :
uniquement des questions (N + TH + C + P(1.5)) couvrant tout le chapitre.

## 6. Pour créer un nouveau chapitre dans un NOUVEAU CHAT

Uploader 2 fichiers : ce README + `Cours_Chinois_Le_Temps.html`
(ou le template), puis demander par exemple :

> « En suivant le README et le format du fichier joint, crée le chapitre 2 :
> les nombres et l'argent, 5 leçons + révision totale, même moteur. »

Claude a alors tout ce qu'il faut : le moteur est dans le fichier HTML,
les conventions dans ce README.

## 7. Migration vers Claude Code

Structure de projet suggérée :

```
cours-chinois/
├── index.html          (menu des chapitres)
├── engine/
│   ├── player.js       (moteur extrait du HTML)
│   └── style.css
├── chapters/
│   ├── 01-le-temps.js  (export const LESSONS = [...])
│   └── 02-nombres.js
└── README.md           (ce fichier)
```

Premières demandes utiles dans Claude Code :
1. « Voici Cours_Chinois_Le_Temps.html et le README. Sépare le moteur
   (engine/player.js, style.css) du contenu (chapters/01-le-temps.js)
   et crée un index.html qui liste les chapitres. »
2. « Ajoute la persistance de la progression (localStorage — OK ici car
   ce sera un vrai site web, plus un fichier dans l'app Claude). »
3. « Déploie sur Netlify. » (connecteur/CLI Netlify)

Une fois en ligne sur Netlify, le cours devient une URL utilisable sur
tous les appareils, et chaque nouveau chapitre = un fichier ajouté +
un redéploiement.
