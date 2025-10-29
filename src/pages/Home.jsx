import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import ProductsGrid from '../components/Products/ProductsGrid';

const Home = () => {
  return (
    <div>
      <Carousel />
      <ProductsGrid title="Mixed Picks For You" />
    </div>
  );
};

export default Home;
