import { useState } from "react";
import React from "react";



// function increase(){
//   setCount(count+1);
// }

function App() {
  const [count, setCount] = useState(0);
  console.log(count);
  // function increase(){
  //   setCount(count+1);
  // }
  // function decrease(){
  //   setCount(count-1);
  // }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={() => setCount(count-1)}>-</button>
    </div>
  );
}

export default App;
