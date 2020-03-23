import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";

const WeatherLocation = () => {
  return (
    <div className="WeatherLocationCont">
      <Location city={"Medellín"}></Location>
      <WeatherData></WeatherData>
    </div>
  );
};

export default WeatherLocation;
