import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { BsFillAlarmFill } from "react-icons/bs";

const UpcomingEvents = () => {
  return (
    <div className="bg-secondary w-[26rem] h-[14rem] rounded-[2.7rem] flex flex-col overflow-hidden my-4 py-6 px-8">
      <div className="flex align-middle">
        <div className="bg-bright w-14 p-2 rounded-[12rem] flex justify-center">
          <FaArrowRight className="text-black text-2xl" />
        </div>
        <h1 className="text-[#CCC] font-semibold my-auto ml-4 text-[1.4rem]">
          Upcoming Events
        </h1>
      </div>
      <div className="flex mt-6">
        <div className="w-1/2 flex justify-center">
          <div className="bg-secondary h-[7.2rem] w-[7.2rem] rounded-full flex justify-center align-middle my-auto border-4 border-[#ABEFEB] mx-auto ml-4">
            <div className="h-[5.5rem] w-[5.5rem] rounded-full overflow-hidden my-auto">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="doctor"
                className="w-96"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h1 className="font-semibold text-2xl">Aliza Shah</h1>
          <div className="flex">
            <BsFillAlarmFill className="text-[#CCC] text-xl my-auto mr-2" />
            <h1 className="text-[#CCC] text-md font-light">08:00-09:00 am</h1>
          </div>
          <div className="bg-tertiary mt-5 w-[9.5rem] px-3 py-2 rounded-[1rem]">
            <h1 className="font-light text-sm">Visited 7 days ago</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
