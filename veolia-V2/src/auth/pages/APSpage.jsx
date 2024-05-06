import React from 'react'
import { apsService } from "../services/apsService.js";
import { TableCofiguracion } from '../../ui/components/TableCofiguracion'
import { Selectores } from '../../ui/components/Selectores.jsx';


export const APSpage = () => {

  const respuesta = apsService
  // console.log(respuesta.formato)

  return (
    <>


      {/* <Selectores selectorAps={true} selectorFecha={true} /> */}

      <hr />
      <TableCofiguracion datos={respuesta} acciones={false} tituloTabla={"APS"} />
    </>
  )
}
