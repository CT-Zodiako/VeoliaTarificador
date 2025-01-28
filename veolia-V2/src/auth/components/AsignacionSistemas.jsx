import { useEffect, useState } from 'react';
import { getAsinarSistemas } from '../services/sistemas';

export const AsignacionSistemas = ({ sisuId }) => {
    const [sistemas, setSistemas] = useState([]);
    const [ asignar, setAsignar ] = useState([]);
    const [ desasignar, setDesasignar ] = useState([]);
    

    const dataSistemas = async () => {
        try {
            const response = await getAsinarSistemas(sisuId);
            setSistemas(response);
            console.log('permisos sistemas: ',response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const onOpcionesAsignadas = () => {
        
    };

    const onAsignacionesMenu = () => {
        onOpcionesAsignadas();
        onOpcionesRestantes();
    };

    const onOpcionesRestantes = () => {
        
    };

    useEffect(() => {
        if(sisuId){
            dataSistemas();
        }
    }, [sisuId])

    return(
    <>
        <div>
            <div>
                {/* { sistemas &&
                    sistemas.asignadas.map((sistema, index) => (
                        
                ))} */}
            </div>
            <div>
            <div className="contenedor-acciones">
                    <div>
                        <button
                            className="boton-accion"
                            // onClick={onOpcionesAsignadas}
                        >
                            {'>>'}
                        </button>
                    </div>
                    <div>
                        <button
                            className="boton-accion"
                            // onClick={onAsignacionesMenu}
                        >
                            {'↺'}
                        </button>
                    </div>
                    <div>
                        <button
                            className="boton-accion"
                            // onClick={onOpcionesRestantes}
                        >
                            {'<<'}
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {/* { sistemas &&
                    sistemas.sinAsignar.map((sistema, index) => (
                        
                ))} */}
            </div>
        </div>
    </>
  )
};