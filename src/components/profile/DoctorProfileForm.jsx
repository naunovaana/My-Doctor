import { useState, useEffect } from "react";
import { db, auth } from "../../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function DoctorProfileForm() {
  const [doctorData, setDoctorData] = useState({
    name: "",
    speciality: "",
    description: "",
    city: "",
    hospital: "",
    phone: "",
    website: "",
    photo: "",
    mapQuery: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Fetch doctor data on mount
  useEffect(() => {
    const fetchDoctor = async () => {
      if (!auth.currentUser) return;
      const docRef = doc(db, "doctors", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDoctorData(docSnap.data());
      }
      setLoading(false);
    };

    fetchDoctor();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prev) => {
      const updated = { ...prev, [name]: value };

      // Update mapQuery whenever city or hospital changes
      if (name === "city" || name === "hospital") {
        updated.mapQuery = `${updated.city} ${updated.hospital}`.trim();
      }

      return updated;
    });
  };

  // Handle photo upload as Base64
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setDoctorData((prev) => ({ ...prev, photo: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  // Save doctor profile
  const handleSave = async () => {
    if (!auth.currentUser) return;
    setSaving(true);

    try {
      const docRef = doc(db, "doctors", auth.currentUser.uid);

      // Optional: mark profileCompleted if all required fields are filled
      const requiredFields = ["name", "speciality", "city", "hospital"];
      const profileCompleted = requiredFields.every(
        (field) => doctorData[field]?.trim() !== "",
      );

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
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-evenly gap-6">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Профил на Доктор
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Profile Photo */}
          <div className="md:col-span-2 flex flex-col items-center">
            <label className="font-medium mb-1">Профилна слика</label>
            <img
              src={doctorData.photo || "/images/anonymous.jpg"}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full mb-2 border"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="border border-black"
            />
          </div>

          {/* Name */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Име и Презиме *</label>
            <input
              type="text"
              name="name"
              value={doctorData.name}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>

          {/* Speciality */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Специјалност *</label>
            <input
              type="text"
              name="speciality"
              value={doctorData.speciality}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>

          {/* Hospital */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Болница *</label>
            <input
              type="text"
              name="hospital"
              value={doctorData.hospital}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>

          {/* City */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Град *</label>
            <input
              type="text"
              name="city"
              value={doctorData.city}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Телефон</label>
            <input
              type="text"
              name="phone"
              value={doctorData.phone}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>

          {/* Website */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Веб страна</label>
            <input
              type="text"
              name="website"
              value={doctorData.website}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium mb-1">Кратко за вас</label>
            <textarea
              name="description"
              value={doctorData.description}
              onChange={handleChange}
              className="border p-2 rounded h-24"
            />
          </div>
          {/* About */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium mb-1">Детален опис</label>
            <textarea
              name="about"
              value={doctorData.about}
              onChange={handleChange}
              className="border p-2 rounded h-24"
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="mt-4 bg-btnPrimary text-white px-6 py-2 rounded-lg hover:bg-btnPrimaryHover"
          disabled={saving}
        >
          {saving ? "Се зачувува..." : "Зачувај"}
        </button>

        {/* Profile Completion Notice */}
        {!doctorData.profileCompleted && (
          <p className="text-red-500 mt-2">
            * Пополнете сите задолжителни полиња за целосен профил.
          </p>
        )}
      </div>
    </div>
  );
}
