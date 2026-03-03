import React, { createContext, useState } from "react";
import GrandPa from "./GrandPa";
import "./Fam.css";

export const AssetContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
  const special = "Diamond";
  const specialTwo = "Diamond Two";
  const [money, setMoney] = useState(0);

  return (
    <div className="famTree">
      FamilyTree
      <p>Total fam money: {money}</p>
      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={special}>
          <GrandPa special={specialTwo}></GrandPa>
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;
