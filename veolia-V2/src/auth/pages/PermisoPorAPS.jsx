import React from 'react'
import { SelectorUsuarios } from '../components/SelectorUsuarios'
import { AsignacionAPS } from '../components/AsignacionAPS'

export const PermisoPorAPS = () => {
  return (
    <div className='container'>
        <SelectorUsuarios/>
        <hr />
        <AsignacionAPS/>

    </div>
  )
}
