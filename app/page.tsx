import Image from "next/image";
import Navbar from "./components/navbar";
import MainContent from "./components/maincontent";

export default function Home() {
  return (
    <div className="flex ">
      <Navbar />
      <MainContent />
    </div>
  );
}
