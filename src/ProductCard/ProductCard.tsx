import React from 'react';
import { Form } from '../components/Form/Form';
import './ProductCard.scss';

export default function ProductCard (): JSX.Element {
  const productImage = 'images/product-card.png';

  return (
    <div className="product-card">
      <div className="product-card__body">
        <div className="product-card__side">
          <img src={productImage} alt="Product title" />
        </div>
        <div className="product-card__details">
          <div className="product-card__header">
            <h3 className="product-card__title">Product name</h3>
            <div className="product-card__price-row">
              <h2 className="product-card__price">Price</h2>
              <div className="product-card__price product-card__price_old">Oldprice</div>
            </div>
          </div>
          <div className="product-card__form">
            <Form />
          </div>
          <div className="accordeon">
            Accordeon
          </div>
        </div>
      </div>
    </div>
  );
}
