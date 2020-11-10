import React from 'react';
import './Navigation.scss';
import { navigationItems } from './navigationItems';

export function Navigation() {
  return (
    <div className="navigation">
      <ul className="navigation__bar">
        {navigationItems.map(function(item) {
          return (
            <a
              key={item.title}
              href={item.href}
              className="navigation__item"
            >
              {item.title}
            </a>
          );
        }
        )}
      </ul>
    </div>
  );
}
