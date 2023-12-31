import './index';
import React, { useState } from 'react';
import HelloWorld from './HelloWorld';
import Navbar from './navbar';
import Login from './login';
import Register from './Register';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const toggleForm = (formName) => {
    setCurrentPage(formName);

  }


  return (
    <div className='content'>
      {
        currentPage === 'login' ? <Login onFormSwitch = {toggleForm}/> : <Register onFormSwitch = {toggleForm}/>
      }
    </div>
  );
}

export default App;