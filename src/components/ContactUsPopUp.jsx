import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";

export default function ContactUsPopUp({text, description}) {
    return (
        <div className=" rounded-2xl  w-full text-black flex flex-col items-center ">
            <div className="text-2xl font-semibold py-10">
                <h1>Контакт Форма</h1>
            </div>
            <form action="/" className=" w-full h-full px-4 flex flex-col">
                <div className="flex flex-col py-4">
                    <label htmlFor="name" className="ml-3 text-sm text-gray-500">Цело име и презиме*</label>
                    <input type="text" id="fname" name="fname" value="Ана Наунова"
                           className="rounded-3xl bg-stone-200 p-2 w-full border-b-2 border-gradientfrom text-gray-800 font-semibold"/>
                </div>
                <div className="flex flex-col py-4">
                    <label htmlFor="email" className="ml-3 text-sm text-gray-500">Е-пошта*</label>
                    <input type="email" id="email" name="email" value="naunova.a22@yahoo.com"
                           className="rounded-3xl bg-stone-200 p-2 w-full border-b-2 border-gradientfrom text-gray-800 font-semibold"/>
                </div>
                <div className="flex flex-col py-4">
                    <label htmlFor="message" className="ml-3 text-sm text-gray-500">{description}</label>
                    <textarea name="comment" form="usrform"
                              className="rounded-3xl bg-stone-200 p-2 w-full border-b-2 t-2 border-gradientfrom text-gray-800 font-semibold">{text}</textarea>
                </div>
                <div className=" flex justify-center p-5">
                    <input type="submit" value="Submit" className="bg-customButton text-white py-2 px-10 rounded-full"/>
                </div>
            </form>
            <div className="flex flex-row space-x-3 pt-2 text-sm justify-center p-2">
                <a href="/">
                    <div className="flex flex-row">
                        <FontAwesomeIcon icon={faPhone} className="w-6 h-5 text-gray-800"/>
                        <p>+38978891572</p>
                    </div>
                </a>
                    <div className="flex flex-row">
                        <FontAwesomeIcon icon={faLocationDot} className="w-6 h-5 text-gray-800"/>
                        <p>ул.Иван Иванов Балашо</p>
                    </div>
                    <div className="flex flex-row">
                        <FontAwesomeIcon icon={faClock} className="w-6 h-5 text-gray-800"/>
                        <p>08:00-17:00</p>
                    </div>
            </div>
        </div>
    );
}