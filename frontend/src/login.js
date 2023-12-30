const Login = () => {
    return (
      <div className="login">
          <h2>Login</h2>
          <form>
            <label>
              Username:
              <input type="text" />
            </label>
            <br/>

            <label>
              Password :
              <input type="password" />
            </label>
            <br />
            
            <button type="submit">Login</button>
            <button type="submit">Sign Up</button>

          </form>
      </div>
    );
  };
  
  export default Login;
  