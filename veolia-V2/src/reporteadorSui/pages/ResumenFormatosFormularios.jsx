import React, { useState } from 'react'
import { TabTable } from '../../ui/components/TabTable'
import { TableCofiguracion } from '../../ui/components/TableCofiguracion'
import { dataResmunenFormatosFormularios19, dataResmunenFormatosFormularios23, dataResmunenFormatosFormularios24, dataResmunenFormatosFormularios35, dataResmunenFormatosFormularios36 } from '../service/ResemunFormatosFormulariosService';

export const ResumenFormatosFormularios = () => {
    const [pestañaActiva, setPestañaActiva] = useState(0); // Inicialmente la primera pestaña está activa

    const [titulo, setTitulo] = useState('')


    const titulosTabs = [
        { titulo: 'Formato 19', datos: dataResmunenFormatosFormularios19 },
        { titulo: 'Formato 23', datos: dataResmunenFormatosFormularios23},
        { titulo: 'Formato 24', datos: dataResmunenFormatosFormularios24},
        { titulo: 'Formato 35', datos: dataResmunenFormatosFormularios35},
        { titulo: 'Formato 36', datos: dataResmunenFormatosFormularios36}

    ];

    const handleClickTab = (index, titulo) => {
        setPestañaActiva(index);
        setTitulo(titulo)
    };


    return (
        <div>
            <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
            <TableCofiguracion tituloTabla={titulo} datos={titulosTabs[pestañaActiva].datos} />

        </div>
    )
}
