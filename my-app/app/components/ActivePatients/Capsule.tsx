import React from "react";
import ProfilePicture from "../ProfilePicture";
import { CiClock2 } from "react-icons/ci";

interface Props {
    name: string;
    time: string;
}

const Capsule:React.FC<Props> = ({name, time}) => {
  return (
    <>
      <div className="bg-teal-100 rounded-3xl px-6 py-2 my-auto flex">
        <div className="border border-3 border-black rounded-full p-0">
          <ProfilePicture />
        </div>
        <div className="ml-2 my-auto">
          <h1 className="text-md font-semibold text-black">{name}</h1>
          <h1 className="text-[10px] font-light text-gray-800 flex">
            <CiClock2 className="my-auto mr-1" />
            {time}
            </h1>
        </div>
      </div>
    </>
  );
};

export default Capsule;
