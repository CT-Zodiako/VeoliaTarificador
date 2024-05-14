import { useState } from "react"
import { TabTable } from "../../ui/components/TabTable"
import { TableCofiguracion } from "../../ui/components/TableCofiguracion"
import { dataAcueducto, dataEnergia, dataCostos, dataTarifas } from "../service/informesProyeccionesService"



export const InformesProyecciones = () => {

    const [pestañaActiva, setPestañaActiva] = useState(0); 
    const [titulo, setTitulo] = useState('')


    const titulosTabs = [

        { titulo: 'FACT Ene', datos: dataEnergia },
        { titulo: 'FACT Acu', datos: dataAcueducto },
        { titulo: 'Costos', datos: dataCostos},
        {titulo: 'Tarifas', datos: dataTarifas}

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
