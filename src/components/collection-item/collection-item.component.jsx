import React from 'react';

import './collection-item.scss';

//we gonna pass in id, name. price. imageurl
const CollectionItem = ({id, name, price, imageUrl}) => (
    
    <div className="collection-item">

        <div className="image"
        style={{backgroundImage:`url(${imageUrl})`}}>

        <div className="collection-footer">

    <span className="name"> {name} </span>
    <span className="price"> {price} </span>
        </div>
        </div>
    </div>
)



export default CollectionItem;