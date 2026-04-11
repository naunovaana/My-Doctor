import DoctorCard from "../DoctorCard";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { updateDoc, arrayRemove } from "firebase/firestore";

export default function SavedDoctors() {
  const [savedDoctors, setSavedDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedDoctors = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
          setSavedDoctors([]);
          setLoading(false);
          return;
        }

        const savedIds = userSnap.data().savedDoctors || [];

        if (savedIds.length === 0) {
          setSavedDoctors([]);
          setLoading(false);
          return;
        }

        const doctorsSnapshot = await getDocs(collection(db, "doctors"));

        const doctorsData = doctorsSnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((doctor) => savedIds.includes(doctor.id));

        setSavedDoctors(doctorsData);
      } catch (error) {
        console.error("Error fetching saved doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedDoctors();
  }, []);

  const handleRemoveDoctor = async (doctorId) => {
    try {
      const user = auth.currentUser;
      if (!user) return;

      const userRef = doc(db, "users", user.uid);

      await updateDoc(userRef, {
        savedDoctors: arrayRemove(doctorId),
      });

      // 🔥 Update UI instantly (no reload)
      setSavedDoctors((prev) => prev.filter((doc) => doc.id !== doctorId));
    } catch (error) {
      console.error("Error removing doctor:", error);
    }
  };

  if (loading) return <p className="text-center mt-6">Се вчитува...</p>;

  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 my-12">
      <h2 className="text-2xl font-semibold mb-6 text-textPrimary">
        Зачувани Доктори
      </h2>

      {savedDoctors.length === 0 ? (
        <p className="text-textSecondary">Немате зачувани доктори.</p>
      ) : (
        <div className="flex flex-wrap justify-start gap-10 pt-16">
          {savedDoctors.map((doc) => (
            <div key={doc.id} className="w-[320px] flex flex-col items-center">
              <DoctorCard
                photo={doc.photo}
                name={doc.name}
                speciality={doc.speciality}
                description={doc.description}
                location={doc.city}
                slug={doc.slug}
                userId={doc.userId}
                profileCompleted={doc.profileCompleted}
              />

              <button
                onClick={() => handleRemoveDoctor(doc.id)}
                className="mt-4 text-md px-4 py-2 border-2 border-cardBorder bg-cardBg rounded-lg text-red-500 hover:text-red-600 transition"
              >
                Отстрани доктор
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
