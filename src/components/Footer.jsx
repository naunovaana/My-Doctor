import {useState} from "react";
import RegisterForm from "./RegisterForm.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope, faGlobe, faLocationDot} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    const [open, setOpen] = useState(false);

    function handleOpen(event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        setOpen(true);
    }

    function closePopUp() {
        setOpen(false);
    }

    return (
        <div className="relative bg-footer-bg bg-cover w-full z-50">
            <div className="relative flex flex-col items-center text-white pt-36 w-full ">
                <div className="md:py-5 pb-10 tracking-widest font-extralight text-2xl md:text-3xl  text-center">
                    <h1>ПРИДРУЖИ СЕ НА НАШАТА ПЛАТФОРМА СЕГА</h1>
                </div>
                <form action="/" className="relative w-[30%]  border-2 border-stone-200 rounded-full">
                    <div className="relative">
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            className="w-full border-2 border-homeBlue rounded-full py-2 pr-12 pl-4 focus:outline-none text-black"
                            placeholder="Твојата емаил адреса..."
                        />
                        <button
                            type="submit"
                            formAction="/"
                            className="absolute inset-y-0 right-0 px-4 text-white bg-customBlue rounded-full hover:bg-blue-950 "
                            onClick={handleOpen}
                        >
                            Регистрирај се
                        </button>
                    </div>
                </form>
                <div className="flex flex-row space-x-8 pb-5 pt-7">
                    <a href="/">
                        <div className="bg-customBlue p-2 rounded-full border-2 border-white">
                            <FontAwesomeIcon icon={faPhone} className="w-7 h-6"/>
                        </div>
                    </a>
                    <a href="/">
                        <div className="bg-customBlue p-2 rounded-full border-2 border-white">
                            <FontAwesomeIcon icon={faEnvelope} className="w-7 h-6"/>
                        </div>
                    </a>
                    <a href="/">
                        <div className="bg-customBlue p-2 rounded-full border-2 border-white">
                            <FontAwesomeIcon icon={faGlobe} className="w-7 h-6"/>
                        </div>
                    </a>
                    <a href="/">
                        <div className="bg-customBlue p-2 rounded-full border-2 border-white">
                            <FontAwesomeIcon icon={faLocationDot} className="w-7 h-6"/>
                        </div>
                    </a>
                </div>
                <p className="text-sm">© 2025 Мој Доктор™ | Аll rights reserved | www.mojdoktor.mk </p>
            </div>

            {/** Pop-up Overlay **/}
            {open && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                    <div className="relative bg-formbg rounded-xl shadow-lg p-5 w-[500px]">
                        <button onClick={closePopUp}
                                className="absolute top-3 right-3 bg-stone-200 text-black rounded-full w-8 h-8">
                            ✕
                        </button>
                        <RegisterForm/>
                    </div>
                </div>
            )}
        </div>
    )
}