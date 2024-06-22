import { useState } from "react";

 export const SelectorFrecuencia = ({frecuencia, index, onFormFrecuencia}) => {
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
                frecuencia.map((item) =>(
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