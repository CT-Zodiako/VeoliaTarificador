import { useEffect, useState } from 'react'
 
export const SelectCargueInformacion = ({opciones, label, seleccion}) => {
    const [opcion, setOpcion] = useState([]);
    const [selected, setSelected] = useState('');

    const onSeleccionar = (event) => {
      setSelected(event.target.value);
      seleccion(event.target.value);
    }

    useEffect(() => {
        setOpcion(opciones);
    }, [opciones]);
    
    return(
    <>
      <div className='mt-1'>
            <select 
                className="form-select form-select-sm select_empresa" 
                aria-label="Small select example" 
                value={selected} 
                onChange={onSeleccionar}
            >
                <option value="" >{label}</option>
                {opcion.map((item) => (
                <option key={item.EMPR_EMPR} value={item.EMPR_EMPR}>
                    {item.EMPR_NOMBRE}
                </option>
                ))}
            </select>
        </div>
    </>
  )
};