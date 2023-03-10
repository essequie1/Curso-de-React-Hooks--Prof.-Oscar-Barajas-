import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.scss';

const Information = () => (
  <section className="information">
    <form className="information__form" action="">
      <h2>Informacion de Contacto</h2>
      <label htmlFor="name">
        Nombre Completo
        <input type="text" name="name" />
      </label>
      <label htmlFor="mail">
        Correo Electronico
        <input type="text" name="mail" />
      </label>
      <label htmlFor="phone">
        Numero de Teléfono
        <input type="text" name="phone" />
      </label>
      <label htmlFor="address">
        Direccion
        <input type="text" name="address" />
      </label>
      <label htmlFor="zip">
        Codigo Postal
        <input type="text" name="zip" />
      </label>
      <label htmlFor="city">
        Ciudad
        <input type="text" name="city" />
      </label>
      <label htmlFor="state">
        Estado
        <input type="text" name="state" />
      </label>
      <label htmlFor="country">
        Pais
        <input type="text" name="country" />
      </label>
      <div className="information__buttons">
        <button type="button">Regresar</button>
        <Link to={'/checkout/payment'}>
          <button type="button">Ir al pago</button>
        </Link>
      </div>
    </form>
    <div className="information__sidebar">
      <h2>Pedido</h2>
      <div className="information__sidebar__container">
        <div className="information__sidebar__item">
          <h4>
            ITEM NAME<span>$ 10</span>
          </h4>
        </div>
      </div>
    </div>
  </section>
);

export default Information;
