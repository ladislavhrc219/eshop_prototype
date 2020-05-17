import CartActionTypes from './cart.types';

// dont need a payload here
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});