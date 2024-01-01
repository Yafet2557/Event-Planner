import './index';
import React, { useState } from 'react';
import HelloWorld from './HelloWorld';
import Navbar from './navbar';
import Login from './login';
import Register from './Register';
import Home from "./Home"

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const toggleForm = (formName) => {
    setCurrentPage(formName);

  }


  return (
    /*<div className='content'>
      {
        currentPage === 'login' ? <Login onFormSwitch = {toggleForm}/> : <Register onFormSwitch = {toggleForm}/>
      }
    </div>
    */
   <App/>
  );
}

export default App;