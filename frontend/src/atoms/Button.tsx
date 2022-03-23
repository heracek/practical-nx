import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import classNames from 'classnames';

const DEFAULT_COLOR_CLASSES = 'white bg-green hover-bg-dark-green';

const COLORS = {
  green: DEFAULT_COLOR_CLASSES,
  navbar: 'f6 white bg-transparent hover-bg-white hover-black mh3 b--white-20',
  red: 'white bg-red hover-bg-dark-red',
} as const;

type ButtonPropsBase<TAsComponent extends ElementType> = {
  children: ReactNode;
  color: keyof typeof COLORS;
  className?: string;
  as?: TAsComponent;
  border?: boolean;
  narrow?: boolean;
};

export type ButtonProps<TAsComponent extends ElementType> =
  ButtonPropsBase<TAsComponent> &
    Omit<
      ComponentPropsWithoutRef<TAsComponent>,
      keyof ButtonPropsBase<TAsComponent>
    >;

export function Button<TAsComponent extends ElementType = 'button'>({
  children,
  color,
  className,
  as,
  border = false,
  narrow = false,
  disabled,
  ...rest
}: ButtonProps<TAsComponent>) {
  const colorClasses = COLORS[color] || DEFAULT_COLOR_CLASSES;
  const Component = as ?? 'button';

  return (
    <Component
      className={classNames(
        'dib bg-animate pv2 br-pill',
        narrow ? 'ph3' : 'ph4',
        border ? 'ba' : 'bn',
        { 'o-50': disabled },
        colorClasses,
        className,
      )}
      type="button"
      disabled={disabled}
      {...rest}
    >
      {children}
    </Component>
  );
}
