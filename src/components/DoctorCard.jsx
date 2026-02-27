import { Link } from "react-router-dom";

export default function DoctorCard({
  photo,
  name,
  speciality,
  description,
  location,
  slug,
}) {
  return (
    <div className="w-full sm:w-[45%] lg:w-[30%] h-[350px] flex flex-col bg-cardBg items-center border-2 border-cardBorder rounded-xl shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
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

        {/* Button for future doctor pages */}
        <Link
          to={`/doctors/${slug}`}
          className="bg-btnPrimary text-white rounded-lg px-6 py-2 hover:bg-btnPrimaryHover transition"
        >
          Прочитај повеќе
        </Link>
      </div>
    </div>
  );
}
