import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import classNames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';

type LinkPropsBase<TAsComponent extends ElementType> = {
  children: ReactNode;
  className?: string;
  noUnderline?: boolean;
  as?: TAsComponent;
};

export type LinkProps<TAsComponent extends ElementType> =
  LinkPropsBase<TAsComponent> &
    Omit<
      ComponentPropsWithoutRef<TAsComponent>,
      keyof LinkPropsBase<TAsComponent>
    >;

export function Link<TAsComponent extends ElementType = typeof RouterLink>({
  children,
  className,
  noUnderline,
  as,
  ...rest
}: LinkProps<TAsComponent>) {
  const Component = as ?? RouterLink;
  return (
    <Component
      className={classNames(
        'link no-underline',
        { 'underline-hover': !noUnderline },
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
