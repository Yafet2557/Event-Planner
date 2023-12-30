import './index';
import React from 'react';
import HelloWorld from './HelloWorld';
import Navbar from './navbar';
import Login from './login';
import Register from './Register';

function App() {
  return (
    <div>
      <Navbar/>
      <Login/>
      <Register/>
      <HelloWorld/>
    </div>
  );
}

export default App;