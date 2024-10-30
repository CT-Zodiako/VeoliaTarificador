import { useEffect, useState } from "react"
import { apsAsignadas } from "../services/usuariosService"
import { usePermisosAps } from "../hooks/usePermisosAps"

export const AsignacionAPS = ({usuarioAps}) => {
  const {
    asignadas, setAsignadas, sinAsignar, setSinAsignar,
    handleCheck, handleQuitarAps, handleAsignarAps, 
    handleApsAsignadas, handleApsSinAsignar, dataAsignadas, dataSinAsignar
  } = usePermisosAps();

  const sisuID ={
    sisuId: usuarioAps
  }

  const fetchData = async () => {
    try {
      const response = await apsAsignadas(sisuID);
      const sinAsig = dataSinAsignar(response);
      setSinAsignar(sinAsig)
      const asig = dataAsignadas(response);
      setAsignadas(asig)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if(usuarioAps){
      fetchData();
    }
  }, [usuarioAps])

  const handleGuardar = () => {
    try {
      const apsSinAsignar = handleApsSinAsignar();
      const apsAsignadas = handleApsAsignadas();

      const data = {
        apsSinAsignar: apsSinAsignar,
        apsAsignadas: apsAsignadas,
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  
  return (
    <>
    <div style={{ display: 'flex', margin: '1rem 0' }}>
        <div className='col contenedor-opciones'>
          <h3>Sin asignar</h3> 
          {sinAsignar &&
          sinAsignar.map((item) => (
            <div key={item.APSA_ID} style={{ display: 'inline-flex', alignItems: 'center', padding: '5px', margin: '0.2rem 0.4rem', borderRadius: '6px', border: '1px solid rgb(0, 0, 0, 0.3)' }}>
              <input
                className="custom-checkbox"
                type="checkbox"
                id={`checkbox-${item.APSA_ID}`}
                value={item.APSA_ID}
                defaultChecked={item.checked || false}
                onChange={()=> handleCheck(item.APSA_ID)}
              />
              <label style={{ marginLeft: '0.5rem' }} htmlFor={`checkbox-${item.APSA_ID}`}>{item.APSA_NOMAPS}</label>
            </div>
            ))}
        </div>
        <div className="contenedor-acciones">
            <div>
                <button
                  className="boton-accion"
                  onClick={handleAsignarAps}
                >
                    {'>>'}
                </button>
            </div>
            <div>
                <button
                  className="boton-accion"
                  onClick={handleQuitarAps}
                >
                    {'<<'}
                </button>
            </div>
        </div>
        <div className='col contenedor-opciones'>
            <h3>Asignadas</h3>
            {asignadas &&
            asignadas.map((item)=> (
                  <div key={item.APSA_ID} style={{ display: 'inline-flex', alignItems: 'center', padding: '5px', margin: '0.2rem 0.4rem', borderRadius: '6px', border: '1px solid rgb(0, 0, 0, 0.3)' }}>
                    <input
                      className="custom-checkbox"
                      type="checkbox"
                      id={`checkbox-${item.APSA_ID}`}
                      value={item.APSA_ID}
                      defaultChecked={item.checked || true}
                      onChange={()=> handleCheck(item.APSA_ID)}
                    />
                    <label style={{ marginLeft: '0.5rem' }} htmlFor={`checkbox-${item.APSA_ID}`}>{item.APSA_NOMAPS}</label>
                  </div>
              ))} 
        </div>
    </div>
    <button
              style={{ margin: '0', width: '5rem', height: '2rem', background: 'blue', borderRadius: '6px', border: '1px solid rgb(0, 0, 0, 0.3)' }}
              onClick={handleGuardar}
            >
              Guardar
            </button>
    </>
  )
}
