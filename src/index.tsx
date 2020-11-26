import React from 'react';
import ReactDOM from 'react-dom';
import './global.scss';
import ProductCard from './ProductCard/ProductCard';

ReactDOM.render(
  <React.StrictMode>
    <ProductCard />
  </React.StrictMode>,
  document.getElementById('root')
);
