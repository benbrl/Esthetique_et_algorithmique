# cellular automata

L’idée du projet est de créer une **simulation de vagues** à l’aide d’un **automate cellulaire**.

## Inspiration

Inspiration originale :
[https://fr.pinterest.com/pin/579205202122229369/](https://fr.pinterest.com/pin/579205202122229369/)

Le concept est adapté pour produire des **vagues** (si j’y arrive).

## Règles de l’automate

Les règles du “jeu” sont les suivantes :

* Pour chaque cellule, on vérifie les cellules voisines :
  * `x - 1`, `x + 1`
  * `y - 1`, `y + 1`
* Si une ou plusieurs de ces cellules ont la valeur `1`, alors **à la frame suivante**, la cellule courante devient elle aussi `1`.
* Les autres valeurs sont amenées à évoluer selon des règles qui peuvent changer par la suite (en cours d’expérimentation).

## Journal de développement

**13h17** Après une discussion approfondie, intéressante et constructive avec @corentinAT (allez le follow, il est super sympa),
je décide de **recommencer le projet depuis zéro**...

Je refais l’implémentation avec un **tableau à deux dimensions**, ce qui est plus logique.

Je commit donc l’état actuel du projet, mais **de gros changements sont à prévoir**.
Avant, j’utilisais deux tableaux, ce qui n’était **pas du tout optimisé** au final.


Chaque case de la grille possède une valeur comprise entre 0 et 3. À chaque itération, la valeur d’une case peut changer en fonction de ses voisines :

* Pour chaque case, le programme regarde ses 8 cases adjacentes.
* Si au moins 3 de ces cases ont la valeur « suivante » par rapport à la case actuelle, alors la case adopte cette nouvelle valeur et change de couleur.
* La valeur pivot utilisée pour déterminer la prochaine couleur est 3, comme indiqué dans la descritpinon de l'oeuvre originale.


On peut donc s’apercevoir que si on change la valeur du seuil pour **4**, l’œuvre (ou la grille) va vite se figer, car il n’y a pas assez de voisines parallèles (c’est-à-dire de cellules voisines avec la valeur cible). À l’inverse, si on baisse ce seuil, la grille sera en mouvement constant (et creation de motifs differents). On peut donc trouver un bon compromis avec un seuil de **3**, qui permet un équilibre entre stabilité et dynamique.



J’ai utilisé l’IA pour la rédaction du README (car très pratique pour le markdown et relecture) ainsi que pour m’aider à vérifier les valeurs des 8 cases adjacentes.


## Résultat

 ![Résultat](image.gif "Résultat") 


## Lancement du projet

Pour lancer le projet, l’utilisation d’un **serveur local est obligatoire**, car l’application dépend d’une **API externe**.

### Démarrage rapide

Ouvrez le fichier `index.html` dans votre navigateur web, puis commencez à modifier `sketch.js`.

### Lancer le projet en local

Pour les projets utilisant des fichiers médias ou une API, utilisez un serveur local :

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx http-server

# Avec l’extension VS Code Live Server
# Clic droit sur index.html -> "Open with Live Server"
```


## Ressources

* [p5.js 2.0](https://beta.p5js.org/)
* [Documentation p5.js](https://p5js.org/reference/)
