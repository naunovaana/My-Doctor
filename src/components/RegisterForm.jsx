export default function RegisterForm() {
    return (
        <div className="rounded-2xl  w-full text-black flex flex-col items-center">
            <div className="py-10 flex flex-col items-center text-center">
                <h1 className="text-2xl font-semibold pb-6 tracking-wide">Регистрирај Се</h1>
                <p className="text-sm tracking-wide">Пополнете ја формата за да креирате нов профил*</p>
            </div>
            <form action="/">
                <div className="flex flex-col">
                    <div className="py-2">
                        <label htmlFor="email" className="ml-3"><b>Емаил</b></label>
                        <input type="text" placeholder="Внеси Емаил" name="email" id="email" required
                               className="w-full rounded-3xl bg-stone-200 p-2 border-2 border-gradientfrom text-gray-800 font-semibold"/>
                    </div>
                    <div className="py-2">
                        <label htmlFor="psw" className="ml-3"><b>Лозинка</b></label>
                        <input type="password" placeholder="Внеси Лозинка" name="psw" id="psw" required
                               className="rounded-3xl bg-stone-200 p-2 w-full border-2 border-gradientfrom text-gray-800 font-semibold"/>
                    </div>
                    <div className="py-2">
                        <label htmlFor="psw-repeat" className="ml-3"><b>Повтори Лозинка</b></label>
                        <input type="password" placeholder="Повтори лозинка" name="psw-repeat" id="psw-repeat" required
                               className="rounded-3xl bg-stone-200 p-2 w-full border-2 border-gradientfrom text-gray-800 font-semibold"/>
                    </div>
                    <p className="text-sm text-gray-600 pb-4 px-2">Со креирање на нов профил ги прифаќате нашите <a href="#" className="">Услови и Приватност</a>.</p>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-customButton text-white py-2 px-10 rounded-full border-2 border-customBlue">Регистрирај
                            профил
                        </button>
                    </div>
                </div>
                <div className="flex justify-center pt-4">
                    <p className="text-sm tracking-wide">Веќе имаш креирано профил?  <a href="#" className="text-lg text-customBlue font-semibold"> Најави се</a>.</p>
                </div>
            </form>
        </div>
    );
}