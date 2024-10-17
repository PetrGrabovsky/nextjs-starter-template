'use client';

import { FC } from 'react';
import Navigation from './Navigation';
import { useAppSelector } from '@/store/hooks';

const Header: FC = () => {
  const isMobileView = useAppSelector((state) => state.layout.isMobileView);

  return (
    <header className='flex h-14 items-center justify-center bg-blue-600'>
      <div className='container flex items-center justify-between'>
        <span>Logo</span>
        {isMobileView ? <button className='bg-red-800'>MENU</button> : <Navigation />}
      </div>
    </header>
  );
};

export default Header;
