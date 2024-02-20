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

export default function Home() {
  return (
    <div className="text-white md:p-6 flex">
      <div className="md:px-6">
        <Navbar />
      </div>
      <div className="bg-[#151C39] w-full md:p-8 p-4  rounded-[2rem] md:flex block">
        <div className="w-full">
          <TopBar />
          <div className="md:flex">
          <div>
            <PatientsVisited />
            <UpcomingEvents />
          </div>
          <Statistics />
          </div>
          <div className="md:flex">
            <div>
            <h1 className="text-2xl font-semibold ml-8 my-2">Active Patients</h1>
          <PatientsTiming />
            </div>
          
          <div>
          <div>
            <h1 className="text-2xl font-semibold ml-8 my-2">Upcoming Events</h1>
            <TeamMeeting />
            <Consultation />
          </div>
          </div>
        </div>
        </div>
        <div className="md:w-1/3">
          <Profile />
        </div>
      </div>
    </div>
  );
}
