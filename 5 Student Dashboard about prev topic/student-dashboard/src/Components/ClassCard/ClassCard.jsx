import React from "react";

const ClassCard = ({ eachSchedule }) => {
  return (
    <div className="border-[1px] border-[#E9EDF4] flex items-center justify-between p-4 bg-white rounded shadow-[0px_4.4px_12px_-1px_rgba(222,222,222,0.3607843137)] border-[0.5px] border-[#ddd] max-w-md">
      <div className="flex items-center gap-4">
        {/* Instructor Avatar */}
        <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-pink-200">
          <img
            src={eachSchedule.img}
            alt="Instructor"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Class Details */}
        <div className="flex flex-col">
          {eachSchedule.status == "Completed" ? (
            <h4 className="text-lg font-bold text-slate-800 leading-tight line-through">
              {eachSchedule.subject}
            </h4>
          ) : (
            <h4 className="text-lg font-bold text-slate-800 leading-tight">
              {eachSchedule.subject}
            </h4>
          )}

          <div className="flex items-center text-slate-500 text-sm mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span> {eachSchedule.time}</span>
          </div>
        </div>
      </div>

      {/* Status Badge */}
      {eachSchedule.status == "Completed" ? (
        <div className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 rounded-lg text-xs font-semibold border border-green-100">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Completed
        </div>
      ) : (
        <div className="flex items-center gap-1 px-3 py-1 bg-[#eab3001a] text-[#EAB300] rounded-lg text-xs font-semibold border border-green-100">
          <span className="w-2 h-2 bg-[#EAB300] rounded-full"></span>
          Inprogress
        </div>
      )}
    </div>
  );
};

export default ClassCard;
