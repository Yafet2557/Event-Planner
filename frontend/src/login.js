import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Login = (props) => {

  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');


  const handleButton = (e) =>{
    e.preventDefault(); // helps to not dont reload page 
  }

    return (
      
      <div className="register">
          <h2>Login</h2>
          <form onSubmit={handleButton}>

          <FontAwesomeIcon icon={faEnvelope} bounce size="sm" style={{color: "#2d59a4",}} />
            <label htmlFor="email"> Email</label>
            <input  type="email" placeholder="youremail@example.com" id="email" name="email"/>
            <br/>


            <FontAwesomeIcon icon={faLock} bounce size="sm" style={{color: "#2d59a4",}} />
            <label htmlFor="password"> Password</label>
            <input type="password" placeholder="**********" id="password" name="password"/>

            <button >Login</button>
            <i class="fa-solid fa-lock"></i>
            <label > Don't have an account?</label>
            <button onClick={() => props.onFormSwitch('Register')} type="button"> Register</button>
            <br/>
          </form>
      </div>
    );
  };
  
  export default Login;
  