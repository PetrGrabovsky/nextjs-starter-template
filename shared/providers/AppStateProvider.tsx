'use client';

import { store } from '@/store/store';
import { ReactNode, FC } from 'react';
import { Provider } from 'react-redux';

interface AppStateProviderProps {
  children: ReactNode;
}

const AppStateProvider: FC<AppStateProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppStateProvider;
