import React from 'react';

import './Button.scss';

export interface ButtonProps {
  title?: string;
  classNames: string;
  clickEvent: () => void;
}

export function Button (props: ButtonProps): JSX.Element {
  return (
    <button type="button" className={props.classNames} onClick={props.clickEvent}>
      {props.title}
    </button>
  );
}
