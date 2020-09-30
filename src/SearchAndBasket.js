import React from 'react';
import './searchAndBasket.scss';

import loop from './loop.png';
import basket from './basket.png';

export function SearchAndBasket() {
  return (
      <div className="searchAndBasket">
          <a href="#" className="searchAndBasket__loop">
              <img src={loop}></img>
          </a>
          <a href="#" className="searchAndBasket__basket">
              <img src={basket}></img>
          </a>
      </div>
  );
}
