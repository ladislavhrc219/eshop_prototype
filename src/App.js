import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';

// import CollectionPreview from './components/collection-preview/collection-preview.jsx';

import ShopPage from './pages/shop/shop.component.jsx';
import HomePage from './pages/homepage/homepage.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInSignUp from './pages/signIn&signUp/signIn&signUp.component';

import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  //changed function comp to class comp
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }


  unsubscribeFromAuth = null

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render(){

    return (
      <div className="App">
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInSignUp} />
        </Switch> 
        
      </div>
    );

  }
  
}

export default App;
