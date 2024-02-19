import Image from "next/image";
import PatientsVisited from "./components/PatientsVisited";
import UpcomingEvents from "./components/UpcomingEvents";
import TeamMeeting from "./components/TeamMeeting";
import Consultation from "./components/Consultation";
import TopBar from "./components/TopBar/TopBar";

export default function Home() {
  return (
   <div className="text-white p-6">
    <TopBar />
    <PatientsVisited />
    {/* <UpcomingEvents /> */}
    <TeamMeeting />
    <Consultation />
   </div>
  );
}
