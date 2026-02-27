import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function DoctorDetails() {
  const { slug } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDoctor = async () => {
      try {
        const q = query(collection(db, "doctors"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setDoctor(querySnapshot.docs[0].data()); // take first match
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

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDocs(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
    });

    return () => unsubscribe();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20">Се вчитува...</div>;
  }

  if (!doctor) {
    return <div className="text-center py-20">Докторот не е пронајден.</div>;
  }

  return (
    <section className="py-20 max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 ">
      <div className=" bg-cardBg border-2 border-cardBorder rounded-xl">
        <div className=" flex justify-end">
          {userData?.role === "patient" && (
            <button className="px-5 py-2 bg-btnPrimary text-white rounded-bl-lg">
              Зачувај доктор
            </button>
          )}
        </div>

        <div className="flex flex-col md:flex-row pb-6 pt-3 gap-10 items-center justify-evenly">
          <img
            src={doctor.photo || "/anonymous.jpg"} // fallback image
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
                  className="text-accentBlue underline"
                >
                  Посети веб страна
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

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
