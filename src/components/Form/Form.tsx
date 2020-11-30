import React from 'react';
import { Button } from '../button/Button';
import './Form.scss';

const colorList = [
  {
    id: 'violet',
    color: '#6c6caa'
  },
  {
    id: 'red',
    color: '#ee7764'
  },
  {
    id: 'pink',
    color: '#e24675'
  },
  {
    id: 'yellow',
    color: '#f1e535'
  }
];

export function Form (): JSX.Element {
  return (
    <div className="form">
      <div className="form__item">
        <div className="form__item-name">Count:</div>
        <div className="form__select">
          <Button className="button button__round button__round_less" />
          <div className="form__quantity">25</div>
          <Button className="button button__round button__round_more" />
        </div>
      </div>
      <div className="form__item">
        <div className="form__item-name">Color:</div>
        <div className="form__select">
            {colorList.map((item: {id: string;color: string;}): JSX.Element => (
              <Button
                key={item.id}
                className="button button__round button__round_color"
                style={{ backgroundColor: item.color }}
              />
            ))}
        </div>
      </div>
      <div className="form__controls">
        <Button
          title="Order now"
          className="button button__form button__form_order-now"
        />
        <Button className="button button__form button__form_to-basket" />
      </div>
    </div>
  );
}
