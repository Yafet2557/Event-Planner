import React from 'react';
import 'react-phone-input-2/lib/style.css';
import  {useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';




const Register = (props) => {
  const [isRegistered, setIsRegistered] = useState(false);


  const [ inputs, setInputs] = useState({
    first_name: '',
    last_name:'',
    email:'',
    password:'',
    date_of_birth:'',
    phone_number:''});
    const inputChange = (e) => { setInputs({...inputs, [e.target.name]: e.target.value});
    };

  {/* FORM SUBMISSION  */}
  const submitFormButton = (e) =>{
    e.preventDefault(); // helps to not reload page
    setIsRegistered(true);
    CallServer(inputs);
  }

  {/* API CALL  */}
  const CallServer = (inputs) => {
    axios
    .post('http://127.0.0.1:8000/api/register/', inputs)
    .then((response) => {
      console.log('Registration successful:', response.data);
      alert('Registered!!!');
    })
    .catch((error) => {
      console.error('Registration failed:', error);
      alert('Failed');
    });
  }  

  return (
    <div className="HomePage"> 
      <div className="register">
        <h2>Register</h2>
        <form onSubmit={submitFormButton}>
          
        {/* INPUTS BUTTON  */}
          <input type="text" value={inputs.first_name} placeholder="First Name" required name="first_name" onChange={inputChange}/>
          <br/>
          <input type="text" value={inputs.last_name} placeholder="Last Name" required name="last_name" onChange={inputChange}/>
          <br/>
          <input type="text" value={inputs.phone_number}  placeholder="#Phone number" required  name="phone_number" onChange={inputChange}/>
          <br/>
          <input type="text" value={inputs.date_of_birth} placeholder="Date Of Birth" required  name="date_of_birth" onChange={inputChange}/>
          <br/>
          <input type="email" value={inputs.email} placeholder="Email@" required name="email" onChange={inputChange}/>
          <br/>
          <input type="password" value={inputs.password} placeholder="Password" required name="password" onChange={inputChange}/>
          <br/>

        {/* REGISTER */}
        { isRegistered===false && <button type="submit">Register</button>}
        {isRegistered && <span id="confirmation">You're signed up</span>} <br/>
        </form>



        {/* LOGIN BUTTON  */}
        <label > Already have an account?</label>
        {/* <button onClick={() => props.onFormSwitch('login')} type="button"> Login</button> */}
        <button> <Link to="/Login">Login</Link> </button>
        <br/>
      </div>
    </div>
  );
};

export default Register;