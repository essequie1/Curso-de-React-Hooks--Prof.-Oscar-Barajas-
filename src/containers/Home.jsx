import React from 'react';
import initialState from '../initialState';
import Products from '../components/Products';

const Home = () => (
  <section>
    <Products products={initialState.products} />
  </section>
);

export default Home;
