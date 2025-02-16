import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="w-full flex flex-row p-3 text-white z-50 hidden md:flex">
                <div className="z-50 flex items-center">
                    <img src="/logo_new.png" className="w-[300px] h-[50px] z-50" />
                </div>
                <div className="flex justify-end w-full z-50">
                    <div className="w-[80%] flex flex-row justify-between items-center">
                        <ul className="flex flex-row uppercase space-x-16 lg:space-x-32">
                            <li><a href="/">Дома</a></li>
                            <li><a href="/doctors">Доктори</a></li>
                            <li><a href="/blog">Блог</a></li>
                            <li>
                                <button type="button" onClick={() => document.getElementById("aboutus-section").scrollIntoView({ behavior: "smooth" })} className="uppercase"> За Нас</button>
                            </li>
                        </ul>
                        <form action="/" className="relative w-[30%] border-2 border-stone-200 rounded-full hidden xl:block">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="fname"
                                    name="fname"
                                    className="w-full border-2 border-blue-950 rounded-full py-2 pr-12 pl-4 focus:outline-none"
                                    placeholder="Пронајди доктор..."
                                />
                                <button
                                    type="submit"
                                    formAction="/"
                                    className="absolute inset-y-0 right-0 px-4 text-white bg-blue-950 rounded-r-full hover:bg-blue-800"
                                >
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="w-full flex items-center p-3 text-white md:hidden relative z-50">
                <img src="/logo_new.png" className="w-[150px] h-[40px]" />
                <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} className="ml-auto">
                    <FontAwesomeIcon icon={isMobileNavOpen ? faTimes : faBars} className="text-2xl" />
                </button>
            </nav>
            {isMobileNavOpen && (
                <div className="fixed top-0 right-0 w-2/3 h-full bg-blue-950 text-white p-5 z-50 flex flex-col space-y-6 shadow-lg">
                    <button onClick={() => setIsMobileNavOpen(false)} className="self-end text-2xl">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <ul className="flex flex-col space-y-4 uppercase text-lg">
                        <li><a href="/">Дома</a></li>
                        <li><a href="/doctors">Доктори</a></li>
                        <li><a href="/blog">Блог</a></li>
                        <li>
                            <button type="button" onClick={() => {
                                document.getElementById("aboutus-section").scrollIntoView({ behavior: "smooth" });
                                setIsMobileNavOpen(false);
                            }} className="uppercase"> За Нас</button>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}
