import { useEffect, useState } from "react";
import DoctorsHero from "../components/doctors/DoctorsHero";
import DoctorsFilter from "../components/doctors/DoctorsFilter";
import DoctorsList from "../components/doctors/DoctorsList";

export default function Doctors() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filters, setFilters] = useState({
    search: "",
    speciality: "",
    location: "",
  });

  return (
    <div className="">
      <DoctorsHero />
      <DoctorsFilter filters={filters} setFilters={setFilters} />
      <DoctorsList filters={filters} />
    </div>
  );
}
