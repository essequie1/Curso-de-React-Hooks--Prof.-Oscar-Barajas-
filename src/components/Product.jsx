import React from 'react';
import '../styles/components/Product.scss';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img className="product__img" src={product.image} alt={product.title} />
      <div className="product__info">
        <h2 className="product__info__title">{product.title}</h2>
        <span className="product__info__price">{'$ ' + product.price}</span>
        <p className="product__info__desc">{product.description}</p>
      </div>
      <button className="product__btn" type="button">
        Comprar
      </button>
    </div>
  );
};

export default Product;
