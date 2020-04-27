import React from 'react';

import SHOP_DATA from './shop.data.js';
import './shop.scss';

import CollectionPreview from './../../components/collection-preview/collection-preview.jsx';


// this component holds the state - so its class component 
//

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: {
                SHOP_DATA
            }
        }
    }


    render () {
        // const {collections} = this.state;
        return (<div className="shop-page"> 
                {SHOP_DATA.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))}
            </div>);
    }
}

export default ShopPage;
