import { useState } from 'react'
import { SelectorUsuarios } from '../components/SelectorUsuarios'
import { AsignacionAPS } from '../components/AsignacionAPS'

export const PermisoPorAPS = () => {
  const [usuarioAps, setUsuarioAps] = useState([])

  const handleUsuarioAps = (aps) => {
    setUsuarioAps(aps)
  };

  return (
    <div className='container'>
        <SelectorUsuarios handleUsuarioAps={handleUsuarioAps}/>
        <hr />
        <AsignacionAPS usuarioAps={usuarioAps}/>
    </div>
  )
}
