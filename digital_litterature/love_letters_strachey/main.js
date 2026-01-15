const letter = document.querySelector("#letter");

const prenom = ["Elouan", "Léna", "Jade", "Élea", "Alex"];
const introduction = [
  "Chère",
  "Cher",
  "Bonjour",
  "Bonsoir",
  "Salut",

  "Bien le bonjour",
  "Coucou",
];

const adjectifs = [
  "beau",
  "gentil",
  "doux",
  "merveilleux",
  "charmant",
  "incroyable",
  "formidable",
  "adorable",
  "brillant",
  "créatif",
  "joyeux",
  "inspirant",
  "moche",
];

const verbes = [
  "joue",
  "dort",
  "mange",
  "chante",
  "danse",
  "rêve",
  "voyage",
  "lit",
  "écrit",
  "crée",
  "découvre",
  "partage",
];

const mots = [
  "tractopelle",
  "pelleteuse",
  "engin",
  "machine",
  "bulldozer",
  "chargeuse",
  "temps",
];

const pronoms = [
  "le",
  "la",
  "mon",
  "ma",
  "ton",
  "ta",
  "notre",
  "votre",
  "leur",
  "je",
  "tu",
];

const mots_de_fin = [
  "Cordialement",
  "Respectueusement",
  "Amicalement",
  "Belle journée",
  "À bientôt",
  "Bien à toi",
  "Sincères salutations",
];

function random_index(tableau) {
  return Math.floor(Math.random() * tableau.length);
}

letter.innerHTML = `${introduction[random_index(introduction)]} ${
  prenom[random_index(prenom)] +
  "," +
  "</br>" +
  pronoms[random_index(prenom)] +
  " " +
  mots[random_index(mots)] +
  " " +
  verbes[random_index(verbes)] +
  "." +
  "</br>" +
  //deuxieme phrase
  "</br>" +
  "</br>" +
  mots_de_fin[random_index(mots_de_fin)] +
  " " +
  prenom[random_index(prenom)] +
  "."
}`;

const text_to_speak = letter.textContent || letter.innerText;

document.getElementById("button").addEventListener("click", () => {
  const speak = new SpeechSynthesisUtterance(text_to_speak);
  speak.lang = "fr-FR";
  window.speechSynthesis.speak(speak);
});
