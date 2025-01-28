import { useEffect, useState } from "react";
import { getSistemas } from "../services/sistemas";

export const SelectorSistemaLogin = ({ usuario, sistema, setSistema }) => {
    const [data, setData] = useState([]);

    const query = {
        correo: usuario,
    };

    const dataSistemas = async () => {
        try {
            const response = await getSistemas(query);
            setData(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        setSistema(event.target.value);
    };

    useEffect(() => {
        dataSistemas();
    }, [usuario]);

    return(
    <>
        <div className='mt-1 container-select'>
            <label htmlFor="sistema">Sistema:</label>
            <select
                style={{ background: 'rgba(150, 150, 150, 0.1)', padding: '10px', border: '1px solid rgba(0, 0, 0, 0.3)', borderRadius: '5px' }}
                className="form-select form-select-sm" 
                aria-label="Small select example"
                value={sistema}
                onChange={handleChange}
            >
                <option value="" disabled>Selecionar Sistema</option>
                {data.length > 0 && 
                    data.map((item) => (
                    <option key={item.SIST_ID} value={item.SIST_ID}>
                        {item.SIST_NOMBRE}
                    </option>
                ))}
            </select>   
        </div>
    </>
  )
};