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
//as abouve: 
// need to export out
//126: wanna meka a new action that dispatches the CLEAR_ITEMFROM_CART
//gets an item as a property
export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
//need to update reducer so gets the appropriate array
