# Génération des MP3

Ce projet utilise exclusivement des MP3 pré-générés. Le lecteur vérifie le
manifeste et tous les fichiers nécessaires avant de démarrer une leçon. Si un
MP3 manque ou ne peut pas être lu, la lecture s'arrête et affiche une erreur :
aucune voix du navigateur n'est utilisée en secours.

## Voix retenues

- Narrateur français : `fr-CH-ArianeNeural` (Microsoft Edge, français suisse)
- Phrases chinoises : `zh-CN-XiaoxiaoNeural` (Microsoft Edge, mandarin)

Le chinois est généré à `-25 %` afin de rester suffisamment lent pour
l'apprentissage. Le bouton « + lent » du lecteur ralentit uniquement les MP3
chinois de 20 % supplémentaires ; le français reste à vitesse normale.

## Préparation

Le générateur est [tools/generate_edge_audio.py](tools/generate_edge_audio.py).
Il utilise le paquet Python `edge-tts` dans l'environnement local `.venv-tts`.

```zsh
python3 -m venv .venv-tts
.venv-tts/bin/pip install edge-tts
```

La génération contacte le service vocal Microsoft Edge : une connexion
Internet est donc nécessaire. Aucune clé API ni abonnement Azure n'est requis.

## Générer une partie

Depuis la racine du projet :

```zsh
.venv-tts/bin/python tools/generate_edge_audio.py \
  chapters/hsk1/01-bonjour.js \
  1 \
  audio/hsk1-01-1
```

Les trois arguments sont, dans l'ordre :

1. le fichier du chapitre ;
2. le numéro de la partie (`1`, `2`, `3`...) ;
3. le dossier de sortie, nommé `audio/<id-du-chapitre>-<numéro-de-partie>` pour
   les chapitres HSK.

Pour un chapitre bonus, les MP3 sont rangés par catégorie puis par numéro de
bonus : `audio/bonus/<numéro-du-bonus>/<numéro-de-partie>`. Par exemple, la
partie 1 du bonus 3 utilise `audio/bonus/03/1`.

Par exemple, le chapitre dont l'identifiant est `hsk1-01`, partie 2, doit être
généré dans `audio/hsk1-01-2`.

## Fichiers produits

Le script lit les appels `N(...)`, `C(...)` et `teach2(...)` de la partie :

- `N(...)` est découpé entre français et chinois, y compris les balises
  `[[汉字|pinyin]]` ;
- `C(...)` et `teach2(...)` produisent des segments chinois ;
- les pauses et les attentes de répétition ne produisent aucun fichier.

Chaque texte unique produit un MP3. Le script crée aussi un `manifest.json`
qui associe exactement le texte de la leçon au nom du MP3. Le moteur
[engine/player.js](engine/player.js) charge ce manifeste automatiquement.

Le fichier `audio/catalog.js` regroupe aussi les manifestes afin que le lecteur
fonctionne lorsque `index.html` est ouvert directement en `file://`, sans
serveur web. Après avoir généré ou modifié des MP3, reconstruire ce catalogue :

```zsh
python3 tools/build_audio_catalog.py
```

Les noms incluent la voix utilisée : changer de voix crée de nouveaux noms de
fichiers, ce qui évite que le navigateur relise un ancien MP3 depuis son cache.

## Vérification

Après génération, ouvrez le lecteur sur la partie concernée puis rechargez la
page. Le lecteur charge le manifeste correspondant (`audio/.../manifest.json`,
ou `audio/bonus/.../manifest.json` pour un bonus) avant de commencer la leçon.
Tous les MP3 doivent être accessibles ; sinon le lecteur indique précisément
le fichier ou l'entrée de manifeste en erreur.

## Changer une voix

Modifier les constantes `FR_VOICE` ou `ZH_VOICE` en haut du générateur, puis
relancer la commande pour la partie. Ne pas modifier le manifeste à la main.

Pour afficher les voix Edge actuellement proposées :

```zsh
.venv-tts/bin/edge-tts --list-voices
```
