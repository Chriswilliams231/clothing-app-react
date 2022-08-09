import { createContext, useReducer, useState } from "react";

import { createAction } from "../utils/reducer/reducer.utils";
import { cartReducer } from "../store/cart/cart.reducer";

export const addCartItem = (cartItems, productToAdd) => {
  // This finds if cartItem contains the same product as productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //   This condictional is if the product is found, then add the quantity by 1
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //   returns a new array with modified cartItems and or a new array
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // finds the cartItem that we want to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  // if the cartItem is equal to the cartToRemove, minus the quantity by 1
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_COUNT: "SET_CART_COUNT",
  SET_CART_TOTAL: "SET_CART_TOTAL",
};

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

// Clears entire items
const clearCartItem = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [{ cartItems, cartCount, cartTotal }, dispatch] = useReducer(
    cartReducer,
    CART_INITIAL_STATE
  );

  const updateCartItemReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    const payload = {
      cartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    };

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  };

  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItemReducer(newCartItems);
  };

  const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemReducer(newCartItems);
  };
  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemToCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
