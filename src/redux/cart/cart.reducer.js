import CartActionTypes from './cart.types';
import {addItemToCart} from 'cart.utils';

// need initial state
const INITIAL_STATE = {
  hidden: true,
  //collecting items to the cart
  //empty array default value 
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM: 
      return{
        ...state,
        //spreading in our array values, and additional values appearing 
        // cartItems: [...state.cartItems, action.payload] //item coming in goin to be the payload on our acton
        // replacing the above code with:
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;