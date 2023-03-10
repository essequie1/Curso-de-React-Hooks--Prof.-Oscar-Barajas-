import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link className="header__title__link" to={'/'}>
          PlatziConf Merch
        </Link>
      </h1>
      <div className="header__checkout">
        <Link className="header__checkout__link" to={'/checkout'}>
          <span class="material-symbols-outlined">shopping_cart</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
