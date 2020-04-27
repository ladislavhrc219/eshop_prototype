import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import {Switch, Route} from 'react-router-dom';

// import CollectionPreview from './components/collection-preview/collection-preview.jsx';

import ShopPage from './pages/shop/shop.component.jsx';


function App() {
  return (
    <div className="App">

    <Switch>

        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />

      
    </Switch> 
      
   
      {/* <HomePage /> */}
      
     
    </div>
  );
}

export default App;
