import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  var [time, setTime] = useState(now);
  function updateTime(){
    let newTime =new Date().toLocaleTimeString();
    console.log("new time", newTime);
    setTime(newTime);
    // document.querySelector('h1').innerText = setTime;
  }
  console.log(time);
  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
