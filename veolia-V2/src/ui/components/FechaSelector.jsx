import React, { useState } from 'react';

const YearMonthSelector = ({ onYearMonthChange }) => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

    const handleYearChange = (e) => {
        const newYear = e.target.value;
        setSelectedYear(newYear);
        onYearMonthChange(newYear, selectedMonth);
    };

    const handleMonthChange = (e) => {
        const newMonth = e.target.value;
        setSelectedMonth(newMonth);
        onYearMonthChange(selectedYear, newMonth);
    };

    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
        years.push(i);
    }

    const months = [
        { value: 1, name: 'Enero' },
        { value: 2, name: 'Febrero' },
        { value: 3, name: 'Marzo' },
        { value: 4, name: 'Abril' },
        { value: 5, name: 'Mayo' },
        { value: 6, name: 'Junio' },
        { value: 7, name: 'Julio' },
        { value: 8, name: 'Agosto' },
        { value: 9, name: 'Septiembre' },
        { value: 10, name: 'Octubre' },
        { value: 11, name: 'Noveimbre' },
        { value: 12, name: 'Diciembre' },
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="year">AÑO:</label>
                        <select
                            className="form-select form-select-sm" aria-label="Small select example" defaultValue=""
                            id="year"
                            value={selectedYear}
                            onChange={handleYearChange}
                        >
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="month">MES:</label>
                        <select
                            className="form-select form-select-sm" aria-label="Small select example" defaultValue=""
                            id="month"
                            value={selectedMonth}
                            onChange={handleMonthChange}
                        >
                            {months.map((month) => (
                                <option key={month.value} value={month.value}>
                                    {month.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YearMonthSelector;
