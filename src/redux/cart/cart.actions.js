import CartActionTypes from './cart.types';

// dont need a payload here
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//ations can have type and payload, payload can be anythin we want to add 
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item

});