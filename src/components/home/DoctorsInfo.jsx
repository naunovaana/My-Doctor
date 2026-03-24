import DoctorCard from "../DoctorCard.jsx";
import { useState, useEffect } from "react";
import { db, auth } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function DoctorsInfo() {
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

  return (
    <section className="py-20 max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
      {/* Header */}
      <div className="w-full flex flex-col items-center gap-4 pb-20">
        <h2 className="text-3xl font-bold text-textPrimary text-center">
          НАШИОТ ТИМ ОД СПЕЦИЈАЛИСТИ
        </h2>
        <div>
          <Link
            to="/doctors"
            className="text-textPrimary text-sm font-semibold bg-gradient-to-r from-btnSecondary to-bgPrimary hover:from-bgPrimary hover:to-btnSecondary transition px-6 py-2 rounded-lg flex items-center gap-2"
          >
            Види ги сите <span>➜</span>
          </Link>
        </div>
      </div>

      {/* Grid for cards */}
      <div className="flex flex-wrap justify-center gap-20 lg:gap-20">
        {doctors.slice(0, 3).map((doc) => (
          <div
            key={doc.id}
            className="flex justify-center min-w-[250px] sm:min-w-[300px] md:min-w-[280px]"
          >
            <DoctorCard
              photo={doc.photo || "/anonymous.jpg"}
              name={doc.name}
              speciality={doc.speciality}
              description={doc.description}
              location={doc.city}
              slug={doc.slug}
              profileCompleted={doc.profileCompleted}
              userId={doc.userId}
            />
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="px-4 md:px-16 mt-10">
        <div className="bg-gradient-to-r from-gradientfrom via-gradientvia to-gradientto p-8 md:p-10 rounded-3xl text-center">
          <h3 className="text-lg font-medium tracking-widest mb-2">
            ТИ ТРЕБА СОВЕТ ОД СПЕЦИЈАЛИСТ?
          </h3>
          <h3 className="text-2xl md:text-3xl font-bold tracking-wide uppercase mb-4">
            Постави прашање на нашиот блог и добиј одговор веднаш!
          </h3>
          <Link
            to={"/blog"}
            className="text-textPrimary text-sm md:text-base font-semibold bg-gradient-to-r from-btnSecondary to-bgPrimary hover:from-bgPrimary hover:to-btnSecondary transition px-6 py-2 rounded-lg inline-flex items-center gap-2"
          >
            Нашиот Блог <span>➜</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
