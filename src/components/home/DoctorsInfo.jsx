import DoctorCard from "../DoctorCard.jsx";
import { useState } from "react";
import { doctors } from "../../helperData/doctors.jsx";
import { Link } from "react-router-dom";

export default function DoctorsInfo() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }
  function closePopUp() {
    setOpen(!open);
  }

  return (
    <section className="py-20 max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 ">
      <div className="w-full justify-center items-center flex flex-col gap-4 pb-20">
        <h2 className="text-3xl font-bold text-textPrimary">
          НАШИОТ ТИМ ОД СПЕЦИЈАЛИСТИ
        </h2>
        <div className="">
          <Link
            to="/doctors"
            className="text-textPrimary text-sm font-semibold bg-gradient-to-r from-btnSecondary to-bgPrimary hover:from-bgPrimary hover:to-btnSecondary transition px-6 py-2 rounded-lg flex items-center gap-2"
          >
            Види ги сите <span>➜</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap py-5 justify-center gap-4 ">
        {doctors.slice(0, 3).map((doc, index) => (
          <DoctorCard
            key={index}
            img={doc.img}
            title={doc.title}
            speciality={doc.speciality}
            description={doc.description}
            location={doc.location}
            slug={doc.slug}
          />
        ))}
      </div>
      <div className="px-16">
        <div className=" bg-gradient-to-r from-gradientfrom via-gradientvia to-gradientto p-10 rounded-b-3xl rounded-t-3xl">
          <div className="flex flex-col items-center pb-5">
            <h3 className="text-lg font-medium tracking-widest">
              ТИ ТРЕБА СОВЕТ ОД СПЕЦИЈАЛИСТ?
              <br />
            </h3>
            <h3 className="text-2xl font-bold tracking-wide uppercase">
              Постави прашање на нашиот блог и добиј одговор веднаш!
            </h3>
          </div>
          <div className="flex justify-center">
            <Link
              to={"/blog"}
              className="text-textPrimary text-sm font-semibold bg-gradient-to-r from-btnSecondary to-bgPrimary hover:from-bgPrimary hover:to-btnSecondary transition px-6 py-2 rounded-lg flex items-center gap-2"
            >
              Нашиот Блог <span>➜</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
