import '@/shared/styles/globals.css';
import { FC, ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Header from '@/shared/layout/components/Header';
import Footer from '@/shared/layout/components/Footer';
import AppStateProvider from '@/shared/providers/AppStateProvider';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='cs'>
      <body
        className={`${inter.className} flex min-h-screen flex-col overflow-x-hidden antialiased`}
      >
        <AppStateProvider>
          <Header />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </AppStateProvider>
      </body>
    </html>
  );
};

export default RootLayout;
