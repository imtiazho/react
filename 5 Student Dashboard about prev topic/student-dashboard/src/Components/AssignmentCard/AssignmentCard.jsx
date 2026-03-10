import React from 'react';
import { Tag } from 'lucide-react'; // Using lucide-react for the icon
import ProgressCircle from '../ProgressCircle/ProgressCircle';

const AssignmentCard = ({eachHW}) => {
    console.log(eachHW);

  return (
    <div className="flex items-center justify-between bg-white p-4 max-w-2xl">
      <div className="flex gap-4 items-center">

        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=200" 
            alt="Physics" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 text-blue-600 text-[12px] font-medium">
            <Tag size={14} />
            <span>{eachHW.subject}</span>
          </div>
          <h3 className="text-[#1e293b] text-md font-bold">{eachHW.topic}</h3>
          <div className="flex items-center gap-2">
            <img 
              src="https://i.pravatar.cc/150?u=aaron" 
              alt="Aaron" 
              className="w-6 h-6 rounded-full border border-gray-200"
            />
            <span className="text-[#1e293b] text-sm">{eachHW.instructor}</span>
            <div className="h-4 w-[1px] bg-gray-300 mx-1"></div>
            <span className="text-gray-500 text-sm italic">Due by : {eachHW.due_date}</span>
          </div>
        </div>
      </div>

      <ProgressCircle percentage={eachHW.completion_percentage}></ProgressCircle>
    </div>
  );
};

export default AssignmentCard;