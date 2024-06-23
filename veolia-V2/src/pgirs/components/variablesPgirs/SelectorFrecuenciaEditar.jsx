import { useState } from "react";
import { frecuencias } from "../data";

 export const SelectorFrecuenciaEditar = ({label, onEditarVariable}) => {
    const [valorFrecuencia, setValorFrecuencia] = useState(label);
    
    const onFrecuenciaChange = (event) => {
        onEditarVariable(event);
        setValorFrecuencia(event.target.value);
    }

  return(
    <>
        <select 
            className="form-select" 
            aria-label="Default select example"
            name="PGRIFRECUENCIA"
            value={valorFrecuencia}
            onChange={onFrecuenciaChange}
        >
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