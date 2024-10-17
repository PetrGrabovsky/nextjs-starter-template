'use client';

import { FC } from 'react';
import { navItems } from '../data/navItems';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

const Navigation: FC = () => {
  const pathName = usePathname() || '/';

  return (
    <nav role='navigation'>
      <ul role='list' className='flex items-center justify-center space-x-5'>
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink navItem={item} isActive={pathName === item.href} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
