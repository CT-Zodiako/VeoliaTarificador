import React, { useState } from 'react';

export const MonthSelector = ({ onMonthChange }) => {
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const [selectedMonth, setSelectedMonth] = useState('');

    const handleChange = (e) => {
        setSelectedMonth(e.target.value);
        onMonthChange(e.target.value);
    };

    return (
        <div className='col-3 mt-1'>
            <label htmlFor="month">Mes:</label>
            <select 
                className="form-select form-select-sm" 
                aria-label="Small select example" 
                value={selectedMonth} 
                onChange={handleChange}
            >
                <option value="" disabled>Seleccionar Mes</option>
                {months.map((month, index) => (
                    <option key={index} value={index + 1}>
                        {month}
                    </option>
                ))}
            </select>
        </div>
    );
};
