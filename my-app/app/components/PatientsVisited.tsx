import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const PatientsVisited = () => {
  return (
    <div className="bg-secondary w-[28rem] h-[14rem] rounded-[2.7rem] flex overflow-hidden">
      <div className="w-7/12 flex align-middle justify-center">
        <div className="my-auto">
          <h1 className="text-5xl font-semibold">42</h1>
          <h1 className="mt-5 text-2xl">Patients Visited</h1>
          <h1 className="text-xl text-[#DCDCDC] font-light">This Month</h1>
        </div>
      </div>
      <div className="w-5/12 bg-tertiary font-semibold flex align-middle justify-center">
        <div className="m-auto">
          <div className="bg-bright/50 h-[7.8rem] w-[5rem] rounded-t-[4rem] rounded-b-[4rem] overflow-hidden">
            <div className="bg-bright mt-10 h-52 flex align-middle justify-center">
              <div className="mt-2">
                <FaArrowTrendUp className="text-white text-3xl mx-auto" />
                <h1 className="text-xl text-center">70%</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsVisited;
