import React from "react";
import image from "../assets/a2.png";

const ProfilePicture = () => {
  return (
    <div className="bg-purple-200 w-12 h-12 rounded-full border-3 border-[#1B2C4F] mx-0 my-auto">
      <img src={image.src} alt="profile" className="w-12 h-12 rounded-full mx-auto my-auto" />
    </div>
  );
};

export default ProfilePicture;
