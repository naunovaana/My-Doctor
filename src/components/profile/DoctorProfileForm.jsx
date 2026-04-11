import { useState, useEffect } from "react";
import { db, auth } from "../../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function DoctorProfileForm() {
  const [doctorData, setDoctorData] = useState({
    name: "",
    speciality: "",
    description: "",
    about: "",
    city: "",
    hospital: "",
    phone: "",
    website: "",
    photo: "",
    mapQuery: "",
    profileCompleted: false,
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchDoctor = async () => {
      if (!auth.currentUser) return;

      const docRef = doc(db, "doctors", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDoctorData((prev) => ({
          ...prev,
          ...docSnap.data(),
          photo: docSnap.data().photo || "",
          about: docSnap.data().about || "",
        }));
      }

      setLoading(false);
    };

    fetchDoctor();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDoctorData((prev) => {
      const updated = { ...prev, [name]: value };

      if (name === "city" || name === "hospital") {
        updated.mapQuery = `${updated.city} ${updated.hospital}`.trim();
      }

      return updated;
    });
  };

  // ✅ SAFE IMAGE HANDLING (prevents Firebase crash)
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // HARD LIMIT (safe under Firestore limits)
    if (file.size > 600 * 1024) {
      alert("Сликата е преголема! Користи под 600KB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setDoctorData((prev) => ({
        ...prev,
        photo: reader.result || "",
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    if (!auth.currentUser) return;

    setSaving(true);

    try {
      const docRef = doc(db, "doctors", auth.currentUser.uid);

      const requiredFields = ["name", "speciality", "city", "hospital"];

      const profileCompleted =
        requiredFields.every((f) => doctorData[f]?.trim()) &&
        doctorData.speciality !== "Неспецифицирано";

      await updateDoc(docRef, {
        ...doctorData,
        profileCompleted,
      });

      alert("Профилот е успешно зачуван!");
    } catch (err) {
      console.error(err);
      alert("Се случи грешка при зачувување.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 my-12">
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-center">Профил на Доктор</h2>

        {/* PHOTO */}
        <div className="flex flex-col items-center">
          <img
            src={doctorData.photo || "/images/anonymous.jpg"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="mt-2"
          />
        </div>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            value={doctorData.name}
            onChange={handleChange}
            placeholder="Име"
            className="border p-2 rounded"
          />

          <input
            name="speciality"
            value={doctorData.speciality}
            onChange={handleChange}
            placeholder="Специјалност"
            className="border p-2 rounded"
          />

          <input
            name="city"
            value={doctorData.city}
            onChange={handleChange}
            placeholder="Град"
            className="border p-2 rounded"
          />

          <input
            name="hospital"
            value={doctorData.hospital}
            onChange={handleChange}
            placeholder="Болница"
            className="border p-2 rounded"
          />

          <input
            name="phone"
            value={doctorData.phone}
            onChange={handleChange}
            placeholder="Телефон"
            className="border p-2 rounded"
          />

          <input
            name="website"
            value={doctorData.website}
            onChange={handleChange}
            placeholder="Веб страна"
            className="border p-2 rounded"
          />

          <textarea
            name="description"
            value={doctorData.description}
            onChange={handleChange}
            placeholder="Кратко за доктор"
            className="border p-2 rounded md:col-span-2"
          />

          <textarea
            name="about"
            value={doctorData.about}
            onChange={handleChange}
            placeholder="Детален опис"
            className="border p-2 rounded md:col-span-2"
          />
        </div>

        {/* SAVE */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-btnPrimary text-white px-6 py-2 rounded-lg"
        >
          {saving ? "Се зачувува..." : "Зачувај"}
        </button>

        {!doctorData.profileCompleted && (
          <p className="text-red-500 text-sm">
            * Пополнете ги задолжителните полиња
          </p>
        )}
      </div>
    </div>
  );
}
