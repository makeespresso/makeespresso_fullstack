import React from 'react';

// This component handles our register form
const Register = (props) => {

  return (
    <div className="auth-section">
      <h2>Register!</h2>
      <p>New customer</p>
      <p>Create an account to learn more from this coffee community</p>
      <form onSubmit={props.handleRegister} >
        <p>Username:</p>
        <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <p>Email:</p>
        <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
        <p>Password:</p>
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <hr />
        <button>Enter</button>
      </form>
    </div>
  );
}

export default Register;
