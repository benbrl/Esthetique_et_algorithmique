width = window.innerWidth;
height = window.innerHeight;

async function parsing_data() {
  const temperatureData = await fetch_api_weather();
  // console.log(temperatureData);

  const { time, temperature_2m } = temperatureData.hourly;

  // current temperature directly from api
  const current_temperature = temperatureData.current.temperature_2m;

  const day_temperatures = time.map((hour, index) => ({
    time: hour,
    temperature: temperature_2m[index],
  }));

  return {
    current_temperature,
    day_temperatures,
  };
}

function color_by_temp(temperature) {
  // temp between -10 and 35
  let temp = Math.max(0, Math.min(30, temperature));

  // ratio
  const ratio = temp / 30;

  //using HSL beaccause is mush easier.
  // our max color is blue, so 240 max , and we soustract
  const hue = 240 - ratio * 240;

  return `hsl(${hue}, 80%, 80%)`;
}

async function setup() {
  const dim_square = (height / 8) * 10;
  console.log(dim_square);
  let position_x = 0;
  let position_y = 0;
  createCanvas(dim_square * 8, dim_square * 4);
  background(220);

  const number_square_x = Math.floor(width / dim_square);
  const number_square_y = Math.floor(height / dim_square);

  const result = await parsing_data();

  let temp_index = 0;
  //grid
  for (let i = 0; i < number_square_x; i++) {
    position_y = 0;
    for (let j = 0; j < number_square_y; j++) {
      //color from Api
      const temp =
        result.day_temperatures[temp_index % result.day_temperatures.length]
          .temperature;
      fill(color_by_temp(temp));
      noStroke();
      square(position_x, position_y, dim_square);
      position_y += dim_square;
      temp_index++;
    }
    position_x += dim_square;
  }

  // font display
  textFont("Arial");
  textSize(150);
  textAlign(CENTER, CENTER);
  fill(255);
  text(`${Math.round(result.current_temperature)}°C`, width / 2, height / 2);
}

function draw() {}
