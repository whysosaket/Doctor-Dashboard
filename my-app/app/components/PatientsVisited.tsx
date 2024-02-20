import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const PatientsVisited = () => {
  return (
    <div className="bg-secondary md:w-[22rem] w-full h-[11rem] rounded-[2.7rem] md:m-4 md:mx-4 flex overflow-hidden">
      <div className="w-7/12 flex align-middle justify-center">
        <div className="my-auto">
          <h1 className="text-4xl font-semibold">42</h1>
          <h1 className="mt-5 text-xl">Patients Visited</h1>
          <h1 className="text-lg text-[#DCDCDC] font-light">This Month</h1>
        </div>
      </div>
      <div className="w-5/12 bg-tertiary font-semibold flex align-middle justify-center">
        <div className="m-auto">
          <div className="bg-bright/50 h-[6.8rem] w-[4rem] rounded-t-[4rem] rounded-b-[4rem] overflow-hidden">
            <div className="bg-bright mt-10 h-52 flex align-middle justify-center">
              <div className="mt-2">
                <FaArrowTrendUp className="text-white text-2xl mx-auto" />
                <h1 className="text-lg text-center">70%</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsVisited;
