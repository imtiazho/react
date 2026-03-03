import { useState } from "react";

const useInputFiled = (defaultValue) => {
  const [filedValue, setFiledValue] = useState(defaultValue);

  const handleFiledOnChange = (e) => {
    setFiledValue(e.target.value);
  };

  return [filedValue, handleFiledOnChange];
};

export default useInputFiled;
