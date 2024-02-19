import Image from "next/image";
import PatientsVisited from "./components/PatientsVisited";
import UpcomingEvents from "./components/UpcomingEvents";
import TeamMeeting from "./components/TeamMeeting";
import Consultation from "./components/Consultation";
import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";

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
          <div>
            <TeamMeeting />
            <Consultation />
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
