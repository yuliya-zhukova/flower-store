import React from 'react';
import './Breadcrumbs.scss';

const breadcrumbs = [
  {
    href: '#',
    name: 'Level 1'
  },
  {
    href: '#',
    name: 'Level 2'
  },
  {
    href: '#',
    name: 'Level 3'
  }
];

export function Breadcrumbs (): JSX.Element {
  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list">
        {breadcrumbs.map((item: { href: string; name: string; }, id: number): JSX.Element => {
          return (
            <li key={item.name} className="breadcrumbs__item">
              {
                id === breadcrumbs.length - 1 ? (
                  <span>{item.name}</span>
                ) : (
                  <a href={item.href} className="breadcrumbs__link">
                    {item.name}
                  </a>
                )
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
}
