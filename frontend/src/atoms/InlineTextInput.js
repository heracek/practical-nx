import React from 'react';
import classNames from 'classnames';

export function InlineTextInput({ className, ...props }) {
  return (
    <input
      className={classNames(
        'flex-auto mr1 bn bg-transparent br1 pa1',
        className,
      )}
      {...props}
    />
  );
}
