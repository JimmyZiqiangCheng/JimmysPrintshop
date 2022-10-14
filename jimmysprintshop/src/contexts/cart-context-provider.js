import { useState, createContext } from "react";

const updateItems = (oldItems, product, value) => {
  if (value === 0) {
    return oldItems.filter((item) => item.id !== product.id);
  }
  const index = oldItems.findIndex((item) => item.id === product.id);
  if (index === -1) {
    return value === 1
      ? [...oldItems, { ...product, quantity: 1 }]
      : [...oldItems];
  } else {
    oldItems[index].quantity += value;
    if (oldItems[index].quantity === 0) {
      return oldItems.filter((item) => item.id !== product.id);
    }
    return [...oldItems];
  }
};

export const cartContext = createContext({
  cartItems: [],
  addItem: () => {},
  showCart: false,
  setShowCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addItem = (product) => {
    const newItems = updateItems(cartItems, product, 1);
    setCartItems(newItems);
  };

  const reduceItem = (product) => {
    const newItems = updateItems(cartItems, product, -1);
    setCartItems(newItems);
  };

  const removeItem = (product) => {
    const newItems = updateItems(cartItems, product, 0);
    setCartItems(newItems);
  };
  return (
    <cartContext.Provider
      value={{
        cartItems,
        addItem,
        reduceItem,
        removeItem,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
