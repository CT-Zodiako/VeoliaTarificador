import React, { useState } from 'react'
import { Selectores } from '../../ui/components/Selectores';
import { TabTable } from '../../ui/components/TabTable';
import { InfoPropia, InfoCompetidor, InfoUsuario } from '../components/cargueSemestral';
import { TituloVista } from '../../ui/components/TituloVista';
 
export const CargueSemestral = () => {    
    const [pestañaActiva, setPestañaActiva] = useState(0); 

    const titulosTabs = [
        { titulo: 'info. Propia', info: InfoPropia },
        { titulo: 'info. Competidor', info: InfoCompetidor },
        { titulo: 'info. Usuario', info: InfoUsuario },
    ];

    const handleClickTab = (index) => {
        setPestañaActiva(index);
    };

    return(
    <>
        <div>
            <div className="selector">
                <TituloVista titulo="Cargue Semestral" />
            </div>
            <div className="selector">
                <Selectores selectorAps={true} selectorFecha={true} selectorSemestre={true}/>
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent">
            <div className="width-Component">
                <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
                <div className="borde-table">
                    {titulosTabs[pestañaActiva].info &&  React.createElement(titulosTabs[pestañaActiva].info)}
                </div>
            </div>
        </div>
    </>
  )
};