import { useState, createContext } from "react";
import PRODUCTS from "../shop-data.json";
export const productsContext = createContext({
  products: [],
  setProducts: () => {},
});
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  return (
    <productsContext.Provider value={{ products, setProducts }}>
      {children}
    </productsContext.Provider>
  );
};
