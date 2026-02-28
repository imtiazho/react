import React, { use } from "react";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  return (
    <div>
      {pricingData.map((eachData) => (
        <p>{eachData.tier}</p>
      ))}
    </div>
  );
};

export default PricingOptions;
