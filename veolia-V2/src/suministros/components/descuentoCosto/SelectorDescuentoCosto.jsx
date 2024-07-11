import { useEffect, useState } from "react";
import { getSelectDescuentoCosto } from "../../service/descuentoCostoServicio";

 export const SelectorDescuentoCosto = ({data, onFormChange}) => {
    const [valorDescuentoCosto, setValorDescuentoCosto] = useState();
    const [selectDescuento, setSelectDescuento] = useState([]);

    const fetchData = async () => {
        try {
            const select = await getSelectDescuentoCosto(data);
            setSelectDescuento(select);
        }
        catch (error) {
            console.error(error);
        }
    }

    const onDescuentoCostoChange = (event) => {
        setValorDescuentoCosto(event.target.value);
        onFormChange(event);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
    <>
        <div>
            <select 
                className="form-select" 
                aria-label="Default select example"
                label="Frecuencia"
                name="PARA_COSTO20010"
                value={valorDescuentoCosto}
                onChange={onDescuentoCostoChange}
            >
                {
                    selectDescuento.map((item) =>(
                        <option 
                            key={item.id} 
                            value={item.PARA_PARA}
                        >
                            {item.PARA_NOMBRE}
                        </option>
                    ))
                }
            </select>
        </div>
    </>
  )
};
