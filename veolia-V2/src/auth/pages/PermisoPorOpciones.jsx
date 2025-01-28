import { useState } from "react";
import { SelectorUsuarios } from "../components/SelectorUsuarios";
import { AsignacionOpciones } from "../components/AsignacionOpciones";
import { SelectorSistema } from "../components/SelectorSistema";
 
export const PermisoPorOpciones = () => {
    const [usuarioAps, setUsuarioAps] = useState([])
    // const [sistema, setSistema] = useState('');
    
    const handleUsuarioAps = (aps) => {
        setUsuarioAps(aps)
    };

    return(
    <>
        <div className='container'>
            <SelectorUsuarios handleUsuarioAps={handleUsuarioAps}/>
            {/* <SelectorSistema usuario={sisuCorreo} sistema={sistema} setSistema={setSistema}/> */}
            <hr />
            <AsignacionOpciones usuarioAps={usuarioAps}/>
        </div>
    </>
  )
};