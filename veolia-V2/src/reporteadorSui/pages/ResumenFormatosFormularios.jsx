import React, { useState } from 'react'
import { TabTable } from '../../ui/components/TabTable'
import { TableCofiguracion } from '../../ui/components/TableCofiguracion'
import { dataResmunenFormatosFormularios19, dataResmunenFormatosFormularios23, dataResmunenFormatosFormularios24, dataResmunenFormatosFormularios35, dataResmunenFormatosFormularios36 } from '../service/ResemunFormatosFormulariosService';

export const ResumenFormatosFormularios = () => {
    const [pestañaActiva, setPestañaActiva] = useState(0); 

    const [titulo, setTitulo] = useState('')


    const titulosTabs = [
        { titulo: 'Formulario 19', datos: dataResmunenFormatosFormularios19 },
        { titulo: 'Formulario 23', datos: dataResmunenFormatosFormularios23},
        { titulo: 'Formulario 24', datos: dataResmunenFormatosFormularios24},
        { titulo: 'Formulario 35', datos: dataResmunenFormatosFormularios35},
        { titulo: 'Formulario 36', datos: dataResmunenFormatosFormularios36}

    ];

    const handleClickTab = (index, titulo) => {
        setPestañaActiva(index);
        setTitulo(titulo)
    };


    return (
        <div className='bodyComponent topListTable'>
            <div className="listTable">
                <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
            </div>
            <TableCofiguracion tituloTabla={titulo} datos={titulosTabs[pestañaActiva].datos} />
        </div>
    )
}
