import { useMesSelector } from '../../store/storeSelectors';

export const MonthSelector = () => {
    const miMes = useMesSelector(state => state.mes);
    const mes = useMesSelector(state => state.cambioSelectorMes);

    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const handleChange = (e) => {
        // onMonthChange(e.target.value);
        mes(e.target.value);
    };

    return (
        <div className='mt-1'>
            <label htmlFor="month" className='labelSelect'>Mes:</label>
            <select 
                className="form-select form-select-sm selectores" 
                aria-label="Small select example" 
                value={miMes} 
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
