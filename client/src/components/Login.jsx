import React from 'react';
import { Link } from 'react-router-dom';

// This component handles our login form and has a link to the register form
const Login = (props) => {

  return (
    <div className="login-page">
      <div className="third-width">
        <img className="welcome-img" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Welcome Image"></img>
      </div>

      <div className="third-width">

        <h1>Welcome Back!</h1>
        <p>Log into your account below</p>
        <form onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin();
        }} >
          <p>Username:</p>
          <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
          <p>Password:</p>
          <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
          <br></br>
          <button>log in</button>
        </form>
      </div>
      <div className="third-width">
        <h1>New to makeespresso?</h1>
        <p>Create an account to join to the coffee community.</p>

        <h1><Link to="/register">Register</Link></h1>
      </div>
    </div>
  );
}

export default Login;

