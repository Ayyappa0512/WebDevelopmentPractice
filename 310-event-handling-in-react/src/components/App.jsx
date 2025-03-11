import React, { useState } from "react";


function App() {

const [color, setColor] = useState("white");
const [isMouseOver, setMouseOver] = useState(false);
const [headingText, setHeadingText] = useState("");
const [name, setName] = useState("");

function handleHeading(event){
  setHeadingText(name);
  event.preventDefault();
}

function handleMouseover(){
    setMouseOver(true);
}

function handleMouseOut(){
  setMouseOver(false);
}

function handleChange(event){
    setName(event.target.value);
}

// function handleMouserOver(){
//   setColor("black");
// }

// function handleMouseoverOut(){
//   setColor("white");
// }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleHeading}>
      <input onChange = {handleChange} type="text" placeholder="What's your name?" />
      {/* <button style={{backgroundColor:color}} onMouseOver={handleMouserOver} onMouseOut={handleMouseoverOut} onClick={handleHeading} >Submit</button> */}
      <button style={{backgroundColor:isMouseOver?"black":"white"}} 
      type="submit"
      onMouseOver={handleMouseover} 
      onMouseOut={handleMouseOut} >Submit</button>
      </form>
    </div>
  );
}

export default App;