import {combineReducers} from 'redux';


//import the relevant reducers otjerwise throws an error
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers ({
    user: userReducer,
    cart: cartReducer,
});