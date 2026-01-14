# Fractal

Projet de subdivision récursive inspiré de :  [https://www.instructables.com/W1-Recursive-Surface-Division/](https://www.instructables.com/W1-Recursive-Surface-Division/)

## À propos

J’ai essayé d’exporter le rendu en **SVG**, mais malheureusement il semble y avoir un problème de version de **p5.js**.  
Pour que l’export SVG fonctionne, il faut passer par la version **0.7.1**, qui est une version très ancienne, comparée aux versions récentes (2.x).

La forme est volontairement **très simple**, afin de faire un test avec le **traceur**.Il ne manque plus que les dimensions du traceur pour pouvoir générer le bon G-code et réaliser le visuel.

De plus, comme la version O.7.1 est ancienne, la fonction `square` n'existe pas ! J’ai donc modifié pour mettre des `rect` à la place.

## Exemple de code SVG

Code d’exemple pour l’export SVG :  
https://editor.p5js.org/dannyrozin/sketches/r1djoVow7

## Résultat

![Résultat](fractal.svg "Résultat") 

> IA utilisée pour la refactorisation du README.

## Démarrage rapide

Ouvrez le fichier `index.html` dans votre navigateur web, puis modifiez `sketch.js`.

## Lancer le projet en local

Pour les projets utilisant des fichiers médias ou une API, utilisez un serveur local :

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx http-server

# Avec l’extension VS Code Live Server
# Clic droit sur index.html -> "Open with Live Server"
```
