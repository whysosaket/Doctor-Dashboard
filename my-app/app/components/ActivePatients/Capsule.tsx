import React from "react";
import ProfilePicture from "../ProfilePicture";

const Capsule = () => {
  return (
    <>
      <div className="bg-teal-100 rounded-3xl px-6 py-2 my-auto flex">
        <div className="border border-3 border-black rounded-full p-0">
          <ProfilePicture />
        </div>
        <div className="ml-2 my-auto">
          <h1 className="text-md font-semibold text-black">Aliza Shah</h1>
          <h1 className="text-xs font-light text-gray-800">09:00-10:00 am</h1>
        </div>
      </div>
    </>
  );
};

export default Capsule;
