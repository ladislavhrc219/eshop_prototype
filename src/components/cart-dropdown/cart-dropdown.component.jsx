import React from 'react';

//need the custom button
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.scss';

//stateless comp
const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;