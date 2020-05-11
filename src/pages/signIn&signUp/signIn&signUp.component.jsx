import React from 'react';

import SignIn from './../../components/sign-in/sign-in.component.jsx';
import SignUp from './../../components/sign-up/sign-up.component.jsx';


import './signIn&signUp.scss';

const SignInSignUp =()=>(

    <div className='sign-in-and-sign-up'>
        {/* SIGN IN */}

        <SignIn />
        <SignUp />

    </div>
)

export default SignInSignUp;