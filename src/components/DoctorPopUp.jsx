import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faGlobe, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";

export default function DoctorPopUp({img,doctor,speciality,description,place,location}) {
    return (
        <div className=" rounded-2xl text-black w-full">
            <div className=" flex flex-col items-center p-5">
                <img src={img} className="w-[150px] h-[145px]"/>
                <h1 className="text-2xl font-semibold">{doctor}</h1>
                <h2 className="tracking-widest font-medium">{speciality}</h2>
            </div>
            <div
                className="rounded-3xl bg-lightblue/30 border-2 border-gray-400 flex flex-col  items-center px-2 pt-7 text-center space-y-2">
                <div className="text-gray-800 font-semibold text-lg tracking-wide">
                    <h2>{description}</h2>
                </div>
                <div className="flex flex-col text-sm text-gray-700">
                    <p>{place}</p>
                    <p>{location}</p>
                </div>
                <div className="flex flex-col items-center p-2 text-gray-800 font-semibold">
                    <h2 className="tracking-widest">Контакт</h2>
                    <div className="flex flex-row space-x-2 pt-2">
                        <a href="/">
                            <div className="p-1 rounded-full border-2 border-gray-400">
                                <FontAwesomeIcon icon={faPhone} className="w-7 h-6 text-gray-800"/>
                            </div>
                        </a>
                        <a href="/">
                            <div className="p-1 rounded-full border-2 border-gray-400">
                                <FontAwesomeIcon icon={faEnvelope} className="w-7 h-6 text-gray-800"/>
                            </div>
                        </a>
                        <a href="/">
                            <div className="p-1 rounded-full border-2 border-gray-400">
                                <FontAwesomeIcon icon={faGlobe} className="w-7 h-6 text-gray-800"/>
                            </div>
                        </a>
                        <a href="/">
                            <div className="p-1 rounded-full border-2 border-gray-400">
                                <FontAwesomeIcon icon={faLocationDot} className="w-7 h-6 text-gray-800"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pt-4 items-center">
                <img src="/src/assets/maps.png"/>
                <div className="text-[10px] mt-2">
                    <p>*Disclaimer this is not an official doctors document, it may contain deprecated or irrelevant
                        information</p>
                </div>
            </div>
        </div>
    );
}