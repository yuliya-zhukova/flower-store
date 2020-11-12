import React from 'react';
import './Footer.scss';

import { footerContactItems } from './footerContactItems';

interface FooterColumnItem {
  itemName: string;
  href: string;
}

export function FooterColumn (): JSX.Element {
  return (
    <ul className="footer__list-item">
      {footerContactItems.map((item: FooterColumnItem, i: number): JSX.Element => {
        return (
          <li className="footer__item" key={i}>
            <a
              key={item.itemName}
              href={item.href}
            >
             {item.itemName}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
