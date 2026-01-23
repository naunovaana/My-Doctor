import Hero from "../components/home/Hero.jsx";
import AboutUs from "../components/home/AboutUs.jsx";
import DoctorsInfo from "../components/home/DoctorsInfo.jsx";
import Benefits from "../components/home/Benefits.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Benefits />
      <DoctorsInfo /> 
    </>
  );
}
