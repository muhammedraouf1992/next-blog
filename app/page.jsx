import Image from "next/image";
import Navbar from "./components/Navbar";
import HomePageHeader from "./components/HomePageHeader";

export default function Home() {
  return (
    <div className="first_background">
      <Navbar />
      <div className="container mx-auto flex items-center justify-center h-full">
        <HomePageHeader />
      </div>
    </div>
  );
}
