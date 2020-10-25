import React from 'react';
import './searchAndBasket.scss';

import search from './search.png';
import basket from './basket.png';

export function SearchAndBasket() {
  return (
      <div className="searchAndBasket">
          <a href="/" className="searchAndBasket__search">
              <img src={search} alt="Search"></img>
          </a>
          <a href="/" className="searchAndBasket__basket">
              <img src={basket} alt="Basket"></img>
          </a>
      </div>
  );
}
