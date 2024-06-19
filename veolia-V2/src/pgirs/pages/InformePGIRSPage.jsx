import React from 'react'
import { TablePgirs } from '../components/infromePgirs/TablePgirs'
import { TablaBarrido } from '../components/infromePgirs/TableBarrido'
import { Selectores } from '../../ui/components/Selectores'

export const InformePGIRSPage = () => {
  return (
    <div>
        <Selectores selectorAps={true} />
        <TablePgirs />
        <TablaBarrido />

    </div>
  )
}
