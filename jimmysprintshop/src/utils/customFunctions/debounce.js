export const debounce = (fn, delay) => {
  let to;
  return (...args) => {
    clearTimeout(to);
    to = setTimeout(() => fn(...args), delay * 1000);
  };
};
