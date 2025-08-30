import Image from "next/image";
import MainContent from "./components/maincontent";
import Jumbotron from "./components/jumbotron";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="bg-white p-6"><Jumbotron /></div>
        
      <MainContent />
    </div>
  );
}
