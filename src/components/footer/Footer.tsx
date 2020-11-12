import React from 'react';
import './Footer.scss';

import { FooterColumns } from './FooterColumns';

export function Footer (): JSX.Element {
  return (
    <div className="footer">
      <div className="footer__row footer__row_info">
        <FooterColumns />
      </div>
      <div className="footer__row footer__row_copyright">Copyright, 2020</div>
    </div>
  );
}
