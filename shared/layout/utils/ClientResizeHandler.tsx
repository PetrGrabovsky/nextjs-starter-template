'use client';

import { useAppDispatch } from '@/store/hooks';
import { FC } from 'react';
import { setIsMobileView } from '../slices/layoutSlice';
import useWindowResize from '../hooks/useWindowResize';

const getIsMobileView = () => window.innerWidth < 768;

const ClientResizeHandler: FC = () => {
  const dispatch = useAppDispatch();

  useWindowResize(() => {
    const isMobileView = getIsMobileView();
    dispatch(setIsMobileView(isMobileView));
  }, 200);

  return null;
};

export default ClientResizeHandler;
