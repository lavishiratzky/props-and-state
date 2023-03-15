import React from 'react';
import './App.css';
import Parent from './Components/Lifecycle/Parent/Parent';
import Grade from './Components/School/Grade/Grade';
function App() {

 
  return (
    <div className="App">
      <Grade name={'orel'} grade={100}/>
      <Grade name={'orel'} grade={67}/>
      <Grade name={'orel'} grade={89}/>
     <Grade name={'lavi'} grade={10} /> 
<Parent/>
    </div>
  );
}

export default App;
