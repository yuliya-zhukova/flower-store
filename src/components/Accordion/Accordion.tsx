import React from 'react';
import './Accordion.scss';

const accordionList = [
  {
    id: 'item1',
    title: 'Details1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitsed.'
  },
  {
    id: 'item2',
    title: 'Details2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitsed.'
  },
  {
    id: 'item3',
    title: 'Details3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitsed.'
  }
];

export function Accordion (): JSX.Element {
  return (
    <div className="accordion">
      {accordionList.map((item: { id: string; title: string; content: string; }): JSX.Element => (
        <div key={item.id} className="accordion__container">
          <input
            id={item.id}
            type="checkbox"
            className="accordion__input"
          />
          <label
            htmlFor={item.id}
            className="accordion__container-header"
          >
            {item.title}
          </label>
          <div className="accordion__container-content">
              {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
