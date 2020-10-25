import React from 'react';

import './Button.scss';

export function Button ({ clickEvent, title }) {
  return (
    <button type="button" className="button" onClick={clickEvent}>
      {title}
    </button>
  );
}
