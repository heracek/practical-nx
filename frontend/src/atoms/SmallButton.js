import React from 'react';
import classNames from 'classnames';

const COLORS = {
  red: 'bg-red',
  green: 'bg-green',
  default: 'bg-blue',
};

export function SmallButton({
  colorScheme = 'default',
  className,
  disabled,
  ...props
}) {
  return (
    <button
      type="button"
      {...props}
      disabled={disabled}
      className={classNames(
        'f6 br2 bn pa1 dib white',
        { 'o-50': disabled, dim: !disabled },
        COLORS[colorScheme] ?? COLORS.default,
        className,
      )}
    />
  );
}
