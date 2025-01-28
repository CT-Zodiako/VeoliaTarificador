import { useState } from "react";
import { SelectorUsuarios } from "../components/SelectorUsuarios";
import { AsignacionSistemas } from "../components/AsignacionSistemas";

export const PermisosPorSistema = () => {
    const [usuarioAps, setUsuarioAps] = useState([])
    
    const handleUsuarioAps = (aps) => {
      setUsuarioAps(aps)
    };

    return(
    <>
        <div className='container'>
            <SelectorUsuarios handleUsuarioAps={handleUsuarioAps}/>
            <hr />
            <AsignacionSistemas sisuId={usuarioAps}/>
        </div>
    </>
  )
};