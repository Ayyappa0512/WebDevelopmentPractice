import React from "react";

var isLogin = false;

// function IsLoging() {
//   if (login) {
//     return <h1>Hello Anil</h1>;
//   } else {
//     return (<div><h1>Please Login</h1>{<LoginForm />}</div>)
//   }
// };


// function toggel(){
//   var ele = $("#password").getAttribute("type");
//   return {this:ele === "password"?$("#password").setAttribute("type","text"):$("#password").setAttribute("type","password")}
// }

function LoginForm() {
  return (
    <form className="form">
      <InputTag type = "text" name="user name" />
      <div>
      <InputTag type = "password" name="password" id="password" />
      {/* <button onClick={toggel} type = "toggle" /> */}
      </div>
      <button type="submit">Login</button>
    </form>);
};

function InputTag(params){
  return(<input type={params.type} placeholder={params.name} id ={params.id} />);
}

function App() {
  return (
    <div className="container">
      {isLogin ? <h1>Hello Anil</h1>: <div><h1>Login to React</h1><LoginForm /></div>}
      
    </div>
  );
}

export default App;
