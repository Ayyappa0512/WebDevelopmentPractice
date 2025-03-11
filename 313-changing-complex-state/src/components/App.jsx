import React, { useState } from "react";

function App() {
  // const [fullName, setFullName] = useState({
  //   fName:"",
  //   lName:""
  // });

  // function handlechange(event){
  //   console.log(event.target);
  //   var {value, name} = event.target;
  //   console.log("value: ",value, "name", name)
  //   setFullName((previousValue)=>{
  //     if(name === "fName"){
  //       return {fName:value, lName:previousValue.lName};
  //     }else{
  //       return {fName:previousValue.fName, lName:value};
  //     }
  //   });
  // }

  const [contact, setContact] = useState({
    fName:"",
    lName:"",
    email:""
  });

  function handlechange(event){
    console.log(event.target);
    var {value, name} = event.target;
    console.log("value: ",value, "name", name)
    setContact((prevValue)=>{
      if(name === "fName"){
        return {fName:value, lName:prevValue.lName, email:prevValue.email};
      }else if(name === "lName"){
        return {fName:prevValue.fName, lName:value, email:prevValue.email};
      }else if(name === "email"){
        return {fName:prevValue.fName, lName:prevValue.lName, email:value};
      }
    });
  }

  // function handleLNameChange(event){
  //   setLName(event.target.value);
  // }

  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handlechange} name="fName" placeholder="First Name" value={contact.fName} />
        <input onChange={handlechange} name="lName" placeholder="Last Name" value={contact.lName} />
        <input onChange={handlechange} name="email" placeholder="email" value={contact.email} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
