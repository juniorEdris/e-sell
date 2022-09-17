import React from 'react';
import ExploreProducts from '../components/ExploreProducts';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Sale from '../components/Sale';

const HomePage = () => {
  return (
    <>
      <Sale />
      <Header />
      <Navbar />
      <Hero />
      <ExploreProducts />
    </>
  );
};

export default HomePage;
