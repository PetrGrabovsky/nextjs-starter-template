import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className='flex h-14 items-center justify-center bg-blue-600'>
      <div className='container flex items-center justify-between'>
        <span>Logo</span>
        <span>Menu</span>
      </div>
    </header>
  );
};

export default Header;
