import { FC } from 'react';
import Navigation from './Navigation';

const Header: FC = () => {
  return (
    <header className='flex h-14 items-center justify-center bg-blue-600'>
      <div className='container flex items-center justify-between'>
        <span>Logo</span>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
