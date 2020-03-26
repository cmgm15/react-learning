import convert from "convert-units";
import { SUN } from "../constants/weathers";

const getTemp = (value, unitFrom, unitTo) => {
  return convert(value)
    .from(unitFrom)
    .to(unitTo)
    .toFixed(2);
};

const getWeatherState = weather_data => {
  return SUN;
};

const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather_data);
  const temperature = parseFloat(getTemp(temp, "K", "C"));
  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`
  };
  console.log(data)
  return data;
};

export default transformWeather;