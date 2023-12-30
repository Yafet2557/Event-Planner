import React from 'react';
import HelloWorld from './HelloWorld';
import Navbar from './navbar';
import './index';
import Login from './login';

function App() {
  return (
    <div>
      <Navbar/>
      <Login />
      <HelloWorld />
    </div>
  );
}

export default App;