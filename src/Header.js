import React from 'react';
import './header.scss';

export function Header() {
  return (
      <div className="header">
        <div className="header__left">Location</div>
        <h1 className="header__center">Cassiopeia</h1>
        <div className="header__right">Basket</div>
      </div>
  );
}
