import React from 'react'
import { TableCofiguracion } from "../../ui/components/TableCofiguracion"
import { dataDetalladoSubAport } from '../service/detalladoSubAport'
export const DataDetalladoSubAport = () => {


    const datos = dataDetalladoSubAport

  return (
    <div>
        <TableCofiguracion tituloTabla={'Detallado de Sub y Aporte'} datos={datos} />
    </div>
  )
}
