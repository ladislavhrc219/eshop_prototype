import React from 'react';
import {connect} from 'react-redux';
//need the custom button
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.scss';

//stateless comp
// const CartDropdown = () => (
//   <div className='cart-dropdown'>
//     <div className='cart-items' />
//     <CustomButton>GO TO CHECKOUT</CustomButton>
//   </div>
// );
//destructure cartItems
const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (  //map  it out 
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

//brought it in from cartItems compoentn, gt it from redux store
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);

// export default CartDropdown;