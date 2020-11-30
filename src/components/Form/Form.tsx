import React from 'react';
import { Button } from '../button/Button';
import './Form.scss';

export function Form (): JSX.Element {
  return (
    <div className="form">
      <div className="form__count">Count</div>
      <div className="form__color">Color</div>
      <div className="form__controls">
        <Button title="Order now" className="button button__form button__form_order-now" />
        <Button className="button button__form button__form_to-basket"/>
      </div>
    </div>
  );
}
