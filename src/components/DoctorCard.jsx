import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";

export default function DoctorCard({
  photo,
  name,
  speciality,
  description,
  location,
  slug,
  profileCompleted,
  userId,
}) {
  const currentUserUid = auth.currentUser?.uid;
  const isOwner = userId === currentUserUid;

  return (
    <div
      className="
        w-full
        max-w-[320px]
        h-[380px]
        bg-cardBg
        border-2 border-cardBorder
        rounded-xl
        shadow-sm
        flex flex-col
        items-center
        text-center
        p-5
        transition-all duration-300
        hover:scale-105 hover:shadow-xl
      "
    >
      {/* Image INSIDE card */}
      <div className="w-[120px] h-[120px] mt-2 mb-4">
        <img
          src={photo || "/anonymous.jpg"}
          className="w-full h-full object-cover rounded-full border-2 border-cardBorder"
        />
      </div>

      {/* Content */}
      <h3 className="font-semibold text-lg text-textPrimary">{name}</h3>

      <p className="text-accentBlue font-semibold text-sm mt-1">{speciality}</p>

      <p className="text-textSecondary text-sm mt-3 line-clamp-2">
        {description}
      </p>

      <p className="text-textSecondary text-sm mt-2">{location}</p>

      {!profileCompleted && isOwner && (
        <span className="mt-3 px-3 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
          Нецелосен профил
        </span>
      )}

      <Link
        to={`/doctors/${slug}`}
        className="mt-auto bg-btnPrimary text-white rounded-lg px-6 py-2 hover:bg-btnPrimaryHover transition"
      >
        Прочитај повеќе
      </Link>
    </div>
  );
}
