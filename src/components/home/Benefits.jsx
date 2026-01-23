export default function Benefits() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-20">
      <div className=" flex flex-col justify-center items-center space-y-10 ">
        <h4 className="font-bold text-3xl text-textPrimary px-16 text-center">
          Ние Помогнавме на 3000+ Пациенти да го Пронајдат Соодветниот
          Специјалист
        </h4>
        <div className="w-full flex flex-row justify-evenly items-center  py-10">
          <div className="bg-accentBlue/70 border-cardBorder border-2 p-7 rounded-bl-xl rounded-tr-xl min-w-[25%] hover:shadow-lg transition">
            <h5 className="text-textPrimary text-3xl font-bold">625</h5>
            <p className="text-textSecondary text-md">Регистрирани корисници</p>
          </div>
          <div className="bg-btnSecondary/70 border-cardBorder border-2 p-7 rounded-bl-xl rounded-tr-xl min-w-[25%] hover:shadow-lg transition">
            <h5 className="text-textPrimary text-3xl font-bold">5000+</h5>
            <p className="text-textSecondary text-md">Споделени совети</p>
          </div>
          <div className="bg-accentBlue/70 border-cardBorder border-2 p-7 rounded-bl-xl rounded-tr-xl min-w-[25%] hover:shadow-lg transition">
            <h5 className="text-textPrimary text-3xl font-bold">98.6%</h5>
            <p className="text-textSecondary text-md">Позитивен фидбек</p>
          </div>
        </div>
      </div>
    </section>
  );
}
