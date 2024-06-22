import { useState } from "react";
import {frecuencias} from "./datas";

 export const SelectorFrecuencia = ({index, onFormFrecuencia}) => {
    const [valorFrecuencia, setValorFrecuencia] = useState();
    
    const onFrecuenciaChange = (event) => {
        onFormFrecuencia(index, event);
        setValorFrecuencia(event.target.value);
    }

  return(
    <>
        <select 
            className="form-select" 
            aria-label="Default select example"
            label="Frecuencia"
            value={valorFrecuencia}
            onChange={onFrecuenciaChange}
        >
            <option value=''>Frecuencia</option>
            {
                frecuencias.map((item) =>(
                    <option 
                        key={item.id} 
                        value={item.id}
                    >
                        {item.nombre}
                    </option>
                ))
            }
        </select>
    </>
  )
};