let width = window.innerWidth;
let height = window.innerHeight;
let dim_square = 10;

let number_square_x;
let number_square_y;

function setup() {
  createCanvas(800, 600);
  background(220);
  frameRate(1);

  number_square_x = Math.floor(width / dim_square);
  number_square_y = Math.floor(height / dim_square);
}

const wave = {
  x: 10,
  y: 10,
  color: "#06a0ff",
  value: 10,
};


function draw_square(wave) {
  const position_square_x = dim_square * wave.x;
  const position_square_y = dim_square * wave.y;

  fill(wave.color);
  noStroke();
  square(position_square_x, position_square_y, dim_square);

  console.log(`ma super valuer la team : ${wave.value}`);
  console.log(
    `ma super poistion : ${position_square_x} , ${position_square_y}`
  );
}

function draw() {
  background(220);

  // Grid
  for (let i = 0; i < number_square_x; i++) {
    for (let j = 0; j < number_square_y; j++) {
      stroke(1);
      square(i * dim_square, j * dim_square, dim_square);
    }
  }

  draw_square(wave);
}


function rules(square) {
  let count = 0;

  if (square.x - 1 >= 0) count++;
  if (square.y - 1 >= 0) count++;
  if (square.y + 1 < number_square_y) count++;

  if (count >= 3) {
    square.value = !square.value;
  }

  return square.value;
}
