import React, {useState} from "react";


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
            <label htmlFor="email"> Email</label>
            <input value={email} type="email" placeholder="youremail@example.com" id="email" name="email"/>
            <br/>

            <label htmlFor="password"> Password</label>
            <input value={password} type="password" placeholder="**********" id="password" name="password"/>

            <button >Login</button>

            <label > Don't have an account?</label>
            <button onClick={() => props.onFormSwitch('Register')} type="button"> Register</button>

          </form>
      </div>
    );
  };
  
  export default Login;
  