import React from "react";
import { GoDotFill } from "react-icons/go";

const Profile = ({ eachData }) => {
  return (
    <div className="bg-[#202C4B] p-4 text-white rounded-lg">
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-2">
          <img
            className="h-[100px] w-[100px] object-cover rounded"
            src={eachData.student_info.img}
            alt=""
          />
        </div>
        <div className="col-span-5">
          <span className="text-[#3D5EE1] bg-[#F2F5FF] px-[5px] py-[3px] rounded text-[11px] font-bold tracking-wide">
            {eachData.student_info.student_id}
          </span>
          <p className="text-[20px] font-bold mb-[4px]  mt-[4px]">
            {eachData.student_info.name}
          </p>
          <p className="text-[#CDD0D7] text-[14px] leading-[1.5]">
            Class: {eachData.student_info.class} | Roll no.{" "}
            {eachData.student_info.roll_no}
          </p>
        </div>
      </div>
      <div className="border border-dashed border-[#ddd] my-5"></div>
      <div className="flex justify-between items-center text-white">
        <div className="flex gap-3">
          <span className="text-[15px] font-[500]">
            {eachData.student_info.status.term}
          </span>
          <span className="flex gap-[2px] items-center bg-[#1ABE17] py-[0.25rem] px-[0.45rem] text-[0.75rem] rounded font-[600]">
            {" "}
            <GoDotFill /> {eachData.student_info.status.result}
          </span>
        </div>

        <button className="btn btn-primary text-white">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
