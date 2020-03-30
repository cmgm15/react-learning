import convert from "convert-units";
import { SUN, SNOW, THUNDER, DRIZZLE, CLOUD, RAIN, } from "../constants/weathers";

const getTemp = (value, unitFrom, unitTo) => {
  return convert(value)
    .from(unitFrom)
    .to(unitTo)
    .toFixed(2);
};

const getWeatherState = weather => {
  const { id } = weather;
  if ( id < 300) {
    return THUNDER;
  } else if ( id < 400 ) {
    return DRIZZLE;
  } else if ( id < 600 ) {
    return RAIN;
  } else if ( id < 700 ) {
    return SNOW;
  } else if ( id === 800) {
    return SUN;
  } else {
    return CLOUD;
  }
};

const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather_data.weather[0]);
  const temperature = parseFloat(getTemp(temp, "K", "C"));
  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`
  };
  return data;
};

export default transformWeather;
