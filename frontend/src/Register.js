import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Register = () => {
  return (
    <div className="register">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="First Name" />
        <br/>
        <input type="text" placeholder="Last Name" />
        <br/>
        <input type="text" placeholder="Email@" />
        <br/>
        <input type="text" placeholder="#Phone number" />
        <br/>
      </form>

      <button type="submit">Register</button>
    </div>
  );
};

export default Register;