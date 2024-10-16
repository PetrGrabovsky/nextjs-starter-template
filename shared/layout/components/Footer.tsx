import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className='flex h-12 items-center justify-center bg-green-600'>
      <div className='container flex items-center justify-end'>
        <p>Všechna práva vyhrazena</p>
      </div>
    </footer>
  );
};

export default Footer;
