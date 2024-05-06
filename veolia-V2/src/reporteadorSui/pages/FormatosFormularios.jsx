import { useState } from "react"
import { ApsSelector } from "../../ui/components/ApsSelector"
import { TabTable } from "../../ui/components/TabTable"
import { dataFormato19, dataFormato23, dataFormato24, dataFormato35, dataFormato36 } from "../service/reporteadorSuiService"
import { TableCofiguracion } from "../../ui/components/TableCofiguracion"



export const FormatosFormularios = () => {

    const [pestañaActiva, setPestañaActiva] = useState(0); // Inicialmente la primera pestaña está activa

    const [titulo, setTitulo] = useState('')


    const titulosTabs = [
        { titulo: 'Formato 19', datos: dataFormato19 },
        { titulo: 'Formato 23', datos: dataFormato23 },
        { titulo: 'Formato 24', datos: dataFormato24 },
        { titulo: 'Formato 35', datos: dataFormato35 },
        { titulo: 'Formato 36', datos: dataFormato36 },
        { titulo: 'Resumen Variables', datos: [] }

        // Agrega más pestañas si es necesario
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
    );
}
