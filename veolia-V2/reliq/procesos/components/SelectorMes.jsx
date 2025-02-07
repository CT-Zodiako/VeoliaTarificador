export const SelectorMes = () => {
    const [ mess, setMess] = useState('');
    
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const handleChange = (e) => {
        setMess(e.target.value);
    };

    return (
        <div className='mt-1 container-select'>
            <label htmlFor="month" className='label-select'>Mes:</label>
            <select 
                className="form-select form-select-sm style-selector" 
                aria-label="Small select example" 
                value={mess} 
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
    