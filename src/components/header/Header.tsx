import React from 'react';
import './header.scss';

import { Location } from '../location/Location';
import { SearchAndBasket } from '../search/SearchAndBasket';

export function Header() {
  return (
      <div className="header">
        <Location />
        <h1 className="header__center">Cassiopeia</h1>
        <SearchAndBasket />
      </div>
  );
}
