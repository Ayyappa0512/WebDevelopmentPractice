import React from "react";
import Form from "./Form";
import RegisterForm from "./RegisterForm";
import LoginForm  from "./LoginForm"

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered?<h1>Login</h1>:<h1>Signup</h1>}
      {/* {userIsRegistered?<LoginForm />:<RegisterForm />} */}
      <Form isRegistered = {userIsRegistered}/>
    </div>
  );
}

export default App;
