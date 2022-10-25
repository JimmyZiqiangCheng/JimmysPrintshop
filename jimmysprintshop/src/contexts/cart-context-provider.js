import { createContext, useReducer } from "react";

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
  reduceItem: () => {},
  removeItem: () => {},
  showCart: false,
  setShowCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const CART_ACTION_TYPES = {
  TOGGLE_SHOW_CART: "[SHOW_CART] toggled",
  UPDATE_CART_ITEMS: "[CART ITEMS] updated",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.TOGGLE_SHOW_CART:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`unhandled type ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  cartItems: [],
  showCart: false,
  cartCount: 0,
  cartTotal: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, showCart, cartCount, cartTotal } = state;

  const updateCartReducer = (newItems) => {
    const newCount = newItems.reduce((acc, item) => acc + item.quantity, 0);
    const newTotal = newItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    dispatch({
      type: CART_ACTION_TYPES.UPDATE_CART_ITEMS,
      payload: {
        cartItems: newItems,
        cartCount: newCount,
        cartTotal: newTotal,
      },
    });
  };

  const addItem = (product) => {
    const newItems = updateItems(cartItems, product, 1);
    updateCartReducer(newItems);
  };

  const reduceItem = (product) => {
    const newItems = updateItems(cartItems, product, -1);
    updateCartReducer(newItems);
  };

  const removeItem = (product) => {
    const newItems = updateItems(cartItems, product, 0);
    updateCartReducer(newItems);
  };

  const setShowCart = (showCart) => {
    dispatch({
      type: CART_ACTION_TYPES.TOGGLE_SHOW_CART,
      payload: { showCart },
    });
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
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
