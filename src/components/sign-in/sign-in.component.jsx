import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2 >I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          {/* <label>Email </label>  */}
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />

          {/* <label> Password </label> */}
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <CustomButton type='submit'> Sign in </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;

// import React from 'react';

// import './sign-in.scss';

// class SignIn extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             email:'',
//             password:''
//         };
        
//     }
   
// }

// handleSubmit = event => {
//     event.preventDefault();
//     this.setState({email:"", password:""});
// };

// handleChange = event => {
//     const {value, name} = event.target;
//     // e.preventDefault();
//     this.setState({ [name]:value});
// };

// render(){ 
// return (
//         <div className="sign-in"> 
//                 <h2> I already have an account </h2>
//                 <span> Siign in with your email and passsword </span>

//             <form onSubmit={this.handleSubmit}>
            
//                 <input 
//                 type="email"
//                 name="email"
//                 value={this.state.email} 
//                 onChange={this.handleChange} 
//                 label="email"
//                 required />
//                  {/* <label>Email </label> */}
//                 <input 
//                 type="password" 
//                 name="password" 
//                 value={this.state.password} 
//                 onChange={this.handleChange}
//                 label="password"
//                 required />
              

//                 <input type="submit" value="Submit Form"/>
//             </form>

            
       

//         </div>
//     )
// }
// export default SignIn;