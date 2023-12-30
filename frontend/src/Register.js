import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import  {useState} from "react";


const Register = (props) => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState (''); 
  const [number, setNumber] = useState ('');
  const [name, setName] = useState ('');


  const handleButton = (e) =>{
    e.preventDefault(); // helps to not dont reload page 
  }

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleButton}>
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
      <label > Already have an account?</label>
      <button onClick={() => props.onFormSwitch('login')} type="button"> Login</button>
      <br/>
    </div>
  );
};

export default Register;