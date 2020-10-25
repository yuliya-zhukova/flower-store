import React from 'react';
import './location.scss';

import locationPoint from './locationPoint.png';

export function Location() {
  return (
    <a href="/" className="location">
        <img src={locationPoint} alt="Point" className="location__point"></img>
        <div className="location__city">London</div>
    </a>
  );
}
