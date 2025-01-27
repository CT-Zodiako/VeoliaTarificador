import { useEffect, useState } from "react";
import { getSistemas } from "../services/sistemas";

export const SelectorSistema = ({ usuario }) => {
    const [data, setData] = useState([]);
    const [sistema, setSistema] = useState('');

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
        <div>
            <label htmlFor="sistema">Sistema:</label>
            <select
                className="form-select form-select-sm style-selector"
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