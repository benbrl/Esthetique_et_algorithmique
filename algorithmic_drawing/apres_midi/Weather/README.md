# Weather

Ce premier projet permet de visualiser la température sur une journée complète.
Il est composé de **24 carrés**, représentant les **24 heures** de la journée.

Au centre de l’interface se trouve la **température actuelle**.

La grille se lit **de haut en bas** et **de gauche à droite**.

Ce projet pourrait être amélioré pour qu’il soit un peu plus lisible et pratique à l’usage, tout en gardant son aspect créatif. On pourrait penser à ajouter le nom de la ville, ou l’heure actuelle / l’endroit où l’on se trouve dans la grille.
Enfin, nous pourrions intégrer cela dans un cadre numérique / smart hub !

## Configuration de l’API

Pour changer l’emplacement utilisé par l’API, rendez-vous dans le fichier `api.js`.
Vous pouvez :

- décommenter ou commenter les premiers tests déjà présents ;
- modifier les coordonnées **latitude / longitude** afin d’utiliser une localisation personnalisée.

Pour lancer le projet, l’utilisation d’un **serveur local est obligatoire**, car l’application dépend d’une API externe.

## Résulat

![Résultat](image.png "Résultat")

## Démarrage rapide

Ouvrez le fichier `index.html` dans votre navigateur web et commencez à modifier `sketch.js`.

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

## Ressources

- [p5.js 2.0](https://beta.p5js.org/)
- [Documentation p5.js](https://p5js.org/reference/)
