import { useCallback } from "react";

export const useDebounce = (func, delay = 1) => {
  let myTimeOut;
  const debounced = useCallback((...args) => {
    clearTimeout(myTimeOut);
    myTimeOut = setTimeout(() => func.apply(this, args), delay * 1000);
  }, []);
  return debounced;
};
