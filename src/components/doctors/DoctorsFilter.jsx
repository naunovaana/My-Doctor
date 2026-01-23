export default function DoctorsFilter({ filters, setFilters }) {
  function updateField(field, value) {
    setFilters((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-10">
      <div className="bg-formBg p-6 rounded-xl shadow-sm border border-cardBorder flex flex-col md:flex-row gap-4">
        {/* Search Field */}
        <input
          type="text"
          placeholder="Барај доктор..."
          className="flex-1 px-4 py-2 rounded-lg border border-cardBorder bg-bgPrimary text-textPrimary"
          value={filters.search}
          onChange={(e) => updateField("search", e.target.value)}
        />

        {/* Speciality Filter */}
        <select
          className="px-4 py-2 rounded-lg border border-cardBorder bg-bgPrimary text-textPrimary"
          value={filters.speciality}
          onChange={(e) => updateField("speciality", e.target.value)}
        >
          <option value="">Сите специјалности</option>
          <option value="Неврологија">Неврологија</option>
          <option value="Психологија">Психологија</option>
          <option value="Хирургија">Хирургија</option>
          <option value="Хирургија">Кардиологија</option>
          <option value="Хирургија">Педијатрија</option>
          <option value="Хирургија">Дерматологија</option>
          <option value="Хирургија">Гинекологија</option>
          <option value="Хирургија">Оториноларингологија</option>
          <option value="Хирургија">Интерна медицина</option>
        </select>

        {/* Location Filter */}
        <select
          className="px-4 py-2 rounded-lg border border-cardBorder bg-bgPrimary text-textPrimary"
          value={filters.location}
          onChange={(e) => updateField("location", e.target.value)}
        >
          <option value="">Сите локации</option>
          <option value="Скопје">Скопје</option>
          <option value="Скопје">Штип</option>
          <option value="Скопје">Кочани</option>
          <option value="Скопје">Битола</option>
          <option value="Скопје">Охрид</option>
          <option value="Скопје">Пробиштип</option>
          <option value="Скопје">Берово</option>
          <option value="Скопје">Куманово</option>
          <option value="Скопје">Св.Николе</option>
          <option value="Скопје">Кратово</option>
        </select>
      </div>
    </div>
  );
}
