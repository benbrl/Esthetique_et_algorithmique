const width = 800;
const height = 800;

const cols = width / 10;
const rows = height / 10;

const color_value = 4;
const THRESHOLD = 3;

let grid = [];
function setup() {
  createCanvas(width, height);
  frameRate(50);

  //display grid
  for (let x = 0; x < cols; x++) {
    grid[x] = [];
    for (let y = 0; y < rows; y++) {
      grid[x][y] = Math.floor(Math.random() * 4);
    }
  }
}

function draw() {
  background(220);

  let next_grid = [];

  for (let x = 0; x < cols; x++) {
    next_grid[x] = [];
    for (let y = 0; y < rows; y++) {
      let state = grid[x][y];
      let next_grid_state = (state + 1) % color_value; // Calculate the next state: increment by 1 and use modulo so that after reaching color_value - 1, it wraps back to 0.
      let count = 0;

      //check each value next to square to see if there is it matches the next state
      for (let position_x = -1; position_x <= 1; position_x++) {
        for (let position_y = -1; position_y <= 1; position_y++) {
          // skip the current square himself
          if (position_x === 0 && position_y === 0) continue;

          // calculate the new position
          let new_position_x = x + position_x;
          let new_position_y = y + position_y;

          // check if the new position is in the grid aera
          if (
            new_position_x >= 0 &&
            new_position_x < cols &&
            new_position_y >= 0 &&
            new_position_y < rows
          ) {
            // if the square matches the next state increment the count
            if (grid[new_position_x][new_position_y] === next_grid_state) {
              count++;
            }
          }
        }
      }

      // Rules (from original artwork): Adopt next state if at least THRESHOLD neighbors match it
      if (count >= THRESHOLD) {
        next_grid[x][y] = next_grid_state;
      } else {
        next_grid[x][y] = state;
      }
    }
  }

  // update grid
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      grid[x][y] = next_grid[x][y];

      draw_square(x, y, grid[x][y]);
    }
  }
}

function draw_square(position_square_x, position_square_y, value_square) {
  const square_size = 10;
  //value_square -> 1 or O
  let value_to_color = value_square / (color_value - 1);

  //The color I want is : rgb(0, 84, 97) so to change the 'opcaity' (this is not opacity but ok..)
  // we change each values r,g,b
  let r = 0 + (255 - 0) * value_to_color;
  let g = 84 + (255 - 84) * value_to_color;
  let b = 97 + (255 - 97) * value_to_color;

  fill(r, g, b);
  noStroke();
  square(
    position_square_x * square_size,
    position_square_y * square_size,
    square_size
  );
}
