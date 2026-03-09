import React from "react";
import Performance from "../Performance/Performance";
import HomeWork from "../HomeWork/HomeWork";

const MiddlePart = ({ eachData }) => {
  return (
    <div className="grid grid-cols-5 mt-6 gap-6">
      <div className="col-span-3">
        <Performance
          performanceData={eachData.performance_tracking}
        ></Performance>
      </div>
      <div className="col-span-2">
        <HomeWork eachData={eachData.home_works}></HomeWork>
      </div>
    </div>
  );
};

export default MiddlePart;
