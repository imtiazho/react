import React, { useContext } from "react";
import Brother from "../Brother/Brother";
import { MoneyContext } from "../Fam";

const Mom = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div className="card">
      Mom : {money}
      <Brother></Brother>
    </div>
  );
};

export default Mom;
