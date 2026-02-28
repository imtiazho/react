import React, { useState } from "react";

const ControlledFiled = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("error");
    }
    else setError("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" required />
        <br />
        <input
          type="password"
          onChange={handlePassword}
          defaultValue={password}
          name="password"
          id=""
          required
        />
        <br />
        <input type="submit" value="SUBMIT" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ControlledFiled;
