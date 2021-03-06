import React from 'react';
import MenuItem from './../menu-item/menu-item.component.jsx';

import './directory.scss';

class Directory extends React.Component {
    constructor (){
        super();

        this.state = {
            sections: [
                {
                  title: 'Iphone',
                  // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'Samsung',
                  // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'Pixel',
                  // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'Apple iOS',
                  // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'Google Android',
                  // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  
                  linkUrl: 'shop/mens'
                }]
        }
    }

    render() {
      // TODO destructuring
      // !const {sections} = this.state;
        return (

            <div className="directory-menu"> 
            {
              // ! destructuring works!!!! 
                // !sections.map(({id, ...otherSectionProps}) => (
                this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
            
            </div>


        )
    }
}

export default Directory;