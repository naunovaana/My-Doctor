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
  userId, // added to check ownership
}) {
  const currentUserUid = auth.currentUser?.uid;
  const isOwner = userId === currentUserUid;

  return (
    <div className="w-[280px] sm:w-[300px] lg:w-[320px] h-[350px] flex flex-col bg-cardBg items-center border-2 border-cardBorder rounded-xl shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image */}
      <div className="w-[200px] h-[200px] -mt-16">
        <img
          src={photo || "/anonymous.jpg"}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Content */}
      <div className="w-full h-full flex flex-col items-center justify-evenly px-4 text-center">
        <h3 className="font-medium text-lg text-textPrimary">{name}</h3>
        <p className="text-accentBlue font-semibold">{speciality}</p>
        <p className="text-textSecondary text-sm">{description}</p>
        <p className="text-textSecondary text-sm">{location}</p>

        {/* Incomplete profile badge for owner only */}
        {!profileCompleted && isOwner && (
          <span className="mt-2 px-3 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
            Нецелосен профил
          </span>
        )}

        {/* Button for future doctor pages */}
        <Link
          to={`/doctors/${slug}`}
          className="mt-4 bg-btnPrimary text-white rounded-lg px-6 py-2 hover:bg-btnPrimaryHover transition"
        >
          Прочитај повеќе
        </Link>
      </div>
    </div>
  );
}
