import React from "react";
import { Clock, CalendarDays } from "lucide-react";

const ExamCard = ({ eachExam }) => {
  const { term, subject, date, time, room_no, countdown } = eachExam;

  return (
    <div className="bg-[#fff] border-[0.5px] border-[#ddd] rounded pt-[1rem] pr-[1.25rem] pb-[1rem] pl-[1.25rem]">
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-[15px] font-[600] text-[#1e293b]">{term}</h2>
        <div className="flex items-center tracking-wide gap-1 bg-[#fff1f2] text-[#e11d48] px-3 py-1 rounded-md text-[11px] font-semibold">
          <Clock size={14} />
          <span>{countdown}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-1">
        <h3 className="text-[15px] font-semibold tracking-wide text-[#1e293b]">
          {subject}
        </h3>
        <div className="flex items-center gap-2 text-gray-500 font-medium text-[13px]">
          <CalendarDays size={15} className="text-gray-400" />
          <span>{date}</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 text-gray-500 font-medium">
          <Clock size={15} className="text-gray-400" />
          <span className="text-[13px]">{time}</span>
        </div>
        <div className="text-[#3b82f6] text-[13px] font-medium">
          Room No : <span className="font-bold">{room_no}</span>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
