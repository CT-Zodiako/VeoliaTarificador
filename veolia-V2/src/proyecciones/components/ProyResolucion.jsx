import { useEffect, useState } from "react";

 
export const ProyResolucion = ({resolucion}) => {
    const [select, setSelect] = useState('');

    const onResolucion = (event) => {
        setSelect(Number(event.target.value));
    }

    useEffect(() => {
        setSelect(Number(resolucion));
    }, [resolucion]);

    return(
    <>
        <div>
            <div>
                <input 
                    type="radio" 
                    name="formulario.PROYTIPO100"
                    value={1}
                    checked={select === 1}
                    onChange={onResolucion}
                />
                <label className="form-label">Ingresos</label>
            </div>
            <div>
                <input 
                    type="radio" 
                    name="formulario.PROYTIPO100"
                    value={2}
                    checked={select === 2}
                    onChange={onResolucion}
                />
                <label className="form-label">Sub & Con</label>
            </div>
        </div>
    </>
  )
};