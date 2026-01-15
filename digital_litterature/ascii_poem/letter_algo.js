const prenoms = ["Elouan", "Léna", "Jade", "Élea", "Alex", "Corentin", "Romane"];

const introductions = [
  "Chèr(e)",
  "Bonjour",
  "Bonsoir",
  "Salut",
  "Bien le bonjour",
  "Coucou",
];

const adjectifs = [
  "merveilleux",
  "extraordinaire",
  "formidable",
  "incroyable",
  "fantastique",
  "magnifique",
  "génial",
];

const actions = [
  "rêve de grandes aventures",
  "explore de nouveaux horizons",
  "crée des œuvres magnifiques",
  "partage sa joie de vivre",
  "illumine le quotidien",
  "transforme l'ordinaire en extraordinaire",
];

const qualites = [
  "ta créativité",
  "ton courage",
  "ta gentillesse",
  "ton imagination",
  "ta détermination",
  "ton sourire",
  "ta bienveillance",
  "ton enthousiasme",
];

const mots_de_fin = [
  "Affectueusement",
  "Avec toute mon amitié",
  "Bien à toi",
  "Chaleureusement",
  "Tendrement",
  "Avec admiration",
  "Cordialement",
  "Respectueusement",
  "Amicalement",
  "Belle journée",
  "À bientôt",
  "Sincères salutations",
];

function random_index(tableau) {
  return tableau[Math.floor(Math.random() * tableau.length)];
}

function generer_lettre() {
  const prenom = random_index(prenoms);
  const intro = random_index(introductions);
  const adjectif = random_index(adjectifs);
  const action = random_index(actions);
  const qualite = random_index(qualites);
  const fin = random_index(mots_de_fin);

  const texte = `${intro} ${prenom}, Tu es quelqu'un de ${adjectif} qui ${action}. J'aime beaucoup ${qualite}. ${fin}. Benoît. `;

  return {
    texte: texte,
    prenom: prenom.toUpperCase(),
  };
}
