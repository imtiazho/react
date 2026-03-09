import React from "react";
import Profile from "../Profile/Profile";
import TodayClass from "../TodayClass/TodayClass";
import Attendance from "../Attendance/Attendance";
import ExamSchedule from "../ExamSchedule/ExamSchedule";
import { BsCalendar3, BsCashStack, BsClipboardCheck, BsPersonCheck } from "react-icons/bs";

const UpperPart = ({ eachData }) => {
  const actions = [
    {
      title: "Pay Fees",
      icon: <BsCashStack className="text-white text-md" />,
      bgColor: "bg-blue-600",
      borderColor: "border-b-blue-600",
    },
    {
      title: "Exam Result",
      icon: <BsClipboardCheck className="text-white text-md" />,
      bgColor: "bg-green-600",
      borderColor: "border-b-green-600",
    },
    {
      title: "Calendar",
      icon: <BsCalendar3 className="text-white text-md" />,
      bgColor: "bg-yellow-500",
      borderColor: "border-b-yellow-500",
    },
    {
      title: "Attendance",
      icon: <BsPersonCheck className="text-white text-md" />,
      bgColor: "bg-slate-800",
      borderColor: "border-b-slate-800",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <div>
              <Profile eachData={eachData}></Profile>
            </div>
            <div>
              <TodayClass eachData={eachData}></TodayClass>
            </div>
          </div>
          <div>
            <Attendance eachData={eachData}></Attendance>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-4 gap-6">
          {actions.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 bg-white p-6 rounded-md shadow-[0px_4.4px_12px_-1px_rgba(222,222,222,0.36)] border-b-2 ${item.borderColor} hover:shadow-md transition-shadow cursor-pointer`}
            >
              {/* Icon Container */}
              <div
                className={`w-8 h-8 ${item.bgColor} rounded-md flex items-center justify-center shrink-0`}
              >
                {item.icon}
              </div>

              {/* Label */}
              <span className="text-slate-700 font-[600] text-[15px]">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <ExamSchedule eachData={eachData}></ExamSchedule>
      </div>
    </div>
  );
};

export default UpperPart;
