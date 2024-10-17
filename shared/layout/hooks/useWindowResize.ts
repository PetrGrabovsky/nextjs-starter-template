import { useEffect } from 'react';
import { throttle } from 'lodash';

const useWindowResize = (callback: () => void, delay: number) => {
  useEffect(() => {
    const throttledResize = throttle(callback, delay);

    callback();
    window.addEventListener('resize', throttledResize);

    return () => {
      window.removeEventListener('resize', throttledResize);
    };
  }, [callback, delay]);
};

export default useWindowResize;
