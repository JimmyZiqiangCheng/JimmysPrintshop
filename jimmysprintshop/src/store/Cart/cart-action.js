import { CART_ACTION_TYPES } from "./cart-action-types";

export const toggleShowCart = (showCart) => {
  return {
    type: CART_ACTION_TYPES.TOGGLE_SHOW_CART,
    payload: showCart,
  };
};

export const addItem = (cartItems, product) => {
  const newItems = updateItems(cartItems, product, 1);
  return updateCartReducer(newItems);
};

export const reduceItem = (cartItems, product) => {
  const newItems = updateItems(cartItems, product, -1);
  return updateCartReducer(newItems);
};

export const removeItem = (cartItems, product) => {
  const newItems = updateItems(cartItems, product, 0);
  return updateCartReducer(newItems);
};

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

const updateCartReducer = (newItems) => {
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: newItems,
  };
};
