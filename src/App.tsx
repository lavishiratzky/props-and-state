import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grade from './Components/School/Grade/Grade';

function App() {
  return (
    <div className="App">
     <Grade name={'orel'} grade={100}/> 
     <Grade name={'lavi'} /> 
    </div>
  );
}

export default App;
