import { createSelector } from 'reselect';

//input selector, function that gets the whole state, returns a slice of it, 
// gonna pull state .cart
const selectCart = state => state.cart;

//this uses the createSelector, takes two args, second arg is a fucntion,
// 
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);


export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);


export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);