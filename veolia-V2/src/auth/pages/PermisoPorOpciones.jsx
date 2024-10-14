import { SelectorUsuarios } from "../components/SelectorUsuarios";
import { AsignacionOpciones } from "../components/AsignacionOpciones";
 
export const PermisoPorOpciones = () => {
    return(
    <>
        <div className='container'>
            <SelectorUsuarios/>
            <hr />
            <AsignacionOpciones/>
        </div>
    </>
  )
};