import '@/shared/styles/globals.css';
import { FC, ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Header from '@/shared/layout/components/Header';
import Footer from '@/shared/layout/components/Footer';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='cs'>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
