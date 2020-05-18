import React from 'react';
import { connect } from 'react-redux';
//126:
//imoort that in from actions:
import { clearItemFromCart,
  addItem,
  removeItem } from '../../redux/cart/cart.actions';


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
//destructuring cartitem: 126
// const CheckoutItem = ({ cartItem, clearItem }) => {
//   const { name, imageUrl, price, quantity } = cartItem;
//   return (
//     <div className='checkout-item'>
//       <div className='image-container'>
//         <img src={imageUrl} alt='item' />
//       </div>
//       <span className='name'>{name}</span>
//       <span className='quantity'>{quantity}</span>
//       <span className='price'>{price}</span>
//       <div className='remove-button' onClick={() => clearItem(cartItem)}>
//         &#10005;
//       </div>
//     </div>
//   );
// };

// 127:                                       //destructure them in 
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        {/* //127 : bind it on the onlick removeItem*/}
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        {/* addItem bind it on the onClick */}
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      {/* bind it on the onclick >>>>> clearItem */}
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
                            //126  //dispatch from redux store
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)), 
  // 127
  //disptch has been modified do dispatch the action/reduce/utils accordingly   
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  //no maptoprops
  null,
  mapDispatchToProps
)(CheckoutItem);
