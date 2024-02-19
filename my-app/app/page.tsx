import Image from "next/image";
import PatientsVisited from "./components/PatientsVisited";
import UpcomingEvents from "./components/UpcomingEvents";
import TeamMeeting from "./components/TeamMeeting";
import Consultation from "./components/Consultation";
import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
   <div className="text-white p-6 flex">
    <div className="px-6">
      <Navbar />
    </div>
    <div className="bg-[#151C39] w-full p-8 rounded-[2rem]">
    <TopBar />
    <PatientsVisited />
    <UpcomingEvents />
    <TeamMeeting />
    <Consultation />
    </div>
   </div>
  );
}
