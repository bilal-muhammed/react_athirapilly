import React from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import Search from '../components/Search';
import Selections from '../components/Selections';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <>
      <Hero />
      <Destinations />
      <Search />
      <Selections />
      <Carousel />
    </>
  );
};

export default Home;
