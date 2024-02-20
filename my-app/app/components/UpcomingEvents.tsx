import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { BsFillAlarmFill } from "react-icons/bs";

const UpcomingEvents = () => {
  return (
    <div className="bg-secondary  md:w-[22rem] w-full h-[11rem] rounded-[2.7rem] flex flex-col overflow-hidden my-4 md:m-4 py-6 px-8">
      <div className="flex align-middle">
        <div className="bg-bright w-12 p-2 rounded-[12rem] flex justify-center">
          <FaArrowRight className="text-black text-xl" />
        </div>
        <h1 className="text-[#CCC] font-semibold my-auto ml-4 text-[1.1rem]">
          Upcoming Events
        </h1>
      </div>
      <div className="flex mt-2">
        <div className="w-1/2 flex justify-start">
          <div className="bg-secondary h-[5.2rem] w-[5.2rem] rounded-full flex justify-center align-middle my-auto border-4 border-[#ABEFEB]">
            <div className="h-[3.5rem] w-[3.5rem] rounded-full overflow-hidden my-auto">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="doctor"
                className="w-96"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h1 className="font-semibold text-xl">Aliza Shah</h1>
          <div className="flex">
            <BsFillAlarmFill className="text-[#CCC] text-lg my-auto mr-2" />
            <h1 className="text-[#CCC] md:text-sm text-xs font-light">08:00-09:00 am</h1>
          </div>
          <div className="bg-tertiary mt-4 w-[8rem] px-3 py-2 rounded-[0.7rem]">
            <h1 className="font-light text-xs">Visited 7 days ago</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
