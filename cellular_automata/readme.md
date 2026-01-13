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

---

Si tu veux, je peux aussi te faire :

* une version **plus fun / devlog**
* une version **plus pro / portfolio**
* ou t’aider à **formaliser les règles de l’automate** proprement (pseudo-code, schéma, etc.)
