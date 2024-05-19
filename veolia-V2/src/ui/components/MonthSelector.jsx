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
        <div className='col-3 mt-1'>
            <label htmlFor="month">Mes:</label>
            <select 
                className="form-select form-select-sm" 
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
