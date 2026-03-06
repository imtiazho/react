import React, { useRef } from "react";

const UncontrolledForm = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");

  const handleForm = (e) =>{
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <input ref={nameRef} type="text" name="name" /> <br />
        <input ref={emailRef} type="email" name="email" id="" /> <br />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default UncontrolledForm;
