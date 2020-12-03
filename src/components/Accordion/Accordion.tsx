import React from 'react';
import './Accordion.scss';

export function Accordion (): JSX.Element {
  return (
    <div className="accordion">
      <div className="accordion__container">
        <input
          id="item1"
          type="checkbox"
          className="accordion__input"
        />
        <label
          htmlFor="item1"
          className="accordion__container-header"
        >
          Details
        </label>
        <div className="accordion__container-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
}
