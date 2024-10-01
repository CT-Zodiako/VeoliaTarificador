import React from 'react'
import { columnsPropia } from './data';
import { TablaComponentes } from '../../ui/components/TablaComponentes';
 
export const InfoPropia = () => {
    return(
    <>
        <div>
            <h3>Cargue de Informacion Propia</h3>
            <div>
                <h4>Datos Semestrales</h4>
                {/* <Selectores /> */}
            </div>
            <div>
                <h4>Vista Previa</h4>
                {/* <TablaComponentes colums={columnsPropia} data={}/> */}
            </div>
        </div>
    </>
  )
};
