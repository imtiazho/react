import useInputFiled from "./Hooks/useInputFiled";

const HookForm = () => {
  const [name, handleName] = useInputFiled("");
  const [password, handlePassword] = useInputFiled("");
  const handleForm = (e) => {
    e.preventDefault();
  };

  console.log(name, password);
  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          defaultValue={name}
          onChange={handleName}
          type="text"
          name="name"
        />{" "}
        <br />
        <input
          defaultValue={password}
          onChange={handlePassword}
          type="email"
          name="email"
          id=""
        />{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
