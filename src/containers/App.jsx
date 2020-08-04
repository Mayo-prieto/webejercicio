/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrusel from '../components/Carrusel';
import CarrouselItem from '../components/CarrouseIItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
  useEffect(() => {
    fetch('http://localhost:3000/initialState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return (
    <div className='App'>
      <Header />
      <Search />
      {videos.mylist.length > 0 && (
        <Categories title='My lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carrusel>
          {videos.trends.map((item) => <CarrouselItem key={item.id} {...item} />)}
          <CarrouselItem />
          <CarrouselItem />
          <CarrouselItem />
          <CarrouselItem />
        </Carrusel>
      </Categories>

      <Categories title='Mi lista'>
        <Carrusel>
          <CarrouselItem />
        </Carrusel>
      </Categories>

      <Footer />
    </div>
  );
};
export default App;
