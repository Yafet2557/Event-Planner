import './index';
import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
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
      <>
   <App/>

      </>
  );
}

export default App;