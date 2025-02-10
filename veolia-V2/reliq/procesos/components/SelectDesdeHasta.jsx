import { useEffect } from 'react';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

const years = Array.from(new Array(20), (val, index) => currentYear - index);
const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export const SelectDesdeHasta = ({ onFormulario, label, value }) => {
    const handleChange = (event) => {        
        const [year, month] = event.target.value.split('-');
        const fecha = `${(year)}${String(month).padStart(2, '0')}`;
        onFormulario(fecha);
    };

    useEffect(() => {
        onFormulario(`${currentYear}${String(currentMonth).padStart(2, '0')}`);
    }, []);

    return (
        <div className='mt-1 container-select'>
            <label htmlFor="yearMonth" className='label-select'>{label}: </label>
            <select 
                className="form-select form-select-sm style-selector" 
                aria-label="Small select example" 
                value={value}
                onChange={handleChange}
            >
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
