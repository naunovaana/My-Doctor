import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Benefits() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  return (
    <section
      ref={ref}
      className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-20"
    >
      <div className="flex flex-col justify-center items-center space-y-10">
        <h4 className="font-bold text-3xl sm:text-4xl text-textPrimary px-4 sm:px-16 text-center">
          Ние Помогнавме на 3000+ Пациенти да го Пронајдат Соодветниот
          Специјалист
        </h4>

        <div className="w-full flex flex-wrap justify-center gap-6">
          {/* Registered Users */}
          <div className="bg-gradient-to-tr from-accentBlue to-bgPrimary border-cardBorder border-2 p-6 sm:p-7 rounded-bl-xl rounded-tr-xl min-w-[250px] flex-1 max-w-[300px] hover:shadow-lg transition text-center">
            <h5 className="text-textPrimary text-3xl sm:text-4xl font-bold">
              {inView && <CountUp end={625} duration={2} />}
            </h5>
            <p className="text-textSecondary text-md sm:text-lg mt-2">
              Регистрирани корисници
            </p>
          </div>

          {/* Shared Tips */}
          <div className="bg-gradient-to-bl from-btnSecondary/70 to-bgPrimary border-cardBorder border-2 p-6 sm:p-7 rounded-bl-xl rounded-tr-xl min-w-[250px] flex-1 max-w-[300px] hover:shadow-lg transition text-center">
            <h5 className="text-textPrimary text-3xl sm:text-4xl font-bold">
              {inView && <CountUp end={5000} duration={2} suffix="+" />}
            </h5>
            <p className="text-textSecondary text-md sm:text-lg mt-2">
              Споделени совети
            </p>
          </div>

          {/* Positive Feedback */}
          <div className="bg-gradient-to-tr from-accentBlue to-bgPrimary border-cardBorder border-2 p-6 sm:p-7 rounded-bl-xl rounded-tr-xl min-w-[250px] flex-1 max-w-[300px] hover:shadow-lg transition text-center">
            <h5 className="text-textPrimary text-3xl sm:text-4xl font-bold">
              {inView && (
                <CountUp end={98.6} duration={2} decimals={1} suffix="%" />
              )}
            </h5>
            <p className="text-textSecondary text-md sm:text-lg mt-2">
              Позитивен фидбек
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
