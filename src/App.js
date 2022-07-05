import React, { useState } from 'react';  
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="reappear">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Learn React User State
        </p>       
        </header>
      </div>
      <div className="container">
      <Counter></Counter>
      </div>
    </div>
    
  );
}
function Counter() {
const [state, setstate] = useState(0);
const countManager=()=>setstate(state +1);
  // const newCount=state + 1;
  

  return(
    <div>
      <h2>Counte : {state}</h2>
      <button onClick={()=>setstate(state +1)}>Add Now</button>
      <button onClick={()=>setstate(state -1)}>Delete Now</button>
    </div>
  )
}

export default App;
