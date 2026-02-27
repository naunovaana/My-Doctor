import DoctorCard from "../DoctorCard.jsx";
// import { doctors } from "../../helperData/doctors.jsx";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export default function DoctorsList({ filters = {} }) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "doctors"));

        const doctorsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setDoctors(doctorsData);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const filtered = doctors.filter((d) => {
    const name = (d.name || "").toLowerCase();
    const spec = (d.speciality || "").toLowerCase();
    const desc = (d.description || "").toLowerCase();
    const city = (d.city || "").toLowerCase();

    const search = (filters.search || "").toLowerCase();
    const specialityFilter = (filters.speciality || "").toLowerCase();
    const cityFilter = (filters.city || "").toLowerCase();

    const matchesSearch =
      !search ||
      name.includes(search) ||
      spec.includes(search) ||
      desc.includes(search);

    const matchesSpeciality =
      !specialityFilter || spec.includes(specialityFilter);

    const matchesCity = !cityFilter || city.includes(cityFilter);

    return matchesSearch && matchesSpeciality && matchesCity;
  });

  // Group by speciality
  const grouped = filtered.reduce((acc, doctor) => {
    const spec = doctor.speciality;
    if (!acc[spec]) acc[spec] = [];
    acc[spec].push(doctor);
    return acc;
  }, {});

  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 pb-20">
      {Object.keys(grouped).length === 0 && (
        <p className="text-center text-textSecondary py-10">
          Нема резултати според филтрите.
        </p>
      )}

      {Object.keys(grouped).map((spec) => (
        <div key={spec} className="mb-28 flex flex-col">
          <h2 className="text-2xl font-semibold text-textPrimary mb-24">
            {spec}
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {grouped[spec].map((doc, index) => (
              <DoctorCard
                key={index}
                photo={doc.photo}
                name={doc.name}
                speciality={doc.speciality}
                description={doc.description}
                city={doc.city}
                slug={doc.slug}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
