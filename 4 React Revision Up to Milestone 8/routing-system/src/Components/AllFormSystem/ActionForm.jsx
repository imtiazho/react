import React from "react";

const ActionForm = () => {
  const handleForm = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };

  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="name" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default ActionForm;
