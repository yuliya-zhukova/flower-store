import React from 'react';

import './Button.scss';

export function Button ({ clickEvent, title, classNames }) {
  return (
    <button type="button" className={classNames} onClick={clickEvent}>
      {title}
    </button>
  );
}
