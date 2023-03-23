import React from 'react';
import './App.css';
import Contact_us from './Components/Pages/Contact_us/Contact_us';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';

function App() {
  return (
    <div className="App">
    <Login/>
    <Register/>
    <Contact_us/>
    </div>
  );
}

export default App;
