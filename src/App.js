import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './homepage.component.jsx';
import Bloody from './bloody.component'

function App() {
  return (
    <div className="App">
      <Bloody />
      {/* <h1> Helllo Function Components </h1> */}
      <HomePage />
      
     
    </div>
  );
}

export default App;
