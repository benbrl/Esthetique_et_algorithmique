const width = window.innerWidth;
const height = window.innerHeight;

let font;
let particles = [];
let point_size = 4.0;
let spacing = 0.09;
let font_size = Math.min(width / 10, 100);

let current_word = 0;
let words_to_display = [];

delai_speaking = 800;

function preload() {
  font = loadFont("./assets/GoogleSansFlex.ttf");
}

function setup() {
  background(0, 0, 0);
  createCanvas(width, height);
  textFont(font);
}

function draw() {
  background(0, 0, 0);

  // mettre à jour et dessiner chaque particule
  for (let particle of particles) {
    particle.diffusePoint();
    particle.originalize();
    particle.update();

    fill(255, 255, 255);
    noStroke();

    //faire apparatire les particules
    circle(particle.pos.x, particle.pos.y, point_size);
  }
}

function generate_particles(text) {
  //centrer le text
  // récupérer la bounding box du texte
  let bounds = font.textBounds(text, 0, 0, font_size);

  // calcul du centre
  let x = width / 2 - bounds.w / 2;
  let y = height / 2 + bounds.h / 2;

  // générer les points à partir du texte
  let points = font.textToPoints(text, x, y, font_size, {
    sampleFactor: spacing,
    simplifyThreshold: 0,
  });

  // créer une particule pour chaque point
  particles = points.map((point) => new Particle(point.x, point.y));
}

// fonction globale appelée dans l'api pour faire apparaitre les particules et tts pour chaque mots
async function displayWordsSequentially(words) {
  words_to_display = words;
  current_word = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // générer les particules pour ce mot
    generate_particles(word);

    // Tts
    tts(word);

    // attendre avant le prochain mot
    await sleep(delai_speaking); // delais entre chaque mots
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Classe Particle (recuperer en partie du code d'exemple)
class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y); // Position initiale de l'agent (vecteur 2D)
    this.vel = createVector(0, 0); // Vitesse initiale (nulle)
    this.acc = createVector(0, 0); // Accélération initiale (nulle)
    this.origin = createVector(x, y); // Position d'origine (pour le retour)
    this.maxforce = 0.3; // Force maximale appliquée pour le retour à l'origine
  }

  //on applique une force a la particule
  applyForce(force) {
    this.acc.add(force);
  }

  diffusePoint() {
    let randomForce = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
    this.applyForce(randomForce);
  }

  originalize() {
    let desired = p5.Vector.sub(this.origin, this.pos); // Vecteur vers l'origine
    let d = desired.mag(); // Distance à l'origine
    if (d < 100) {
      let m = map(d, 0, 100, 0, this.maxforce); // Ajuste la force en fonction de la distance
      desired.setMag(m);
    } else {
      desired.setMag(this.maxforce); // Force maximale si trop loin
    }
    let steer = p5.Vector.sub(desired, this.vel); // Ajuste la direction pour atteindre l'origine
    this.applyForce(steer);
  }

  update() {
    this.vel.add(this.acc); //maj la vitesse en fonction de l'accélération
    this.pos.add(this.vel); // maj la position en fonction de la vitesse
    this.acc.set(0, 0); // reset accélération
  }
}

// Fonction Text-to-Speech
function tts(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "fr-FR";
  utterance.rate = 1.0; // Vitesse de parole
  utterance.pitch = 1.0;
  speechSynthesis.speak(utterance);
}
