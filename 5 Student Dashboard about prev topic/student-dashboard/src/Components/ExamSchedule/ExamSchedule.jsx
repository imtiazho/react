import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { IoAddCircleOutline } from "react-icons/io5";
import ExamCard from "../ExamCard/ExamCard";

const ExamSchedule = ({ eachData }) => {
  const [selected, setSelected] = useState();

  return (
    <div className="bg-[#fff] shadow-[0px_4.4px_12px_-1px_rgba(222,222,222,0.3607843137)] border-[0.5px] border-[#ddd] rounded pt-[1rem] pr-[1.25rem] pb-[1rem] pl-[1.25rem] w-full">
      <div className="flex justify-between items-center">
        <p className="text-[17px] font-[600] text-[#202C4B]">Schedules</p>
        <div className="flex gap-1 items-center text-[14px] text-[#3D5EE1]">
          <IoAddCircleOutline /> Add New
        </div>
      </div>

      <div className="border my-6 border-[#ddd]"></div>

      <calendar-date className="cally bg-base-100 w-full rounded-box">
        <svg
          aria-label="Previous"
          className="fill-current size-4"
          slot="previous"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
        </svg>
        <svg
          aria-label="Next"
          className="fill-current size-4"
          slot="next"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
        </svg>
        <calendar-month></calendar-month>
      </calendar-date>

      <p className="text-[15px] mb-3 mt-8 font-[600] tracking-wide">Exams</p>

      <div className="flex flex-col gap-3">
        {eachData.upcoming_exams.map((eachExam) => (
          <ExamCard eachExam={eachExam}></ExamCard>
        ))}
      </div>
    </div>
  );
};

export default ExamSchedule;
