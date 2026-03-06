import React, { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleName = (e) => {
    console.log(e.target.value);
  };
  const handlePassword = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <form>
        <input onChange={handleName} type="text" name="name" /> <br />
        <input onChange={handlePassword} type="email" name="email" id="" />{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledForm;
