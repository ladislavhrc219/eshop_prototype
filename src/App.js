import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

// import CollectionPreview from './components/collection-preview/collection-preview.jsx';

import ShopPage from './pages/shop/shop.component.jsx';
import HomePage from './pages/homepage/homepage.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInSignUp from './pages/signIn&signUp/signIn&signUp.component';
import Checkout from  './pages/checkout/checkout.component';


import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  //changed function comp to class comp
  


  unsubscribeFromAuth = null; 

  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
  //     this.setState({currentUser: user});

  //     console.log(user);
  //   });
  // }
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      setCurrentUser({ currentUser: userAuth });
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
            <Route exact path='/checkout' component={Checkout} />
            {/* <Route path='/signin' component={SignInSignUp} /> */}
            <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInSignUp />
              )
            }
          />
        </Switch> 
        
      </div>
    );

  }
  
}

//redirect component 
//need currentUser from redux State
// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

