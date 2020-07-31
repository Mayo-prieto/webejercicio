import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrusel from '../components/Carrusel';
import CarrouselItem from '../components/CarrouseIItem';
import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Search />
    <Categories>
      <Carrusel>
        <CarrouselItem />
        <CarrouselItem />
      </Carrusel>
    </Categories>
  </div>
);

export default App;
