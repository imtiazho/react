import React, { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Brother = () => {
  const [money, setMoney] = use(MoneyContext);
  return (
    <div>
      Brother
      <button onClick={() => setMoney(money + 100)}>Add 100 Taka</button>
    </div>
  );
};

export default Brother;
