import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import {Route} from 'react-router-dom';

import Bloody from './bloody.component';


function App() {
  return (
    <div className="App">


      
    <Route exact={true} path='/' component={HomePage} />
    <Route  path='/bloody' component={Bloody} />

      {/* <HomePage /> */}
      
     
    </div>
  );
}

export default App;
