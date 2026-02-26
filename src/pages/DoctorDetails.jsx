import { useParams } from "react-router-dom";
import { doctors } from "../helperData/doctors";
import { useEffect } from "react";

export default function DoctorDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { slug } = useParams();

  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    return <div className="text-center py-20">Докторот не е пронајден.</div>;
  }

  return (
    <section className="py-20 max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 ">
      {/* Top section */}
      <div className=" bg-cardBg border-2 border-cardBorder rounded-xl">
        <div className=" flex justify-end">
          <button className="px-5 py-2 bg-btnPrimary text-white rounded-bl-lg">
            Зачувај доктор
          </button>
        </div>
        <div className="flex flex-col md:flex-row pb-6 pt-3 gap-10 items-center justify-evenly">
          <img
            src={doctor.img}
            className="w-56 h-56 object-cover rounded-full"
          />

          <div className="space-y-3">
            <h1 className="text-3xl font-semibold">{doctor.title}</h1>
            <p className="text-accentBlue text-lg">{doctor.speciality}</p>
            <p className="text-textSecondary">{doctor.about}</p>

            <div className="pt-4 space-y-1">
              <p>
                🏥 <strong>{doctor.hospital}</strong>
              </p>
              <p>📍 {doctor.city}</p>
              <p>📞 {doctor.phone}</p>

              {doctor.website && (
                <a
                  href={doctor.website}
                  target="_blank"
                  className="text-accentBlue underline"
                >
                  Посети веб страна
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-4">Локација на болницата</h2>

        <iframe
          title="map"
          className="w-full h-[400px] rounded-xl border-2 border-cardBorder"
          loading="lazy"
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            doctor.mapQuery,
          )}&output=embed`}
        />
      </div>
    </section>
  );
}
