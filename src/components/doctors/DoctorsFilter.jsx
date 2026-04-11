export default function DoctorsFilter({ filters, setFilters }) {
  function updateField(field, value) {
    setFilters((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-10">
      <div className="bg-formBg p-6 rounded-xl shadow-sm border border-cardBorder flex flex-col md:flex-row gap-4">
        {/* SEARCH */}
        <input
          type="text"
          placeholder="Барај доктор..."
          className="flex-1 px-4 py-2 rounded-lg border border-cardBorder bg-bgPrimary text-textPrimary"
          value={filters.search}
          onChange={(e) => updateField("search", e.target.value)}
        />

        {/* SPECIALITY */}
        <select
          className="px-4 py-2 rounded-lg border border-cardBorder bg-bgPrimary text-textPrimary"
          value={filters.speciality}
          onChange={(e) => updateField("speciality", e.target.value)}
        >
          <option value="">Сите специјалности</option>
          <option value="Неврологија">Неврологија</option>
          <option value="Психологија">Психологија</option>
          <option value="Хирургија">Хирургија</option>
          <option value="Кардиологија">Кардиологија</option>
          <option value="Педијатрија">Педијатрија</option>
          <option value="Дерматологија">Дерматологија</option>
          <option value="Гинекологија">Гинекологија</option>
          <option value="Оториноларингологија">Оториноларингологија</option>
          <option value="Интерна медицина">Интерна медицина</option>
        </select>

        {/* CITY */}
        <select
          className="px-4 py-2 rounded-lg border border-cardBorder bg-bgPrimary text-textPrimary"
          value={filters.city}
          onChange={(e) => updateField("city", e.target.value)}
        >
          <option value="">Сите локации</option>
          <option value="Скопје">Скопје</option>
          <option value="Штип">Штип</option>
          <option value="Кочани">Кочани</option>
          <option value="Битола">Битола</option>
          <option value="Охрид">Охрид</option>
          <option value="Пробиштип">Пробиштип</option>
          <option value="Берово">Берово</option>
          <option value="Куманово">Куманово</option>
          <option value="Св.Николе">Св.Николе</option>
          <option value="Кратово">Кратово</option>
        </select>
      </div>
    </div>
  );
}
