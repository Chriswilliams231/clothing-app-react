import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils'

export const setIsCartOpen = (Boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, Boolean);

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

const clearCartItem = (cartItems, cartItemToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const addItemToCart = (cartItems, product) => {
    const newCartItems = addCartItem(cartItems, product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
