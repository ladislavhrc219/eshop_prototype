import React from 'react';

import './cart-item.scss';

//fucntinal comp
//destructure item,off of it the imgurl price name quantity
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
  
export default CartItem;