import DoctorCard from "../DoctorCard";
import { doctors } from "../../helperData/doctors";
import React from "react";

export default function SavedDoctors() {
  // Show only 3 doctors for now
  const sampleDoctors = doctors.slice(0, 3);

  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 my-12">
      <h2 className="text-2xl font-semibold mb-6 text-textPrimary">
        Зачувани Доктори
      </h2>

      {sampleDoctors.length === 0 ? (
        <p className="text-textSecondary">Немате зачувани доктори.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 pt-16">
          {sampleDoctors.map((doc) => (
            <DoctorCard
              key={doc.id || doc.title} // fallback if id is missing
              img={doc.img}
              title={doc.title}
              speciality={doc.speciality}
              description={doc.description}
              location={doc.city || doc.location}
              slug={doc.slug || "#"} // fallback if slug is missing
            />
          ))}
        </div>
      )}
    </section>
  );
}
