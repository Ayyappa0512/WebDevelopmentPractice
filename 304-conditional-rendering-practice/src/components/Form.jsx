import React from "react";

function Form(params) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!params.isRegistered && <input type="password" placeholder="Confirm Password" />}
      <button type="submit">{params.isRegistered?"Login":"Register"}</button>
    </form>
  );
}

export default Form;
