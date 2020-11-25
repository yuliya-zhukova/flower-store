import React from 'react';
import './Primary.scss';

import { primaryItem } from '../../demoData/primaryItem';

export function Primary (): JSX.Element {
  const image_big = 'images/image_big.png';

  return (
    <div className="primary">
      <img src={image_big} alt="Discount" />
        <div className="primary__info">
          <h2 className="primary__title">
              {primaryItem.title}
          </h2>
          <p className="primary__description">
              {primaryItem.description}
          </p>
          <div className="primary__link-block">
            <a href="/" className="content__link">
              Show now
            </a>
          </div>
        </div>
    </div>
  );
}
