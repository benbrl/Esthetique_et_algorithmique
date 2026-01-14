//récupération du bouton
const button = document.querySelector("#button");

const dim_square = 600;

function setup() {
  //mode SVG sur le canvas
  createCanvas(dim_square, dim_square, SVG);
  
  background("#FE7743");

  const position_x = 0;
  const position_y = 0;

  strokeWeight(1);
  stroke("#ffffff");
  noFill();

  //   On dessine les carrés divisés en 2
  let current_dim = dim_square;
  for (let i = 0; i < 10; i++) {
    current_dim = current_dim / 2;

    //carré haut gauche
    rect(position_x, position_y, current_dim, current_dim);
    //carré haut droite
    rect(position_x + current_dim, position_y, current_dim, current_dim);
    //carré bas gauche
    rect(position_x, position_y + current_dim, current_dim, current_dim);
    //carré bas droite
    rect(
      position_x + current_dim,
      position_y + current_dim,
      current_dim,
      current_dim
    );
  }

  noLoop(); // Empêche le dessin de se répéter
}

//export SVG
button.addEventListener("click", () => {
  console.log("click");
  save("fractal.svg");
  console.log("saved svg");
});