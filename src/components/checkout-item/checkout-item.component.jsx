import React from 'react';

import { connect } from 'react-redux';
//126:
//imoort that in from actions:
import { clearItemFromCart } from '../../redux/cart/cart.actions';


import './checkout-item.styles.scss';

//destructure cartitem, then pass it down into the cpmponenet. destructuring
// const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
//   <div className='checkout-item'>
//     <div className='image-container'>
//       <img src={imageUrl} alt='item' />
//     </div>
//     <span className='name'>{name}</span>
//     <span className='quantity'>{quantity}</span>
//     <span className='price'>{price}</span>
//     <div className='remove-button'>&#10005;</div>
//   </div>
// );
//destructuring cartitem: 
const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
                            //126  //dispatch from redux store
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(
  //no maptoprops
  null,
  mapDispatchToProps
)(CheckoutItem);
