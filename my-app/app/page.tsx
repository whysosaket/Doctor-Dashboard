import Image from "next/image";
import PatientsVisited from "./components/PatientsVisited";
import UpcomingEvents from "./components/UpcomingEvents";

export default function Home() {
  return (
   <div className="text-white p-6">
    <PatientsVisited />
    <UpcomingEvents />
   </div>
  );
}
