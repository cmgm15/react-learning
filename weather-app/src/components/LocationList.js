import React from "react";
import PropTypes from "prop-types";
import WeatherLocation from "./WeatherLocation";

const strToComponentes = cities =>
  cities.map( city => <WeatherLocation key={city} city={city}></WeatherLocation>);

const LocationList = ({ cities }) => <div>{strToComponentes(cities)}</div>;

LocationList.propTypes = {
  cities: PropTypes.array.isRequired
};

export default LocationList;
