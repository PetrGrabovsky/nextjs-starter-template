import { FC } from 'react';
import clsx from 'clsx';
import { NavItem } from '../types/navItem';
import Link from 'next/link';

interface NavLinkProps {
  navItem: NavItem;
  isActive: boolean;
}

const NavLink: FC<NavLinkProps> = ({ navItem, isActive }) => {
  return (
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
  );
};

export default NavLink;
