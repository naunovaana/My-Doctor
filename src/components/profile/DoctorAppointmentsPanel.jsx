import { useEffect, useState } from "react";
import { db, auth } from "../../firebase/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

export default function DoctorAppointmentsPanel() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      if (!auth.currentUser) return;
      try {
        const q = query(
          collection(db, "doctorAppointments"),
          where("doctorId", "==", auth.currentUser.uid),
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRequests(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRequests();
  }, []);

  const handleAction = async (id, action) => {
    try {
      const docRef = doc(db, "doctorAppointments", id);
      await updateDoc(docRef, { status: action });
      alert(
        `Барањето за термин е ${action}! Испратен е е-маил со дополнителни информации за барањето и наведениот термин. (Симулирана околина)`,
      );
      setRequests((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (requests.length === 0)
    return <p>Моментално нема ниту едно барање за термин.</p>;

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 my-12">
      <h2 className="text-xl font-semibold mb-4">Барања за термини</h2>
      <div className="flex flex-wrap gap-4">
        {requests.map((req) => (
          <div
            key={req.id}
            className=" bg-cardBg border-2 border-cardBorder p-4 rounded-lg shadow flex flex-col gap-2"
          >
            <p>
              <strong>Од:</strong> {req.requestedBy}
            </p>
            <p>
              <strong>Дата:</strong> {req.preferredDate}
            </p>
            <p>
              <strong>Време:</strong> {req.preferredTime}
            </p>
            <p>
              <strong>Опис:</strong> {req.description}
            </p>

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleAction(req.id, "Прифатено")}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Прифати
              </button>
              <button
                onClick={() => handleAction(req.id, "Одбиено")}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Одбиј
              </button>
              <button
                onClick={() =>
                  handleAction(req.id, "Пренасочено за понатамошен договор")
                }
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Предложи нова дата/време
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
