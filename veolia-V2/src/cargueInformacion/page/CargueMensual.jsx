import { Selectores } from "../../ui/components/Selectores";
import { InfoPropia } from '../components/cargueMensual/InfoPropia';
import { InfoCompetidor } from '../components/cargueMensual/InfoCompetidor';
import { InfoUsuario } from '../components/cargueMensual/InfoUsuario';
import { InfoTerceros } from '../components/cargueMensual/InfoTerceros';
import { TabTable } from "../../ui/components/TabTable";
import React, { useState } from "react";

export const CargueMensual = () => {
    const [pestañaActiva, setPestañaActiva] = useState(0); 
    const [titulo, setTitulo] = useState('')

    const titulosTabs = [
        { titulo: 'info. Propia', info: InfoPropia },
        { titulo: 'info. Competidor', info: InfoCompetidor },
        { titulo: 'info. Usuario', info: InfoUsuario },
        { titulo: 'info. Terceros', info: InfoTerceros },
    ];

    const handleClickTab = (index, titulo) => {
        setPestañaActiva(index);
        setTitulo(titulo)
    };

    return(
    <>
        <div>
            <div>
                <div className="tituloComponent">
                    <h3>Cargue Mensual</h3>
                </div>
                <div className="selector">
                    <Selectores selectorAps={true} selectorFecha={true}/>
                </div>
            </div>
            <div className="bodyComponent">
                <div className='listTable'>
                    <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
                </div>
                {titulosTabs[pestañaActiva].info &&  React.createElement(titulosTabs[pestañaActiva].info)}
            </div>
        </div>
    </>
  )
};