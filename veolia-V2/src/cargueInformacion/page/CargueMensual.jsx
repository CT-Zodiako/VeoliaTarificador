import React, { useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { InfoPropia, InfoCompetidor, InfoUsuario, InfoTerceros } from '../components/cargueMensual';
import { TabTable } from "../../ui/components/TabTable";
import { TituloVista } from "../../ui/components/TituloVista";

export const CargueMensual = () => {
    const [pestañaActiva, setPestañaActiva] = useState(0); 

    const titulosTabs = [
        { titulo: 'info. Propia', info: InfoPropia },
        { titulo: 'info. Competidor', info: InfoCompetidor },
        { titulo: 'info. Usuario', info: InfoUsuario },
        { titulo: 'info. Terceros', info: InfoTerceros },
    ];

    const handleClickTab = (index) => {
        setPestañaActiva(index);
    };

    return(
    <>
        <div>
            <div className="selector">
                <TituloVista titulo="Cargue Mensual" />
            </div>
            <div className="selector">
                <Selectores selectorAps={true} selectorFecha={true}/>
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