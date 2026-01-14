function setup() {
  createCanvas(600, 600);
  frameRate(10);
}


function draw() {
  background(220);

  const dim_square = 600;
  const position_x = 0;
  const position_y = 0;

  //intiatlisiaton du premier squre
  square(position_x, position_y, dim_square);

  // On dessine les squares divisé en 2
  let current_dim = dim_square;
  for (let i = 0; i < 10; i++) {
    current_dim = current_dim / 2;
    square(position_x, position_y, current_dim);
    square(position_x + current_dim, position_y, current_dim);
    square(position_x, position_y + current_dim, current_dim);
    square(position_x + current_dim, position_y + current_dim, current_dim);
  }
}
