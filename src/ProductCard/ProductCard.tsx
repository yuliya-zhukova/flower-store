import React from 'react';
import './ProductCard.scss';

export default function ProductCard (): JSX.Element {
  return (
    <div className="container">
      <div className="row">
        <header className="product-card__header">
            BreadCrumbs
        </header>
      </div>
      <div className="row">
        <main className="product-card__body">
            Product card
        </main>
      </div>
    </div>
  );
}
