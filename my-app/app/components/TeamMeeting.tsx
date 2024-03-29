import React from "react";
import { LuAlarmClock } from "react-icons/lu";
import { GoBellFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import {motion} from 'framer-motion';
import image1 from '../assets/a1.png';
import image2 from '../assets/a2.png';
import image3 from '../assets/a3.png';

const TeamMeeting = () => {
  return (
    <motion.div
    initial={{y:80, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{duration:0.7, delay:0.9}}
    className="bg-secondary  md:w-[18rem] w-5/6 mx-auto h-[11rem] rounded-[2.7rem] flex overflow-hidden m-4 py-8 px-8">
      <div className="w-[70%]">
        <h1 className="font-semibold text-xl">Team Meeting</h1>
        <div className="flex">
          <LuAlarmClock className="text-[#CCC] text-lg my-auto mr-2" />
          <h1 className="text-[#CCC] text-md font-light">05:00-06:00</h1>
        </div>
        <div className="mt-6 flex">
            <div className="bg-purple-200 w-10 h-10 rounded-full border-3 border-[#1B2C4F] overflow-hidden">
                <img src={image1.src} alt="doctor" className="w-10" />
            </div>
            <div className="bg-teal-200 w-10 h-10 rounded-full border border-3 border-[#1B2C4F] relative right-4 overflow-hidden">
                <img src={image2.src} alt="doctor" className="w-10" />
            </div>
            <div className="bg-green-200 w-10 h-10 rounded-full border border-3 border-[#1B2C4F] relative right-8 overflow-hidden">
                <img src={image3.src} alt="doctor" className="w-10" />
            </div>
            <div className="bg-gray-100 w-10 h-10 rounded-full border border-3 border-[#1B2C4F] relative right-12 text-black font-semibold flex justify-center align-middle"> 
                <h1 className="my-auto">4+</h1>
            </div>
        </div>
      </div>
      <div className="w-[30%] flex flex-col justify-between align-middle">
        <div className="bg-tertiary w-[3rem] h-[3rem] flex justify-center align-middle rounded-xl">
          <GoBellFill className="text-[#409BEE] text-[1.5rem] my-auto" />
        </div>
        <div className="bg-bright w-[3rem] h-8 flex justify-center align-middle rounded-xl">
          <FaArrowRightLong className="text-black text-[2rem] my-auto" />
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMeeting;
