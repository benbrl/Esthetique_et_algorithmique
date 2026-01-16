const fontSize = 20;
let columns;
let rows;
let text_background =
  "Le terme « poème » a d'abord désigné tout texte écrit en vers, qu'il soit lyrique, dramatique ou épique.";
let title = "POEME";
let text_grid;
let color_grid;
let mask_gaphic;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("monospace");
  textAlign(LEFT, TOP);

  // calcul du nombre de colonnes et de lignes
  columns = floor(width / (fontSize * 0.6));
  rows = floor(height / fontSize);

  // Répéter le texte pour remplir l'écran
  text_background = text_background.toUpperCase();
  text_background = text_background.repeat(20);

  await wikipedia_api();
}

function initialize_grids() {
  text_grid = [];
  color_grid = [];
  let charIndex = 0;

  // remplir les tableaux 2D avec les lettres et les couleurs par défaut
  for (let row = 0; row < rows; row++) {
    text_grid[row] = [];
    color_grid[row] = [];
    for (let col = 0; col < columns; col++) {
      text_grid[row][col] = text_background.charAt(
        //quelle lettre prendre dans la phrase et ensuiter recommencer au début a la fin du texte
        charIndex % text_background.length
      );
      color_grid[row][col] = color(220); // gris clair
      charIndex++;
    }
  }
}

function create_mask() {
  // graphics pour le masque avec le titre
  mask_gaphic = createGraphics(width, height);

  //parametre du titlre
  mask_gaphic.textFont("monospace");
  mask_gaphic.textAlign(CENTER, CENTER);
  let titleSize = height * 0.3;
  mask_gaphic.textSize(titleSize);
  mask_gaphic.textStyle(BOLD);

  // dessiner titre en blanc sur fond noir -> creation du mask
  mask_gaphic.background(0);
  mask_gaphic.fill(255);
  mask_gaphic.text(title, width / 2, height / 2);
}

function draw() {
  background(255);

  // Dessiner le texte gris clair (premier layer)
  textSize(fontSize);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      fill(color_grid[row][col]);
      text(text_grid[row][col], col * fontSize * 0.6, row * fontSize);
    }
  }

  // dessiner le texte noir avec le mask
  draw_masked_text();
}

function draw_masked_text() {
  // créer un graphics temporaire pour le texte noir
  let black_text_background = createGraphics(width, height);
  black_text_background.textFont("monospace");
  black_text_background.textAlign(LEFT, TOP);
  black_text_background.textSize(fontSize);
  black_text_background.background(255, 0); // Transparent

  // dessiner le texte noir
  black_text_background.fill(0);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      black_text_background.text(
        text_grid[row][col],
        col * fontSize * 0.6,
        row * fontSize
      );
    }
  }

  // appliquer le masque
  black_text_background.loadPixels();
  mask_gaphic.loadPixels();

  // On parcourt les 4 canaux (rouge, vert, bleu, alpha) de chaque pixel
  for (let i = 0; i < black_text_background.pixels.length; i += 4) {
    // Si le pixel du masque est sombre (valeur rouge < 128), rendre le texte transparent
    // On regarde la composante rouge du pixel du masque
    // Si la valeur rouge du masque est inférieure à 128, le pixel du texte devient transparent
    if (mask_gaphic.pixels[i] < 128) {
      black_text_background.pixels[i + 3] = 0; // Alpha = 0 (transparent), car i+3 est le canal alpha
    }
    // / / Sinon, le pixel du texte reste opaque (alpha reste inchangé)
  }

  black_text_background.updatePixels();

  // afficher le résultat
  image(black_text_background, 0, 0);
}
