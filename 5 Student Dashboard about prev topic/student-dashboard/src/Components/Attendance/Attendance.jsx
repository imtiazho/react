import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Chart from "../Chart/Chart";

const Attendance = ({ eachData }) => {
  return (
    <div className="bg-[#fff] shadow-[0px_4.4px_12px_-1px_rgba(222,222,222,0.3607843137)] border-[0.5px] border-[#ddd] rounded pt-[1rem] pr-[1.25rem] pb-[1rem] pl-[1.25rem]">
      <div className="flex justify-between items-center">
        <p className="text-[18px] font-[600] text-[#202C4B]">Attendance</p>
        <div>
          <select
            defaultValue="This Week"
            className="select border border-[#ddd] focusDisable"
          >
            <option>This Week</option>
            <option>Last Week</option>
            <option>Last Month</option>
          </select>
        </div>
      </div>
      {/* #3D5EE1 */}
      <div className="border my-6 border-[#ddd]"></div>
      <p className="text-[#6A7287] text-[14px] font-[500] leading-[1] flex gap-1 items-center">
        {" "}
        <FaRegCalendarAlt size={13} className="text-[#3D5EE1]" /> No of total
        working days{" "}
        <span className="text-[#000] text-[15px] font-bold">
          {eachData.attendance_summary.total_working_days} Days
        </span>
      </p>

      <div className="border border-[#ddd] p-4 mt-6 grid grid-cols-3">
        <div className="text-center border-r border-[#E9EDF4]">
          <p className="mb-[.25rem] text-[14px] text-[#6A7287]">Present</p>
          <p className="text-black font-[600]">
            {eachData.attendance_summary.metrics.present}
          </p>
        </div>
        <div className="text-center border-r border-[#E9EDF4]">
          <p className="mb-[.25rem] text-[14px] text-[#6A7287]">Absent</p>
          <p className="text-black font-[600]">
            {eachData.attendance_summary.metrics.absent}
          </p>
        </div>
        <div className="text-center">
          <p className="mb-[.25rem] text-[14px] text-[#6A7287]">Half Day</p>
          <p className="text-black font-[600]">
            {eachData.attendance_summary.metrics.half_day}
          </p>
        </div>
      </div>

      <Chart eachData={eachData.attendance_summary.metrics}></Chart>
    </div>
  );
};

export default Attendance;
