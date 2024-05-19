import { useAnnoSelector } from '../../store/storeSelectors';

export const YearSelector = () => {
    const miAnno = useAnnoSelector(state => state.anno);
    const anno = useAnnoSelector(state => state.cambioSelectorAnno);

    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(10), (val, index) => currentYear - index);

    const handleChange = (e) => {
        // onYearChange(e.target.value);
        anno(e.target.value);
    };

    return (
        <div className='col-3 mt-1'>
            <label htmlFor="year">Año:</label>
            <select 
                className="form-select form-select-sm" 
                aria-label="Small select example" 
                value={miAnno} 
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
