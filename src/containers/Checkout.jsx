import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.scss';

const Checkout = () => (
  <section className="checkout">
    <div className="checkout__content">
      <h2>Lista de Pedidos</h2>
      <div className="item">
        <div className="item__info">
          <h4> ITEM NAME</h4>
          <span> $10</span>
        </div>
        <button className="item__btn">
          <span class="material-symbols-outlined">delete_forever</span>
        </button>
      </div>
    </div>
    <div className="checkout__sidebar">
      <h3>
        Precio Total: <span>$10</span>
      </h3>
      <Link to={'/checkout/information'}>
        <button type="button">Continuar Pedido</button>
      </Link>
    </div>
  </section>
);

export default Checkout;
