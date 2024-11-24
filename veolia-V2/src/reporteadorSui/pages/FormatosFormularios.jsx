import { useEffect, useMemo, useState } from "react"
import { TabTable } from "../../ui/components/TabTable"
import { Selectores } from "../../ui/components/Selectores"
import { columsF19, columsF23, columsF24, columsF35, columsF36 } from '../components/data'
import { getFormulario19, getFormulario23, getFormulario24, getFormulario35, getFormulario36 } from '../service/reporteadorSuiService';
import { TablaComponentes } from "../../ui/components/TablaComponentes"
import { TituloVista } from "../../ui/components/TituloVista"
import { useSelectStore } from "../../hooks/useSelectStore"

export const FormatosFormularios = () => {
    const { aps, anno, mes, data } = useSelectStore();
    const [pestañaActiva, setPestañaActiva] = useState(0); 
    const [dataFormato19, setFormulario19] = useState([]);
    const [dataFormato23, setFormulario23] = useState([]);
    const [dataFormato24, setFormulario24] = useState([]);
    const [dataFormato35, setFormulario35] = useState([]);
    const [dataFormato36, setFormulario36] = useState([]); 

    const onDataFormato19 = async() => {
        try {
            const f19 = await getFormulario19(data);
            setFormulario19(f19);
        } catch {
            console.error('data de la tabla f19'); 
        }
    };

    const onDataFormato23 = async() => {
        try {
            const f23 = await getFormulario23(data);
            setFormulario23(f23);
        } catch {
            console.error('data de la tabla f23'); 
        }
    };

    const onDataFormato24 = async() => {
        try {
            const f24 = await getFormulario24(data);
            setFormulario24(f24);
        } catch {
            console.error('data de la tabla f24'); 
        }
    };

    const onDataFormato35 = async() => {
        try {
            const f35 = await getFormulario35(data);
            setFormulario35(f35);
        } catch {
            console.error('data de la tabla f35'); 
        }
    };

    const onDataFormato36 = async() => {
        try {
            const f36 = await getFormulario36(data);
            setFormulario36(f36);
        } catch {
            console.error('data de la tabla f36'); 
        }
    };

    useEffect(()=> {
        if(aps && anno && mes){
            onDataFormato19();
            onDataFormato23();
            onDataFormato24();
            onDataFormato35();
            onDataFormato36();
        }
    }, [aps, anno, mes]);

    const titulosTabs = useMemo(() => [
        { titulo: 'Formulario 19', datos: dataFormato19, encabezado: columsF19 },
        { titulo: 'Formulario 23', datos: dataFormato23, encabezado: columsF23 },
        { titulo: 'Formulario 24', datos: dataFormato24, encabezado: columsF24 },
        { titulo: 'Formulario 35', datos: dataFormato35, encabezado: columsF35 },
        { titulo: 'Formulario 36', datos: dataFormato36, encabezado: columsF36 },
    ], [dataFormato19, dataFormato23, dataFormato24, dataFormato35, dataFormato36]);

    const handleClickTab = (index) => {
        setPestañaActiva(index);
    };

    return (
        <>
            <div className="headerComponent">
                <div className="selector">
                    <TituloVista titulo="Formatos y Formularios" />
                </div>
                <div className="selector">
                    <Selectores selectorAps={true} selectorFecha={true} />
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4 bodyComponent" >
                <div className='width-Component'>
                    <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
                    <div className="panel">
                        <TablaComponentes colums={titulosTabs[pestañaActiva].encabezado} data={titulosTabs[pestañaActiva].datos}/>
                    </div>
                </div>
            </div>
        </>
    );
}