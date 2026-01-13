let width = window.innerWidth;
let height = window.innerHeight;
let dim_square = 10;

function setup() {
  createCanvas(800, 600);
  background(220);

  const number_square_x = Math.floor(width / dim_square);
  const number_square_y = Math.floor(height / dim_square);

  // Grid
  for (let i = 0; i < number_square_x; i++) {
    for (let j = 0; j < number_square_y; j++) {
      stroke(1);
      square(i * dim_square, j * dim_square, dim_square);
    }
  }

  position_square(1, 1, "#D02752");
}

function position_square(x, y, color) {
  const position_square_x = dim_square * x;
  const position_square_y = dim_square * y;

  fill(color);
  square(position_square_x, position_square_y, dim_square);
}



function draw() {
 
}

function rules() {}
