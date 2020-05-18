import React from 'react';
import { connect } from 'react-redux';

// bring in actiontyep 
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// SVG bag
import { ReactComponent as ShoppingIcon } from '../../assets/cartbag.svg';

import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

//  need the dispatch
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});


export default connect(
  // null, //passing null as default 
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);