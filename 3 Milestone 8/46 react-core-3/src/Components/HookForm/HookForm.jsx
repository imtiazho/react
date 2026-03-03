import React from "react";
import useInputFiled from "../Hooks/useInputFiled";

const HookForm = () => {
  const [name, handleNameOnChange] = useInputFiled("");
  const [email, handleEmailOnChange] = useInputFiled("");

  const handleSubmit = (e) => {
    e.defaultValue();
  };
  
  return (
    <div>
      <form action={handleSubmit}>
        <input defaultValue={name} onChange={handleNameOnChange} type="text" />
        <br />
        <input
          defaultValue={email}
          type="email"
          name="email"
          onChange={handleEmailOnChange}
          id=""
        />
        <br />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default HookForm;
