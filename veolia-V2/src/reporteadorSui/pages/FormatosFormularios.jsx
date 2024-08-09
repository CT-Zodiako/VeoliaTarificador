import { useEffect, useState } from "react"
// import { ApsSelector } from "../../ui/components/ApsSelector"
import { TabTable } from "../../ui/components/TabTable"
// import { dataFormato19, dataFormato23, dataFormato24, dataFormato35, dataFormato36, getFormulario23, getFormulario24, getFormulario35, getFormulario36 } from "../service/reporteadorSuiService"
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors"
import { Selectores } from "../../ui/components/Selectores"
import { TablaProyecciones } from "../../informeProyecciones/components/TablaProyecciones"
// import { TableCofiguracion } from "../../ui/components/TableCofiguracion"
import { columsF19, columsF23, columsF24, columsF35, columsF36 } from '../components/data'
import { getFormulario19 } from '../service/reporteadorSuiService';

export const FormatosFormularios = () => {
    const aps = useApsSelector(state => state.aps);
    const mess = useMesSelector(state => state.mes);
    const anno = useAnnoSelector(state => state.anno)
    const [pestañaActiva, setPestañaActiva] = useState(0); 
    const [titulo, setTitulo] = useState('')
    const [dataFormato19, setFormulario19] = useState([]);
    const [dataFormato23, setFormulario23] = useState([]);
    const [dataFormato24, setFormulario24] = useState([]);
    const [dataFormato35, setFormulario35] = useState([]);
    const [dataFormato36, setFormulario36] = useState([]);

    const data = {
        APSA_ID: 1011,
        ANNO: 2023,
        MES: 3 
    }    

    const dataTablasFormularios = async() => {
        try{
            const f19 = await getFormulario19(data);
            setFormulario19(f19);

            const f23 = await getFormulario23(data);
            setFormulario23(f23);

            const f24 = await getFormulario24(data);
            setFormulario24(f24);

            const f35 = await getFormulario35(data);
            setFormulario35(f35);

            const f36 = await getFormulario36(data);
            setFormulario36(f36);
        } catch {
            console.error('data de las tablas no encontrada'); 
        }
    }

    useEffect(()=>{
        dataTablasFormularios();
    }, [aps, anno, mess])

    const titulosTabs = [
        { titulo: 'Formulario 19', datos: dataFormato19, encabezado: columsF19 },
        { titulo: 'Formulario 23', datos: dataFormato23, encabezado: columsF23 },
        { titulo: 'Formulario 24', datos: dataFormato24, encabezado: columsF24 },
        { titulo: 'Formulario 35', datos: dataFormato35, encabezado: columsF35 },
        { titulo: 'Formulario 36', datos: dataFormato36, encabezado: columsF36 },
        // { titulo: 'Resumen Variables', datos: [] }
        // Agrega más pestañas si es necesario
    ];

    const handleClickTab = (index, titulo) => {
        setPestañaActiva(index);
        setTitulo(titulo)
    };

    return (
        <div>
            <div className="headerComponent">
                <div className="tituloComponent"/>
                <div className="selector">
                    <Selectores selectorAps={true} selectorFecha={true} />
                </div>
            </div>
            <div className="bodyComponent">
                <div className='listTable'>
                    <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
                </div>
                <TablaProyecciones datos={titulosTabs[pestañaActiva].datos} colums={titulosTabs[pestañaActiva].encabezado}/>
                {/* <TableCofiguracion tituloTabla={titulo} datos={titulosTabs[pestañaActiva].datos} /> */}
            </div>
        </div>
    );
}
