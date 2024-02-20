import React from "react";
import ActivePatients from "./ActivePatients";
import Chat from "./Chat";
import { motion } from "framer-motion";
import image from "../../assets/a1.png";

const Profile = () => {
  return (
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.9 }}
      className="h-[99%] bg-[#111729] my-4 rounded-[2rem] p-6"
    >
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="mt-12"
      >
        <div className="w-28 h-28 border-[0.3rem] border-[#409BEE] rounded-full mx-auto p-2">
          <img
            src={image.src}
            alt="profile"
            className="w-full h-full rounded-full bg-red-300"
          />
        </div>
        <h1 className="text-2xl font-semibold text-center mt-4">
          Aliam Colter
        </h1>
        <h1 className="text-[#CCC] text-center">Physician</h1>
      </motion.div>
      <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3}}
      >
        <ActivePatients />
      </motion.div>
      <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.5 }}
      >
        <Chat />
      </motion.div>
    </motion.div>
  );
};

export default Profile;
