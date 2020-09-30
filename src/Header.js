import React from 'react';
import './header.scss';

import { Location } from './Location';

export function Header() {
  return (
      <div className="header">
        <Location />
        <h1 className="header__center">Cassiopeia</h1>
        <div className="header__right">Basket</div>
      </div>
  );
}
