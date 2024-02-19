import React from "react";
import { LuAlarmClock } from "react-icons/lu";
import { GoBellFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

const TeamMeeting = () => {
  return (
    <div className="bg-secondary w-[26rem] h-[14rem] rounded-[2.7rem] flex overflow-hidden my-4 py-8 px-8">
      <div className="w-[70%]">
        <h1 className="font-semibold text-2xl">Team Meeting</h1>
        <div className="flex">
          <LuAlarmClock className="text-[#CCC] text-xl my-auto mr-2" />
          <h1 className="text-[#CCC] text-md font-light">05:00-06:00</h1>
        </div>
        <div className="mt-14 flex">
            <div className="bg-purple-200 w-12 h-12 rounded-full border-3 border-[#1B2C4F]"></div>
            <div className="bg-teal-200 w-12 h-12 rounded-full border border-3 border-[#1B2C4F] relative right-4"></div>
            <div className="bg-green-200 w-12 h-12 rounded-full border border-3 border-[#1B2C4F] relative right-8"></div>
            <div className="bg-gray-100 w-12 h-12 rounded-full border border-3 border-[#1B2C4F] relative right-12 text-black font-semibold flex justify-center align-middle"> 
                <h1 className="my-auto">4+</h1>
            </div>
        </div>
      </div>
      <div className="w-[30%] flex flex-col justify-between align-middle">
        <div className="bg-tertiary w-[4.5rem] h-[4.5rem] flex justify-center align-middle rounded-3xl">
          <GoBellFill className="text-[#409BEE] text-[2rem] my-auto" />
        </div>
        <div className="bg-bright w-[4.5rem] h-12 flex justify-center align-middle rounded-2xl">
          <FaArrowRightLong className="text-black text-[2rem] my-auto" />
        </div>
      </div>
    </div>
  );
};

export default TeamMeeting;
