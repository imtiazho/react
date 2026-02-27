import React from "react";

const Bottles = ({ bottlePromise }) => {
  const bottle = use(bottlePromise);
  console.log(bottle);
  return <div></div>;
};

export default Bottles;
