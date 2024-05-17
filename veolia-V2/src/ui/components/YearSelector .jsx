import React, { useState } from 'react';

export const YearSelector = ({ onYearChange }) => {
    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(10), (val, index) => currentYear - index);

    const [selectedYear, setSelectedYear] = useState('');

    const handleChange = (e) => {
        setSelectedYear(e.target.value);
        onYearChange(e.target.value);
    };

    return (
        <div className='col-3 mt-1'>
            <label htmlFor="year">Año:</label>
            <select 
                className="form-select form-select-sm" 
                aria-label="Small select example" 
                value={selectedYear} 
                onChange={handleChange}
            >
                <option value="" disabled>Seleccionar Año</option>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
};
