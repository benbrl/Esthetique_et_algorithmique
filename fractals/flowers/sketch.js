const height = 800;
const width = 800;

//initialisation parametres
let gui;
let params = {
  branches: 6,
  iterations: 8,
  length: 100,
  ratio: 0.6,
  stroke_color: "#215E61",
  stroke_size: 2,
};

function setup() {
  createCanvas(width, height);
  background("#F5FBE6");

  // créer le GUI
  // gestion des controles avec min, max, valeur par par defaut
  gui = new dat.GUI();
  gui
    .add(params, "branches", 3, 12, 1)
    .name("Branches")
    .onChange(() => redraw());
  gui
    .add(params, "iterations", 1, 12, 1)
    .name("Itérations")
    .onChange(() => redraw());
  gui
    .add(params, "length", 50, 200, 5)
    .name("Longueur")
    .onChange(() => redraw());

  gui
    .add(params, "ratio", 0.3, 0.9, 0.05)
    .name("Ratio")
    .onChange(() => redraw());

  gui
    .addColor(params, "stroke_color")
    .name("Couleur")
    .onChange(() => redraw());

  gui
    .add(params, "stroke_size", 1, 5, 0.5)
    .name("Épaisseur")
    .onChange(() => redraw());
}




function draw() {
  background("#F5FBE6");


  //choisir combien de ligne au départ
  for (let i = 0; i < params.branches; i++) {
    let angle = i * (360 / params.branches); //convertir en angle

    draw_line(
      width / 2,
      height / 2,
      params.length,
      angle,
      params.iterations,
      0
    );
  }
}

function draw_line(x, y, length, angle, iterations, profondeur) {
  if (iterations <= 0 || length < 1) {
    return; // arreter la recursion
  }

  // calculer le point final de la ligne
  let x2 = x + length * cos(radians(angle));
  let y2 = y + length * sin(radians(angle));

  // Appliquer le dégradé d'opacité basé sur la profondeur
  let color_progression = profondeur / params.iterations;

  //recuperetation des parametres de GUI
  let c = color(params.stroke_color);

  // convertir en HSL pour garder la teinte et jouer avec la luminosité
  colorMode(HSL);
  let h = hue(c);
  let s = saturation(c);
  let l = lightness(c);

  // augmenter la luminosité progressivement pour un dégradé dans la même teinte

  let new_l = l + (100 - l) * color_progression * 0.6;
  stroke(h, s, new_l, 1 - color_progression * 0.3);
  colorMode(RGB);

  //epaisseur de la ligne
  strokeWeight(params.stroke_size * (1 - (profondeur / params.iterations) * 0.5));

  //draw line
  line(x, y, x2, y2);

  // calculer le milieu de la ligne
  let midX = (x + x2) / 2;
  let midY = (y + y2) / 2;

  // nouvelle longueur pour les branches perpendiculaires (réduite)
  let new_length_line = length * params.ratio;

  // dessiner deux lignes perpendiculaires au milieu de la ligne mere
  // ligne perpendiculaire gauche
  draw_line(midX, midY, new_length_line, angle + 90, iterations - 1, profondeur + 1);
  //  ligne perpendiculaire droite
  draw_line(midX, midY, new_length_line, angle - 90, iterations - 1, profondeur + 1);

  // continuer le fractale depuis le point final
  draw_line(x2, y2, new_length_line, angle, iterations - 1, profondeur + 1);
}
