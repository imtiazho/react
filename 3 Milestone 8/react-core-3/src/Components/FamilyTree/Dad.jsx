import React, { use } from "react";
import Myself from "./Myself";
import Brother from "./Brother";
import Sister from "./Sister";
import { MoneyContext } from "./FamilyTree";

const Dad = ({special}) => {
    const [money, setMoney] = use(MoneyContext);
  return (
    <div>
      Dad got {money} taka
      <section>
        <Myself special={special}></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dad;
