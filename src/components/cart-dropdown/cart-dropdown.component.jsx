import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';


//need the custom button
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';


import './cart-dropdown.scss';

//stateless comp
// const CartDropdown = () => (
//   <div className='cart-dropdown'>
//     <div className='cart-items' />
//     <CustomButton>GO TO CHECKOUT</CustomButton>
//   </div>
// );
//destructure cartItems
// const CartDropdown = ({ cartItems }) => (
//   <div className='cart-dropdown'>
//     <div className='cart-items'>
//       {cartItems.map(cartItem => (  //map  it out 
//         <CartItem key={cartItem.id} item={cartItem} />
//       ))}
//     </div>
//     <CustomButton>GO TO CHECKOUT</CustomButton>
//   </div>
// );

const CartDropdown = ({ cartItems, history, dispatch }) => ( 
  //dispatch gets passed in via withRouter we have acces to that dispatch 
  //improved user flow
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

//brought it in from cartItems compoentn, gt it from redux store
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// });
//want the whole state, so can pass it in:
// const mapStateToProps = state => ({
//   cartItems: selectCartItems(state)
// });
// export default connect(mapStateToProps)(CartDropdown);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});


// withRouter higher order componenet, connct must be wrapped around router
export default withRouter(connect(mapStateToProps)(CartDropdown));

// export default CartDropdown;