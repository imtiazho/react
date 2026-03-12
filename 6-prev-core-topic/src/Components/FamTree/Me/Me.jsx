import React, { useContext, useEffect } from "react";
import { MoneyContext } from "../Fam";
import { getStoredData, minusFromLocalS, setItem } from "../../../Utilies/Ls";

const Me = () => {
  const [taka, setTaka] = useContext(MoneyContext);

  const handleSetTaka = () => {
    const storedData = getStoredData();
    setItem(storedData + 10);
    setTaka(storedData + 10);
  };

  const handleMinus = () => {
    const storedData = getStoredData();
    setTaka(storedData - 10);
    minusFromLocalS(storedData - 10);
  };

  useEffect(() => {
    const storedData = getStoredData();
    setTaka(storedData);
  }, [taka, setTaka]);

  return (
    <div className="card">
      Me : {taka}
      <button
        onClick={handleSetTaka}
        className="btn w-2xl mx-auto bg-amber-500"
      >
        Add 10 taka
      </button>{" "}
      <br />
      <button
        onClick={handleMinus}
        className="btn w-2xl mx-auto bg-amber-500"
      >
        Add 10 taka
      </button>
    </div>
  );
};

export default Me;
