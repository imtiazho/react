import React, { useEffect, useState } from "react";

const LoadDataWithUseEffect = () => {
  const [bottle, setBottle] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/imtiazho/JsonData/refs/heads/main/bottles.json",
    )
      .then((res) => res.json())
      .then((data) => setBottle(data));
  }, []);
  console.log(bottle);

  return <div>LoadDataWithUseEffect</div>;
};

export default LoadDataWithUseEffect;
