import { useRef, useEffect } from "react";
export const useOutsideClick = (func) => {
  let ref = useRef();
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      func();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
  return ref;
};
