import React from 'react';
import './collection-preview.scss';



// need to figure out what we gnna pass in 
// wanna pass in the title in this example 
// also wanna .map() over an items array 
// you dnt know what to pass in the map?:
// its jsut {launches.map(launch=( {launch.mission-name}))}

const CollectionPreview =( {title, items}) => (
    <div className="collection-preview">
        <h1 className='title'> {title.toUpperCase()} </h1>
        <div className="preview"> 
        {
            items
            .filter((item, idx)=> idx < 4)
            .map(item=>(
                <div key={item.id}> {item.name} </div>
            ))}

        </div> 
    </div>    



)


export default CollectionPreview;