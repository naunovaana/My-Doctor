import AboutHero from "../components/about_us/AboutHero";
import AboutSpecialties from "../components/about_us/AboutSpecialties";
import AboutValues from "../components/about_us/AboutValues";
import AboutWhyUs from "../components/about_us/AboutWhyUs";
import React, { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AboutHero />
      <AboutValues />
      <AboutSpecialties />
      <AboutWhyUs />
    </div>
  );
}
