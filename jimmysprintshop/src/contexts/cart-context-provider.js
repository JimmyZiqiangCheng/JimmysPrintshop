import { useState, createContext } from "react";

export const cartContext = createContext({
  items: [],
  setItems: () => {},
  showCart: false,
  setShowCart: () => {},
});
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  return (
    <cartContext.Provider value={{ items, setItems, showCart, setShowCart }}>
      {children}
    </cartContext.Provider>
  );
};
