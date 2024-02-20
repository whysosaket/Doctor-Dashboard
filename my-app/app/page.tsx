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
    <div className="text-white p-6 flex">
      <div className="px-6">
        <Navbar />
      </div>
      <div className="bg-[#151C39] w-full p-8 rounded-[2rem] flex">
        <div className="w-2/3">
          <TopBar />
          <div className="flex">
          <div>
            <PatientsVisited />
            <UpcomingEvents />
          </div>
          <Statistics />
          </div>
          <div className="flex">
            <div>
            <h1 className="text-2xl font-semibold ml-8">Active Patients</h1>
          <PatientsTiming />
            </div>
          
          <div>
          <div>
            <h1 className="text-2xl font-semibold ml-8">Upcoming Events</h1>
            <TeamMeeting />
            <Consultation />
          </div>
          </div>
        </div>
        </div>
        <div className="w-1/3">
          <Profile />
        </div>
      </div>
    </div>
  );
}
