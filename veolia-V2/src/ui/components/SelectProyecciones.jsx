import { useEffect, useState } from "react";
import { useApsSelector, useProyeccionesSelector } from "../../store/storeSelectors";
import { getProyec } from '../../informeProyecciones/service/informesProyeccionesService';

 export const SelectProyecciones = () => {
    const aps = useApsSelector(state => state.aps);
    const selectedProy = useProyeccionesSelector(state => state.proy);
    const setSelectProyec = useProyeccionesSelector(state => state.cambioSelectorProyeciones);
    const [ proyecciones, setProyecciones ] = useState([]);

    const data = {
        APSA_ID : aps
    }

    const getProyecciones = async() => {
        try {
            const responce = await getProyec(data);
            setProyecciones(responce);
        } catch {
            console.error('no se pudo realizar la consulta');    
        }
    }

    const handleChange = (event) => {
        setSelectProyec(event.target.value)
    }

    useEffect(() =>{
        if(aps){
            getProyecciones();
        }
    }, [aps])

    return(
    <>
        <div className='mt-1'>
            <label htmlFor="aps"className="labelSelect" >Proyecciones:</label>
            <select 
                className="form-select form-select-sm selectores" 
                aria-label="Small select example" 
                value={selectedProy} 
                onChange={handleChange}
            >
                <option value="" disabled>Selecionar Proyecciones</option>
                {proyecciones.map((item) => (
                <option key={item.PROYID} value={item.PROYID}>
                    {item.PROYNOMBRE}
                </option>
                ))}
            </select>
        </div>
    </>
  )
};