import Image from "next/image";

import HomePageHeader from "./components/HomePageHeader";

export default function Home() {
  return (
    <div className="first_background">
      <div className="container mx-auto flex items-center justify-center h-full">
        <HomePageHeader />
      </div>
    </div>
  );
}
