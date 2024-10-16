import { FC, ReactNode } from 'react';
import '@/shared/styles/globals.css';
import Header from '@/shared/layout/components/Header';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='cs'>
      <body className='antialiased'>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
