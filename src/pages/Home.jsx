import Hero from "../components/home/Hero.jsx";
import AboutUs from "../components/home/AboutUs.jsx";
import DoctorsInfo from "../components/home/DoctorsInfo.jsx";
import Benefits from "../components/home/Benefits.jsx";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <AboutUs />
      <Benefits />
      <DoctorsInfo /> 
    </>
  );
}
