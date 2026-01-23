import { specialties } from "../../helperData/specialties";

export default function AboutSpecialties() {
  return (
    <section className="bg-bgPrimary py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-textPrimary">
            Наши Специјалности
          </h2>
          <p className="text-textSecondary mt-3">
            Работиме со доктори од различни медицински области.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 flex flex-col items-center text-center text-textPrimary
              border border-cardBorder shadow-sm transition-all duration-300 hover:bg-btnPrimary hover:text-white  hover:shadow-xl hover:-translate-y-2  "
            >
              <div className="w-20 h-20 mb-5 overflow-hidden bg-bgPrimary rounded-xl flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="font-semibold text-lg ">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
