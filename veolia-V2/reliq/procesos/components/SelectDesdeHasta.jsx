import { useState } from "react";

export const SelectDesdeHasta = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = (now.getMonth() + 1).toString().padStart(2, "0"); // Asegura formato MM

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  // Generar la fecha sin modificar el estado
  const selectedDate = `${selectedYear}/${selectedMonth}`;

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <select value={selectedYear} onChange={handleYearChange}>
        {Array.from({ length: 10 }, (_, i) => currentYear - i).map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>

      <select value={selectedMonth} onChange={handleMonthChange}>
        {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0")).map((month) => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>
      <p>Fecha seleccionada: {selectedDate}</p>
    </div>
  );
};
