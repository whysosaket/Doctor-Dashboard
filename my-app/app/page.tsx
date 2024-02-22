"use client";
import Image from "next/image";
import PatientsVisited from "./components/PatientsVisited";
import UpcomingEvents from "./components/UpcomingEvents";
import TeamMeeting from "./components/TeamMeeting";
import Consultation from "./components/Consultation";
import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import ActivePatients from "./components/Profile/ActivePatients";
import PatientsTiming from "./components/ActivePatients/PatientsTiming";
import Statistics from "./components/Statistics/Statistics";
import {motion} from 'framer-motion';
import EmailForm from "./components/EmailForm";
import UpdateComponents from "./components/UpdateComponents";
import axios from "axios";
import { useState } from "react";
import logoImg from "./assets/logo.png";

export default function Home() {

  const [doctorName, setDoctorName] = useState('Dr. Colter');
  const [logo, setLogo] = useState(logoImg.src);
  const [isLoading, setIsLoading] = useState(false);

  const getName = async () => {
    const response = await axios.get('/api/updatename');
    setDoctorName(response.data.name);
  }

  const getImage = async () => {
    setIsLoading(true);
    const response = await axios.get('/api/updateimage');
    setLogo(response.data.logo);
    setIsLoading(false);
  }

  return (
    <div className="text-white md:p-6 flex">
      <motion.div 
      initial={{x:-100, opacity:0}}
      animate={{x:0, opacity:1}}
      transition={{duration:0.7}}
      className="md:px-6">
        <Navbar logo={logo} isLoading={isLoading} />
      </motion.div>
      <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
      className="bg-[#151C39] w-full md:p-8 p-4  rounded-[2rem] md:flex block">
        <div className="w-full">
          <TopBar doctorName={doctorName} />
          <div className="md:flex">
          <div>
            {/* <PatientsVisited /> */}
            <UpdateComponents updateImage={getImage} updateName={getName} />
            <UpcomingEvents />
          </div>
          {/* <Statistics /> */}
          <EmailForm />
          </div>
          <div className="md:flex">
            <div>
            <motion.h1
               initial={{y:80, opacity:0}}
               animate={{y:0, opacity:1}}
               transition={{duration:0.7, delay:0.5}}
            className="text-2xl font-semibold ml-8 my-2">Active Patients</motion.h1>
          <PatientsTiming />
            </div>
          
          <div>
          <div>
            <motion.h1
               initial={{y:80, opacity:0}}
               animate={{y:0, opacity:1}}
               transition={{duration:0.7, delay:0.7}}
            className="text-2xl font-semibold ml-8 my-2">Upcoming Events</motion.h1>
            <TeamMeeting />
            <Consultation />
          </div>
          </div>
        </div>
        </div>
        <div className="md:w-1/3">
          <Profile />
        </div>
      </motion.div>
    </div>
  );
}
