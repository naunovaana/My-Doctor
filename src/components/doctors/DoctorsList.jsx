import DoctorCard from "../DoctorCard.jsx";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";

export default function DoctorsList({ filters = {} }) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "doctors"));
        const currentUserUid = auth.currentUser?.uid;

        const doctorsData = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter(
            (doctor) =>
              doctor.profileCompleted || doctor.userId === currentUserUid,
          );

        setDoctors(doctorsData);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const filtered = doctors.filter((d) => {
    const search = (filters.search || "").toLowerCase();
    const specialityFilter = (filters.speciality || "").toLowerCase();
    const cityFilter = (filters.city || "").toLowerCase();

    const name = (d.name || "").toLowerCase();
    const spec = (d.speciality || "").toLowerCase();
    const desc = (d.description || "").toLowerCase();
    const city = (d.city || "").toLowerCase();

    return (
      (!search ||
        name.includes(search) ||
        spec.includes(search) ||
        desc.includes(search)) &&
      (!specialityFilter || spec.includes(specialityFilter)) &&
      (!cityFilter || city.includes(cityFilter))
    );
  });

  const grouped = filtered.reduce((acc, doctor) => {
    const spec = doctor.speciality || "Други";
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
        <div key={spec} className="mb-20">
          <h2 className="text-2xl font-semibold text-textPrimary mb-10">
            {spec}
          </h2>

          {/* 🔥 GRID INSTEAD OF FLEX */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-10
              justify-items-center
            "
          >
            {grouped[spec].map((doc) => (
              <DoctorCard
                key={doc.id}
                photo={doc.photo}
                name={doc.name}
                speciality={doc.speciality}
                description={doc.description}
                location={doc.city}
                slug={doc.slug}
                profileCompleted={doc.profileCompleted}
                userId={doc.userId}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
