async function fetch_api_weather() {
  try {
    //Champs sur marnes
    const lat = 48.839423;
    const long = 2.588027;

    //Sahara
    // const lat = 20.836538;
    // const long = 11.296173;

    //Custom
    // const lat =
    // const long =

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&current=temperature_2m&models=meteofrance_seamless`
    );

    const temperature = await response.json();
    console.log(temperature);
    return temperature;
  } catch (error) {
    console.error(error);
  }
}
