export const SelectorSistemas = ({ dataSistemas, sistema, setSistema }) => {

    const handleChange = (event) => {
        setSistema(event.target.value);
    };

    return(
    <>
        <div>
            <label htmlFor="sistema">Sistema:</label>
            <select
                style={{ background: 'rgb(255, 255, 255)', padding: '5px', border: '1px solid rgba(0, 0, 0, 0.3)', borderRadius: '5px', width: '20rem' }}
                className="form-select form-select-sm"
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