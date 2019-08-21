import React from 'react';

// This component handles our register form
const Register = (props) => {

  return (
    <div className="register-container">

      <img className="register-image" src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="Register Image" />

      <div style={{ width: "30%", height: "50%", backgroundColor: "rgba(241, 236, 232)", zIndex: "5" }} className="edit-page">
        <h2>Create an account</h2>

        <form onSubmit={props.handleRegister} >
          <span><b>Username:</b></span>
          <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
          <span><b>Email:</b></span>
          <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
          <span><b>Password:</b></span>
          <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
          <br></br>
          <button className="input-button" >Enter</button>
        </form>

      </div>
    </div>
  );
}

export default Register;
