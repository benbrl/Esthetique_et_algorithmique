const width = window.innerWidth;
const height = window.innerHeight;

function setup() {
  createCanvas(width, height);

  background(220);

  dim_square = 100;
  position_x = 0;
  position_y = 0;

  let number_square_x = width / dim_square;
  let number_square_y = height / dim_square;

  noStroke();

  for (let i = 0; i < number_square_x; i++) {
    let position_y = 0;

    for (let j = 0; j < number_square_y; j++) {
      fill(117, 176 + i * 10, 111 - j * 15);
      square(position_x, position_y, dim_square);

      position_y += dim_square;
    }

    position_x += dim_square;
  }

  //   color_text = color(rgb(117, 176, 111));

  // fill(color_text);
  // textFont(font);
  //    textFont(lexend);

  textFont("arial");
  textSize(150);

  textAlign(CENTER, CENTER);
  fill(255, 255, 255);
  text("25 °C", width / 2, height / 2);
}

function draw() {}
