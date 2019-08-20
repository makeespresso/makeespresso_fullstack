import React from 'react';

// This component handles our register form
const Register = (props) => {

  return (
    <div className="register-container">
      <div className="mid-width, register-image">
        <img src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="Register Image" />
      </div>
      {/* <div className="create-account-section"> */}
      <div className="mid-width">
        <h2>Create an account</h2>
        <form onSubmit={props.handleRegister} >
          <p>Username:</p>
          <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
          <p>Email:</p>
          <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
          <p>Password:</p>
          <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
<br></br>
        <button>Enter</button>
        </form>
    </div>
    </div >
  );
}

export default Register;
