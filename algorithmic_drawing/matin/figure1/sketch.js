const width = 640;
const height = 400;

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(200);
  x = width;
  y = height;
  n = 0;
  d = 0;

  for (let n = 0; n <= y; n++) {
    d = d + 1;

    strokeWeight(d)

    stroke(255, 100, 255);

    n = n + d + 1;
    x = x - d - 10;
    y = y - d - 10;
    rect(n, n, x - n, y - n);
  }
}

// let time = frameCount * 0.005;

// let r = 128 + 127 * sin(time);
// let g = 128 + 127 * sin(t + 2);
// let b = 128 + 127 * sin(t + 4);
