# Ily

**Ily** est un assistant expérimental.

Il propose une nouvelle façon d’envisager l’interaction homme–machine.

Ici, la machine n’est plus au centre, ni représentée par un objet physique imposant. Elle prend la forme de particules, présentes sur toute la surface d’affichage. Elle est là, attentive, prête à écouter ce que vous lui adressez, sans vous brusquer, sans être un objet apparent posé sur une table, à l’image des assistants que nous connaissons aujourd’hui.

Dès que vous cliquez sur le bouton (j’aurais aimé que ce soit sans bouton, mais ce n’était pas possible), l’assistant se réveille.
Il écoute la question que vous posez, puis répond en affichant le texte **mot par mot**.

Pour gagner du temps, j’ai d’abord testé mes requêtes vers l’API d’Ollama via Postman, puis utilisé le snippet de code JavaScript qu’ils proposent.

L’idée était de le projeter sur un mur, et que cet assistant soit quasiment invisible, presque immatériel.

---

## Inspiration

Une source d’inspiration au départ (dont j’ai repris certaines parties de code) :
[https://openprocessing.org/sketch/2691712/#code](https://openprocessing.org/sketch/2691712/#code)

## Tutos

[https://p5js.org/reference/p5.Font/textToPoints/](https://p5js.org/reference/p5.Font/textToPoints/)
[https://www.youtube.com/watch?v=eZHclqx2eJY](https://www.youtube.com/watch?v=eZHclqx2eJY)

---

## Technologies utilisées

- **Web SpeechRecognition API**
  [https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)

- **Web Speech API**
  [https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)

---

## Résultats

[Démonstration vidéo Ily](https://youtu.be/pK2D4gSIbLU)

![Résultat](./ily/image.gif "Résultat")

---

## Accès au projet

Pour accéder au site en local :
[http://localhost:5500/free/ily/index.html](http://localhost:5500/free/ily/index.html)

---

## Configuration

Installer **Ollama** :
[https://ollama.com](https://ollama.com)
ainsi qu’un modèle compatible.

Configuration utilisée par défaut :

```js
const model = "gpt-oss:20b";
const url_ollama = "http://localhost:11434/";
```

Vous pouvez modifier le modèle ainsi que l’URL de l’API dans le fichier `config.js`.

---

## Serveur et compatibilité

Il est nécessaire d’ouvrir un serveur web **en HTTPS**.
(parfois, sans HTTPS, le microphone peut ne pas fonctionner pour des raisons de sécurité.)

Le projet fonctionne correctement avec **Chrome**.
Les autres navigateurs sont moins bien supportés et peuvent présenter des problèmes.

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
