import { SelectorUsuarios } from "../components/SelectorUsuarios";
import { AsignacionOpciones } from "../components/AsignacionOpciones";
import { useState } from "react";
 
export const PermisoPorOpciones = () => {
    const [usuarioAps, setUsuarioAps] = useState([])

    const handleUsuarioAps = (aps) => {
        setUsuarioAps(aps)
    };
    return(
    <>
        <div className='container'>
            <SelectorUsuarios handleUsuarioAps={handleUsuarioAps}/>
            <hr />
            <AsignacionOpciones usuarioAps={usuarioAps}/>
        </div>
    </>
  )
};