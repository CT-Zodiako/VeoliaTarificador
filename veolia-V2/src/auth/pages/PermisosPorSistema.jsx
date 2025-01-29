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
          <div style={{ display: 'flex', justifyContent: 'center', gap: '200px' }}>
              <SelectorUsuarios handleUsuarioAps={handleUsuarioAps}/>
          </div>
            <hr />
            <AsignacionSistemas sisuId={usuarioAps}/>
        </div>
    </>
  )
};