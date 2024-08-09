import React from 'react'
import { TableCofiguracion } from "../../ui/components/TableCofiguracion"
import { dataDetalladoCosto } from '../service/detalladoCostoService';
export const DetalladoCosto = () => {


    const datos = dataDetalladoCosto

  return (
    <div className='bodyComponentable topListTable'>
        <TableCofiguracion tituloTabla={'Detallado de costos'} datos={datos} />
    </div>
  )
}
