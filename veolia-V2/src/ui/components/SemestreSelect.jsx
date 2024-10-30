import { useEffect, useState } from "react";
import { useSemestreSelector } from "../../store/storeSelectors";

 export const SemestreSelect = () => {
    const semestre = useSemestreSelector((state) => state.semestre);
    const setSelected = useSemestreSelector((state) => state.cambioSelectorSemestre);

    const optiones = [ 
        {
            sem: 1,
            label: 'Primer semestre'
        },
        {
            sem: 2,
            label: 'Segundo semestre'
        }
    ];

    const onSeleccionar = (event) => {
      setSelected(event.target.value);
    }

    useEffect(() => {
        if(semestre){
            setSelected(semestre);
        }
    }, [semestre]);

    return(
    <>
      <div className='mt-1'>
            <label htmlFor="aps"className="labelSelect" >Semestre</label>
            <select 
                className="form-select form-select-sm selectores" 
                aria-label="Small select example" 
                value={semestre} 
                onChange={onSeleccionar}
            >
                {/* <option value="" >Seleccionar Semestre</option> */}
                {optiones.map((item) => (
                <option key={item.sem} value={item.sem}>
                    {item.label}
                </option>
                ))}
            </select>
        </div>
    </>
  )
};