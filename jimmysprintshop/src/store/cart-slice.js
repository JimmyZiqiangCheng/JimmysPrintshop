import { createAction, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  cartItems: [],
  showCart: false,
};

const getNewProduct = (product, size, price) => {
  const newName = product.name + `(${size.slice(0, 1).toUpperCase()})`;
  return { ...product, name: newName, price };
};

export const addItem = createAction(
  "cart/add",
  function prepare(cartItems, newItem, size = null, price = null) {
    const newProduct =
      size && price ? getNewProduct(newItem, size, price) : newItem;
    const index = cartItems.findIndex((item) => item.name === newProduct.name);
    let newCartItems;
    newCartItems =
      index === -1
        ? [...cartItems, { ...newProduct, quantity: 1 }]
        : cartItems.map((item) =>
            item.name === newProduct.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
    return {
      payload: newCartItems,
    };
  }
);

export const reduceItem = createAction(
  "cart/reduce",
  function prepare(cartItems, newItem) {
    const newCartItems = cartItems.map((item) =>
      item.name === newItem.name
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    return {
      payload: newCartItems.filter((item) => item.quantity !== 0),
    };
  }
);

export const removeItem = createAction(
  "cart/remove",
  function prepare(cartItems, newItem) {
    const newCartItems = cartItems.filter((item) => item.name !== newItem.name);
    return {
      payload: newCartItems,
    };
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleShowCart: (state, action) => {
      state.showCart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItem, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(reduceItem, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(removeItem, (state, action) => {
        state.cartItems = action.payload;
      });
  },
});

export const { toggleShowCart } = cartSlice.actions;
export default cartSlice.reducer;

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectShowCart = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.showCart
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity, 0)
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
