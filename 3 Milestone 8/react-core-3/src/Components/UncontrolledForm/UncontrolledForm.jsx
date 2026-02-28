import React, { useRef } from "react";

const UncontrolledForm = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" name="email" id="" required />
        <br />
        <input ref={passwordRef} type="password" name="password" id="" required />
        <br />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default UncontrolledForm;
