import React from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  "Medellin,co",
  "Buenos Aires,ar",
  "New York,us",
  "Madrid,es",
  "Lima,pe",
]

function App() {
  const handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }
  return (
    <div className="App">
      <LocationList cities={cities} onSelectedLocation={handleSelectedLocation}></LocationList>
    </div>
  );
}

export default App;
