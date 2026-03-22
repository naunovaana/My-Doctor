import { useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc, collection, serverTimestamp } from "firebase/firestore";

export default function AppointmentRequestForm({
  doctorId,
  doctorName,
  close,
}) {
  const [formData, setFormData] = useState({
    preferredDate: "",
    preferredTime: "",
    description: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) {
      alert("You must be logged in to request an appointment.");
      return;
    }
    setSending(true);

    try {
      // Save appointment request in Firestore under doctorAppointments
      const docRef = doc(collection(db, "doctorAppointments"));
      await setDoc(docRef, {
        doctorId,
        doctorName,
        requestedBy: auth.currentUser.email, // could also use displayName
        ...formData,
        status: "Pending",
        createdAt: serverTimestamp(),
      });

      alert("Appointment request sent!");
      close(); // close popup
    } catch (err) {
      console.error(err);
      alert("Error sending appointment request.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <button
          onClick={close}
          className="absolute top-2 right-2 text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">
          Request Appointment with {doctorName}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label>
            Preferred Date:
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            Preferred Time:
            <input
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            Short Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              placeholder="Reason for appointment"
              required
            />
          </label>
          <button
            type="submit"
            disabled={sending}
            className="mt-2 bg-btnPrimary text-white px-4 py-2 rounded hover:bg-btnPrimaryHover"
          >
            {sending ? "Sending..." : "Send Request"}
          </button>
        </form>
      </div>
    </div>
  );
}
