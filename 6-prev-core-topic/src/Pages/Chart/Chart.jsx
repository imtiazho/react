import React, { use } from "react";

const Chart = ({ stuPromise }) => {
  const data = use(stuPromise);
  
  return <div>Chart : {data.length}</div>;
};

export default Chart;
