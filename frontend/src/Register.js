import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Register = () => {
  return (
    <div className="register">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="First Name" required/>
        <br/>
        <input type="text" placeholder="Last Name" required/>
        <br/>
        <input type="text" placeholder="#Phone number" required/>
        <br/>
        <input type="text" placeholder="Date Of Birth" required/>
        <br/>
        <input type="email" placeholder="Email@" required/>
        <br/>
        <input type="password" placeholder="Password" required/>
        <br/>
        <input type="password" placeholder="Confirm Password" required/>
      </form>

      <button type="submit">Register</button>
    </div>
  );
};

export default Register;