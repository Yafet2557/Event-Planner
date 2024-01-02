import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Login = (props) => {

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });


  const inputChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleButton = (e) => {
    e.preventDefault(); // helps to not dont reload page 
    LoginApi(loginInfo);
  }

    const LoginApi = (loginData) => {
      axios
      .post('http://127.0.0.1:8000/api/login/', loginData)
      .then((response) => {
        console.log('Login successful:', response.data);
        alert('Logged in!!!');
      })
      .catch((error) => {
        console.error('Login failed:', error);
        alert('Login failed');
      });
    }  

  return (

    <div className="HomePage"> 
      <div className="register">
        <h2>Login</h2>
        <form onSubmit={handleButton}>

          <FontAwesomeIcon icon={faEnvelope} bounce size="sm" style={{ color: "#2d59a4", }} />
          <label htmlFor="email"> Email</label>
          <input type="email" placeholder="youremail@example.com" id="email" name="email" required value={loginInfo.email} onChange={inputChange} />
          <br />


          <FontAwesomeIcon icon={faLock} bounce size="sm" style={{ color: "#2d59a4", }} />
          <label htmlFor="password"> Password</label>
          <input type="password" placeholder="**********" id="password" name="password" required value={loginInfo.password} onChange={inputChange} />

          <button type="submit" >Login</button>
          <i class="fa-solid fa-lock"></i>
          <label > Don't have an account?</label>
          { /* <button onClick={() => props.onFormSwitch('Register')} type="button"> Register</button> */}
          <button> <Link to="/sign-up">Register</Link> </button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Login;
