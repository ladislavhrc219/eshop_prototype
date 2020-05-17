import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';

import { connect } from 'react-redux';

import CartIcon from './../cart-icon/cart-icon.component';
import CartDropDown from './../cart-dropdown/cart-dropdown.component';

import {auth} from './../../firebase/firebase.utils';

// destructute currentUser property
const Header = ({currentUser, hidden}) => (
    <div className='header'>
         <Link className="logo-container" to="/">
            <Logo className="logo" />
         </Link>
         <div className="options ">
            <Link className="option" to="/shop"> 
                SHOP
            </Link>
            <Link className='option' to="/shop">
                CONTACT
            </Link>
            {
            currentUser ? 
            (<div className='option' onClick={()=> auth.signOut()}> SIGN OUT </div>)
            :
            (<Link className='option' to='/signin'> SIGN IN </Link>)
            }
            <CartIcon/>
            
         </div>
         { //ussing ternary operator
             hidden ? null :
         <CartDropDown />}
    </div>
)


//need to destructure the state 
// from the sate want user:currentUser
                            //instead of state
const mapStateToProps = ({user: {currentUser}, cart: {hidden} }) => ({
    currentUser,
     hidden
  });


export default connect (mapStateToProps) (Header);