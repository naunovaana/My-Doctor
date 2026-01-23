export default function AboutValues() {
  const values = [
    {
      title: "Нашата Мисија",
      text: "Да овозможиме брз, едноставен и сигурен пристап до проверени доктори и здравствени совети.",
    },
    {
      title: "Нашата Визија",
      text: "Да станеме водечка здравствена платформа во регионот, каде секој пациент ќе се чувствува информиран и сигурен.",
    },
    {
      title: "Нашите Вредности",
      text: "Доверба, транспарентност, професионалност и грижа за секој поединец.",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((item, i) => (
          <div
            key={i}
            className="bg-btnSecondary/40 border border-cardBorder rounded-xl p-8 text-center hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-textPrimary mb-4">
              {item.title}
            </h3>
            <p className="text-textSecondary text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
