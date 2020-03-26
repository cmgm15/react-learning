import React, { Component } from "react";
import transformWeather from "../../services/transformWeather";
import { api_weather } from "../../constants/api_url";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";

// const WeatherLocation = () => {
//   return (
//     <div className="WeatherLocationCont">
//       <Location city={"Medellín"}></Location>
//       <WeatherData data={data}></WeatherData>
//     </div>
//   );
// };

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Medellín",
      data: null
    };
  }

  componentDidMount() {
    this.handleUpdateClick();
  }

  handleUpdateClick = () => {
    fetch(api_weather)
      .then(resolve => {
        return resolve.json();
      })
      .then(data => {
        const newWeather = transformWeather(data);
        this.setState({
          data: newWeather
        });
      });
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="WeatherLocationCont">
        <Location city={city}></Location>
        {data ? <WeatherData data={data}></WeatherData> : "Loading..."}
      </div>
    );
  }
}

export default WeatherLocation;
