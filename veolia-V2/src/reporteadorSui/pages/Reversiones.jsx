import React, { useState } from 'react'
import { TabTable } from '../../ui/components/TabTable'
import { TableCofiguracion } from '../../ui/components/TableCofiguracion'
import { dataRevFormato19, dataRevFormato23, dataRevFormato24 } from '../service/reversionesService';


export const Reversiones = () => {
    const [pestañaActiva, setPestañaActiva] = useState(0); // Inicialmente la primera pestaña está activa

    const [titulo, setTitulo] = useState('')


    const titulosTabs = [
        { titulo: 'REV Formulario 19', datos: dataRevFormato19 },
        { titulo: 'REV Formulario 23', datos: dataRevFormato23 },
        { titulo: 'REV Formulario 24', datos: dataRevFormato24 },
        { titulo: 'REV Formulario 35', datos: [] },
        { titulo: 'REV Formulario 36', datos: [] }

        

    ];

    const handleClickTab = (index, titulo) => {
        setPestañaActiva(index);
        setTitulo(titulo)
    };


    return (
        <div className="bodyComponent topListTable">
            <div className='listTable'>
                <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
            </div>
            <TableCofiguracion tituloTabla={titulo} datos={titulosTabs[pestañaActiva].datos} />
        </div>
    )
}
