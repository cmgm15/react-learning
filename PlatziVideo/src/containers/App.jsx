import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const initialState = useInitialState(API);
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      {initialState.mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            <CarouselItem></CarouselItem>
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map((item) => (
            <CarouselItem key={item.id} {...item}></CarouselItem>
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
      <Carousel>
        {initialState.originals.map((item) => (
          <CarouselItem key={item.id} {...item}></CarouselItem>
        ))}
        </Carousel>
      </Categories>

      <Footer></Footer>
    </div>
  );
};

export default App;
