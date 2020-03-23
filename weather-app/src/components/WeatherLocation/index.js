import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import { SUN, WINDY } from "../../constants/weathers";

const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: "10 m/s"
};

const data2 = {
  temperature: 15,
  weatherState: WINDY,
  humidity: 20,
  wind: "20 m/s"
};

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
      data: data,
    };
  }

  handleUpdateClick = () => {
    console.log(data2);
    this.setState({
      data: data2,
    })
  };

  render() {
    const { city, data} = this.state
    return (
      <div className="WeatherLocationCont">
        <Location city={city}></Location>
        <WeatherData data={data}></WeatherData>
        <button onClick={this.handleUpdateClick}>Update</button>
      </div>
    );
  }
}

export default WeatherLocation;
