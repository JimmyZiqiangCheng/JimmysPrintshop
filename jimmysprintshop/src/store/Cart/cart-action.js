import { CART_ACTION_TYPES } from "./cart-action-types";

export const toggleShowCart = (showCart) => {
  return {
    type: CART_ACTION_TYPES.TOGGLE_SHOW_CART,
    payload: showCart,
  };
};

const getNewProduct = (product, size, price) => {
  const newName = product.name + `(${size.slice(0, 1).toUpperCase()})`;
  return { ...product, name: newName, price };
};

export const addItem = (cartItems, product, size = null, price = null) => {
  const newProduct =
    size && price ? getNewProduct(product, size, price) : product;
  const newItems = updateItems(cartItems, newProduct, 1);
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
    return oldItems.filter((item) => item.name !== product.name);
  }
  const index = oldItems.findIndex((item) => item.name === product.name);
  if (index === -1) {
    return value === 1
      ? [...oldItems, { ...product, quantity: 1 }]
      : [...oldItems];
  } else {
    oldItems[index].quantity += value;
    if (oldItems[index].quantity === 0) {
      return oldItems.filter((item) => item.name !== product.name);
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
