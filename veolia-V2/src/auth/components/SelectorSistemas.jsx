export const SelectorSistemas = ({ dataSistemas, sistema, setSistema }) => {

    const handleChange = (event) => {
        setSistema(event.target.value);
    };

    return(
    <>
        <div>
            <label htmlFor="sistema">Sistema:</label>
            <select
                className="form-select form-select-sm style-selector"
                aria-label="Small select example"
                value={sistema}
                onChange={handleChange}
            >
                <option value="" disabled>Selecionar Sistema</option>
                {dataSistemas.length > 0 && 
                    dataSistemas.map((item) => (
                    <option key={item.SIST_ID} value={item.SIST_ID}>
                        {item.SIST_NOMBRE}
                    </option>
                ))}
            </select>   
        </div>
    </>
  )
};