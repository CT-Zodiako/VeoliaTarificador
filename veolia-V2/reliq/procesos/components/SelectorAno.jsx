export const SelectorAno = () => {
    const [ anno, setAnno ] = useState();
    
    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(10), (val, index) => currentYear - index);

    const handleChange = (event) => {
        setAnno(event.target.value);
    };

    return (
        <div className='mt-1 container-select'>
            <label htmlFor="year" className='label-select'>Año:</label>
            <select 
                className="form-select form-select-sm style-selector" 
                aria-label="Small select example" 
                value={anno} 
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