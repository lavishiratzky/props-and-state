import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grade from './Components/School/Grade/Grade';

function App() {

 
  return (
    <div className="App">
      <Grade name={'orel'} grade={100}/>
      <Grade name={'orel'} grade={67}/>
      <Grade name={'orel'} grade={89}/>
     <Grade name={'lavi'} grade={10} /> 
    </div>
  );
}

export default App;
