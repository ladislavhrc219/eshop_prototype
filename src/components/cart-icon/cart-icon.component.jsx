import React from 'react';
import { connect } from 'react-redux';

// bring in actiontyep 
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// SVG bag
import { ReactComponent as ShoppingIcon } from '../../assets/cartbag.svg';

import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

//  need the dispatch
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  null, //passing null as default 
  mapDispatchToProps
)(CartIcon);