import React from 'react';


import { connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.actions';

import './collection-item.scss';

//we gonna pass in id, name. price. imageurl
const CollectionItem = ({item, addItem}) => {
    const  { name, price, imageUrl} = item;
    return (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>

    <CustomButton onClick={()=>addItem(item)}  inverted> ADD to CART </CustomButton>
  </div>
)};

 
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)) //will dispatch the addITem action creator passong the item in
  }); 
  //when we call this function it will receive the item as a property
  //pass it into the addItem action creator
  
  export default connect(
    null,
    mapDispatchToProps
  )(CollectionItem);

// export default CollectionItem;