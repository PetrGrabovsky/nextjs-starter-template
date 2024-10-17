import { FC } from 'react';
import clsx from 'clsx';
import { NavItem } from '../types/NavItem';
import Link from 'next/link';

interface NavLinkProps {
  navItem: NavItem;
  isActive: boolean;
}

const NavLink: FC<NavLinkProps> = ({ navItem, isActive }) => {
  return (
    <li key={navItem.id}>
      <Link
        href={navItem.href}
        aria-current={isActive ? 'page' : undefined}
        className={clsx(
          isActive && 'font-bold text-white',
          'flex items-center justify-between space-x-1 text-black'
        )}
      >
        <navItem.Icon aria-hidden='true' className='h-5 w-5' />
        <span>{navItem.label}</span>
      </Link>
    </li>
  );
};

export default NavLink;
