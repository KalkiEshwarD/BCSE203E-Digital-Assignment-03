import React from "react";
import { CounterUsingFunction, CounterUsingClass } from "./components/button";

function App() {
  return (
    <div>
      <CounterUsingFunction className='counter-box'/>
      <div style={{padding: '10px'}} class='spacing-div'></div>
      <CounterUsingClass className='counter-box' />
    </div>
  );
}

export default App;
