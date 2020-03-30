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
  return (
    <div className="App">
      <LocationList cities={cities}></LocationList>
    </div>
  );
}

export default App;
