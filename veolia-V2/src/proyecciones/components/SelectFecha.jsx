import { useState } from 'react';

export const SelectFecha = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(10), (val, index) => currentYear - index);
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    // Estados separados para año y mes
    const [selectedYear, setSelectedYear] = useState('');
    console.log('selectedYear', selectedYear);
    
    const [selectedMonth, setSelectedMonth] = useState('');
    console.log('selectedMonth', selectedMonth);
    
    const handleChange = (e) => {
        console.log('event', e.target.value);
        
        const [year, month] = e.target.value.split('-');
        setSelectedYear(year);
        setSelectedMonth(month);
    };

    return (
        <div className='mt-1'>
            <label htmlFor="yearMonth" className='labelSelect'>Seleccionar Año y Mes:</label>
            <select 
                className="form-select form-select-sm selectores" 
                aria-label="Small select example" 
                value={`${selectedYear}-${selectedMonth}`} 
                onChange={handleChange}
            >
                {/* <option value="" disabled>Seleccionar Año y Mes</option> */}
                {years.map((year) => (
                    <optgroup key={year} label={year}>
                        {months.map((month, index) => (
                            <option key={`${year}-${index + 1}`} value={`${year}-${index + 1}`}>
                                {`${month}/${year}`}
                            </option>
                        ))}
                    </optgroup>
                ))}
            </select>
        </div>
    );
};
