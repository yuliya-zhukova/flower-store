import React from 'react';

import './Button.scss';

export interface ButtonProps {
  title?: string;
  clickEvent?: () => void;
  [x: string]: any;
}

export function Button (props: ButtonProps): JSX.Element {
  const { title, clickEvent, ...restProps }: ButtonProps = props;

  return (
    <button
      type="button"
      onClick={clickEvent}
      className={props.className}
      style={props.style}
      {...restProps}
    >
      {title}
    </button>
  );
}
