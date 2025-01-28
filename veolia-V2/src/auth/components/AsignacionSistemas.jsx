import { useEffect } from 'react';
import { getAsinarSistemas, postSistemasAsignar } from '../services/sistemas';
import { usePermisosAps } from '../hooks/usePermisosAps';

export const AsignacionSistemas = ({ sisuId }) => {
    const {
        asignadas, setAsignadas, sinAsignar, setSinAsignar,
        handleCheck, handleQuitarAps, handleAsignarAps, 
        handleApsAsignadas, handleApsSinAsignar, dataAsignadas, dataSinAsignar
    } = usePermisosAps();  

    const query = {
        sisuId: sisuId
    };

    const dataSistemas = async () => {
        try {
            const response = await getAsinarSistemas(query);
            const asignadas = dataAsignadas(response, 'asignados');
            const sinAsignar = dataSinAsignar(response, 'noAsignados');
            setAsignadas(asignadas);
            setSinAsignar(sinAsignar);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleGuardar = async () => {
        try {
            const sistemasSinAsignar = handleApsSinAsignar('SIST_ID');
            const sistemasAsignados = handleApsAsignadas('SIST_ID');
            const data = {
                sisuId: sisuId,
                asignados: sistemasAsignados,
                noAsignados: sistemasSinAsignar,
            };
            postSistemasAsignar(data);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    useEffect(() => {
        if(sisuId){
            dataSistemas();
        }
    }, [sisuId])

    return(
    <>
        <div style={{ display: 'flex', margin: '1rem 0' }}>
            <div className='col contenedor-opciones'>
                {sinAsignar &&
                sinAsignar.map((item) => (
                    <div key={item.SIST_ID} style={{ display: 'inline-flex', alignItems: 'center', padding: '5px', margin: '0.2rem 0.4rem', borderRadius: '6px', border: '1px solid rgb(0, 0, 0, 0.3)' }}>
                    <input
                        className="custom-checkbox"
                        type="checkbox"
                        id={`checkbox-${item.SIST_ID}`}
                        value={item.SIST_ID}
                        defaultChecked={item.checked || false}
                        onChange={()=> handleCheck(item.SIST_ID, 'SIST_ID')}
                    />
                    <label style={{ marginLeft: '0.5rem' }} htmlFor={`checkbox-${item.SIST_ID}`}>{item.SIST_NOMBRE}</label>
                    </div>
                ))}
            </div>
            <div className="contenedor-acciones">
                <div>
                    <button
                        className="boton-accion"
                        onClick={()=>handleAsignarAps('SIST_NOMBRE', 'SIST_ID')}
                    >
                        {'>>'}
                    </button>
                </div>
                <div>
                    <button
                        className="boton-accion"
                        onClick={handleGuardar}
                    >
                        {'↺'}
                    </button>
                </div>
                <div>
                    <button
                        className="boton-accion"
                        onClick={()=>handleQuitarAps('SIST_NOMBRE', 'SIST_ID')}
                    >
                        {'<<'}
                    </button>
                </div>
            </div>
            <div className='col contenedor-opciones'>
                {asignadas &&
                asignadas.map((item)=> (
                    <div key={item.SIST_ID} style={{ display: 'inline-flex', alignItems: 'center', padding: '5px', margin: '0.2rem 0.4rem', borderRadius: '6px', border: '1px solid rgb(0, 0, 0, 0.3)' }}>
                        <input
                        className="custom-checkbox"
                        type="checkbox"
                        id={`checkbox-${item.SIST_ID}`}
                        value={item.SIST_ID}
                        defaultChecked={item.checked || true}
                        onChange={()=> handleCheck(item.SIST_ID, 'SIST_ID')}
                        />
                        <label style={{ marginLeft: '0.5rem' }} htmlFor={`checkbox-${item.SIST_ID}`}>{item.SIST_NOMBRE}</label>
                    </div>
                ))} 
            </div>
        </div>
        <div>
            <button
                className="boton-guardar"
                onClick={handleGuardar}
            >
                Guardar
            </button>
        </div>
    </>
  )
};