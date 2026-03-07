import React, { useState } from "react";
import ClassCard from "../ClassCard/ClassCard";

const TodayClass = ({ eachData }) => {
  const getTodayDate = () => new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(getTodayDate());
  return (
    <div className="bg-[#fff] shadow-[0px_4.4px_12px_-1px_rgba(222,222,222,0.3607843137)] border-[0.5px] border-[#ddd] rounded pt-[1rem] pr-[1.25rem] pb-[1rem] pl-[1.25rem]">
      <div className="flex justify-between items-center">
        <p className="text-[18px] font-[600] text-[#202C4B]">Today’s Class</p>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="text-[14px]"
          type="date"
          name="date"
          id=""
        />
      </div>

      <div className="border my-6 border-[#ddd]"></div>

      <div className="flex flex-col gap-4">
        {eachData.todays_classes.schedule.map((eachSchedule) =>
          <ClassCard eachSchedule={eachSchedule}></ClassCard>
        )}
      </div>
    </div>
  );
};

export default TodayClass;
