import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { updateDoc, arrayUnion } from "firebase/firestore";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import AppointmentRequestForm from "../components/profile/AppointmentRequestForm";

export default function DoctorDetails() {
  const { slug } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [openRequest, setOpenRequest] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // 🔹 Fetch doctor by slug
    const fetchDoctor = async () => {
      try {
        const q = query(collection(db, "doctors"), where("slug", "==", slug));

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setDoctor({
            id: querySnapshot.docs[0].id,
            ...querySnapshot.docs[0].data(),
          });
        } else {
          setDoctor(null);
        }
      } catch (error) {
        console.error("Error fetching doctor:", error);
        setDoctor(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();

    // 🔹 Listen for logged in user
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            setUserData(userSnap.data());
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      } else {
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, [slug]);

  const handleSaveDoctor = async () => {
    if (!auth.currentUser || !doctor) return;

    try {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const userSnap = await getDoc(userRef);

      const existing = userSnap.data().savedDoctors || [];

      if (existing.includes(doctor.id)) {
        alert("Докторот е веќе зачуван!");
        return;
      }

      await updateDoc(userRef, {
        savedDoctors: arrayUnion(doctor.id),
      });

      alert("Докторот е зачуван!");
    } catch (error) {
      console.error("Error saving doctor:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-20">Се вчитува...</div>;
  }

  if (!doctor) {
    return <div className="text-center py-20">Докторот не е пронајден.</div>;
  }

  return (
    <section className="py-20 max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="bg-cardBg border-2 border-cardBorder rounded-xl">
        {/* 🔹 Save Button */}
        <div className="flex justify-end">
          {userData?.role === "patient" && (
            <button
              onClick={handleSaveDoctor}
              className="px-5 py-2 bg-btnPrimary text-white rounded-bl-lg hover:opacity-90 transition"
            >
              Зачувај доктор
            </button>
          )}
        </div>

        <div className="flex flex-col md:flex-row pb-6 pt-3 gap-10 items-center justify-evenly">
          <img
            src={doctor.photo || "/images/anonymous.jpg"}
            alt={doctor.name}
            className="w-56 h-56 object-cover rounded-full"
          />

          <div className="space-y-3">
            <h1 className="text-3xl font-semibold">{doctor.name}</h1>

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
                  rel="noopener noreferrer"
                  className="text-accentBlue underline"
                >
                  Посети веб страна
                </a>
              )}
            </div>
            <div className="mb-4">
              {!doctor.profileCompleted && (
                <p className="text-red-500 font-semibold text-center">
                  ⚠️ Овој профил не е целосно пополнет.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Schedule Appointment Button */}
      <div className="flex w-full my-6 justify-center">
        <button
          onClick={() => setOpenRequest(true)}
          className="w-full  bg-btnPrimary text-white px-6 py-3 rounded-lg hover:bg-btnPrimaryHover transition"
        >
          Побарај Термин
        </button>
      </div>

      {/* 🔹 Map */}
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

      {/* Appointment Request Form Popup */}
      {openRequest && (
        <AppointmentRequestForm
          doctorId={doctor.id}
          doctorName={doctor.name}
          close={() => setOpenRequest(false)}
        />
      )}
    </section>
  );
}
