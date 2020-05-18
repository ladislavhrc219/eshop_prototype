import CartActionTypes from './cart.types';
import {addItemToCart, removeItemFromCart} from './cart.utils';
// import CartItem from '../../components/cart-item/cart-item.component';
// import {selectCartItems} from 'cart.selectors';

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
      //127: first write in types, then create actions, update reducer
      case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
      //126: 
      //bind it to checkout component:
      case CartActionTypes.CLEAR_ITEM_FROM_CART:
        
          return {
            ...state,
            cartItems: state.cartItems.filter(
              cartItem => cartItem.id !== action.payload.id
            )
          };
    default:
      return state;
  }
};

export default cartReducer;