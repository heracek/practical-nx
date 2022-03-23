import classNames from 'classnames';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { Link } from './Link';
import type { LinkProps } from './Link';

export type NavLinkProps = LinkProps<typeof RouterNavLink>;

export function NavLink({ className, ...rest }: NavLinkProps) {
  return (
    <Link
      as={RouterNavLink}
      className={classNames(className, 'f6 dib white dim')}
      activeClassName={'bg-black-30'}
      noUnderline
      {...rest}
    />
  );
}
