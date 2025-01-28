import { useEffect, useState } from "react";
import { SelectorUsuarios } from "../components/SelectorUsuarios";
import { AsignacionOpciones } from "../components/AsignacionOpciones";
import { SelectorSistemas } from "../components/SelectorSistemas";
import { getSistemasSelect } from "../services/sistemas";
 
export const PermisoPorOpciones = () => {
    const [ usuarioAps, setUsuarioAps ] = useState([])
    const [ dataSistemas, setSistemas ] = useState([]);
    const [ sistema, setSistema ] = useState('');

    const getDataSistemas = async() => {
        try {
            const response = await getSistemasSelect();
            setSistemas(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleUsuarioAps = (aps) => {
        setUsuarioAps(aps)
    };

    useEffect(() => {
        getDataSistemas();
    }, []);

    return(
    <>
        <div className='container'>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '200px' }}>
                <SelectorUsuarios handleUsuarioAps={handleUsuarioAps}/>
                <SelectorSistemas dataSistemas={dataSistemas} sistema={sistema} setSistema={setSistema}/>
            </div>
            <hr />
            <AsignacionOpciones usuarioAps={usuarioAps} idSistema={sistema}/>
        </div>
    </>
  )
};