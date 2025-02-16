import {useState} from "react";
import DoctorPopUp from "./DoctorPopUp.jsx";

export default function DoctorCard({img, title, description, doctorData}) {
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    function handlePopUp(doctor) {
        setSelectedDoctor(doctor);
    }

    function closePopUp() {
        setSelectedDoctor(null);
    }

    return (
        <>
        <div className="z-40">
            <div className="w-full h-full px-14 flex flex-col bg-cardColor items-center">
                <div className="w-[200px] h-[200px] -mt-16">
                    <img src={img}/>
                </div>
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-black font-medium text-lg">{title}</h2>
                    <p className="text-black">{description}</p>
                </div>
                <div className="py-10">
                    <button onClick={() => handlePopUp(doctorData)} type="button"
                            className="bg-customButton rounded-full text-white px-6 py-2">
                        Види повеќе
                    </button>
                </div>

            </div>
        </div>
            <div>
                {/** Pop-up Overlay **/}
                {selectedDoctor && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                        <div className="relative bg-formbg rounded-xl shadow-lg p-5 w-[550px]">
                            <button onClick={closePopUp}
                                    className="absolute top-3 right-3 bg-stone-200 text-black rounded-full w-8 h-8">
                                ✕
                            </button>
                            <DoctorPopUp
                                img={selectedDoctor.img}
                                doctor={selectedDoctor.doctor}
                                speciality={selectedDoctor.speciality}
                                description={selectedDoctor.description}
                                place={selectedDoctor.place}
                                location={selectedDoctor.location}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}