import DoctorCard from "../DoctorCard.jsx";
import { doctors } from "../../helperData/doctors.jsx";

export default function DoctorsList({ filters = {} }) {
  const filtered = doctors.filter((d) => {
    const name = (d.title || "").toLowerCase();
    const spec = (d.speciality || "").toLowerCase();
    const desc = (d.description || "").toLowerCase();
    const loc = (d.location || "").toLowerCase();

    const search = (filters.search || "").toLowerCase();
    const specialityFilter = (filters.speciality || "").toLowerCase();
    const locationFilter = (filters.location || "").toLowerCase();

    const matchesSearch =
      !search ||
      name.includes(search) ||
      spec.includes(search) ||
      desc.includes(search);

    const matchesSpeciality =
      !specialityFilter || spec.includes(specialityFilter);

    const matchesLocation = !locationFilter || loc.includes(locationFilter);

    return matchesSearch && matchesSpeciality && matchesLocation;
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
                img={doc.img}
                title={doc.title}
                speciality={doc.speciality}
                description={doc.description}
                location={doc.location}
                slug={doc.slug}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
