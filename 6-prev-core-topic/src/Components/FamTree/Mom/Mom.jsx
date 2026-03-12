import React, { useContext } from "react";
import Brother from "../Brother/Brother";
import { MoneyContext } from "../Fam";

const Mom = () => {
  const [taka, setTaka] = useContext(MoneyContext);
  return (
    <div className="card">
      Mom : {taka}
      <Brother></Brother>
    </div>
  );
};

export default Mom;
