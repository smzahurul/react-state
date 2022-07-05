import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="reappear">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Learn React User State</p>
        </header>
      </div>
      <div className="container">
        <Counter></Counter>
      </div>
    </div>
  );
}
const ButtonStyles = {
  margin: '10px',
  padding:'10px',
  backgroundColor: 'salmon',
  borderRadius: '5px',

};
const ButtonStyles1 = {
  margin: '10px',
  padding:'10px',
  backgroundColor: 'red',
  borderRadius: '5px',

};
function Counter() {
  const [state, setState] = useState(0);
  const countManager = () => setState(state + 1);
  // const newCount=state + 1;
  return (
    <div>
      <h2>Counte : {state}</h2>
      <button style={ButtonStyles}onMouseMove={() => setState(state + 1)}>Add Now</button>
      <button style={ButtonStyles1} onClick={() => setState(state - 1)}>Delete Now</button>
    </div>
  );
}

export default App;
