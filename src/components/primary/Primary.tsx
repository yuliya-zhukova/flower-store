import React from 'react';
import './Primary.scss';

import { primaryItem } from '../../demoData/primaryItem';
import { Button } from '../button/Button';

const buttonName = 'Shop now';

function pressButton (): void {
  console.log('Bamm!');
}

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
          <Button className="button" clickEvent={pressButton} title={buttonName} />
        </div>
    </div>
  );
}
