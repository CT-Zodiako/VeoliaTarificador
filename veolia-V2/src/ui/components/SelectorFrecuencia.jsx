import { useState } from "react";

 export const SelectorFrecuencia = ({frecuencia, name, onFormChange}) => {
    const [valorFrecuencia, setValorFrecuencia] = useState();
    
    const onFrecuenciaChange = (event) => {
        onFormChange(event);
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
            name={name}
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