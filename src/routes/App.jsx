import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/components/App.scss';

import {
  Home,
  Checkout,
  Information,
  Payment,
  Success,
  NotFound,
} from '../containers/index';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/information" element={<Information />} />
        <Route path="/checkout/payment" element={<Payment />} />
        <Route path="/checkout/success" element={<Success />} />
        <Route path="*" elemente={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
