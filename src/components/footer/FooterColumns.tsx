import React from 'react';
import './Footer.scss';

import { FooterColumn } from './FooterColumnItem';

import { footerColumnNames } from './footerColumnNames';

export function FooterColumns (): JSX.Element {
  return (
    <>
      {footerColumnNames.map((name: string, i: number): JSX.Element => {
        return (
          <div className="footer__column" key={i}>
            <h4 className="footer__columnName">{name}</h4>
            <FooterColumn />
          </div>
        );
      })}
    </>
  );
}
