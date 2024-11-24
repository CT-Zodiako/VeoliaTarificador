import { useEffect, useMemo, useState } from 'react'
import { TabTable } from '../../ui/components/TabTable'
import {
    getResumenFormulario19, getResumenFormulario23, getResumenFormulario24,
    getResumenFormulario35, getResumenFormulario36
} from '../service/ResemunFormatosFormulariosService';
import { formatoFormulario19, formatoFormulario23, formatoFormulario24, 
    formatoFormulario35, formatoFormulario36, columnsFormulario19, columnsFormulario23,
    columnsFormulario24, columnsFormulario36, columnsFormulario35,
} from '../components/data';
import { TituloVista } from '../../ui/components/TituloVista';
import { Selectores } from '../../ui/components/Selectores';
import { useSelectStore } from '../../hooks/useSelectStore';
import { TablaInformesGerenciales } from '../../informesGerenciales/components/TablaInformesGerenciales';

export const ResumenFormatosFormularios = () => {
    const { aps } = useSelectStore();
    const [pestañaActiva, setPestañaActiva] = useState(0);
    const [dataResumenFormulario19, setDataResumenFormulario19] = useState({
        formato: {},
        datos: []
    }); 
    const [dataResumenFormulario23, setDataResumenFormulario23] = useState({
        formato: {},
        datos: []
    });
    const [dataResumenFormulario24, setDataResumenFormulario24] = useState({
        formato: {},
        datos: []
    });
    const [dataResumenFormulario35, setDataResumenFormulario35] = useState({
        formato: {},
        datos: []
    });
    const [dataResumenFormulario36, setDataResumenFormulario36] = useState({
        formato: {},
        datos: []
    });

    const request = {
        APSA_ID: aps
    };

    const onDataFormulario19 = async() => {
        try {
            const response = await getResumenFormulario19(request);
            setDataResumenFormulario19({
                ...dataResumenFormulario19,
                formato: formatoFormulario19,
                datos: response
            });
        } catch (error) {
            console.log('error en la data de formulario 19',error);
        }
    };

    const onDataFormulario23 = async() => {
        try {
            const response = await getResumenFormulario23(request);
            setDataResumenFormulario23({
                ...dataResumenFormulario23,
                formato: formatoFormulario23,
                datos: response
            });
        } catch (error) {
            console.log('error en la data de formulario 23',error);
        }
    };

    const onDataFormulario24 = async() => {
        try {
            const response = await getResumenFormulario24(request);
            setDataResumenFormulario24({
                ...dataResumenFormulario24,
                formato: formatoFormulario24,
                datos: response
            });
        } catch (error) {
            console.log('error en la data de formulario 24',error);
        }
    };

    const onDataFormulario35 = async() => {
        try {
            const response = await getResumenFormulario35(request);
            setDataResumenFormulario35({
                ...dataResumenFormulario35,
                formato: formatoFormulario35,
                datos: response
            });
        } catch (error) {
            console.log('error en la data de formulario 35',error);
        }
    };

    const onDataFormulario36 = async() => {
        try {
            const response = await getResumenFormulario36(request);
            setDataResumenFormulario36({
                ...dataResumenFormulario36,
                formato: formatoFormulario36,
                datos: response
            });
        } catch (error) {
            console.log('error en la data de formulario 36',error);     
        }
    };

    const titulosTabs = useMemo(() => [
        { titulo: 'Formulario 19', datos: dataResumenFormulario19, colums: columnsFormulario19 },
        { titulo: 'Formulario 23', datos: dataResumenFormulario23, colums: columnsFormulario23 },
        { titulo: 'Formulario 24', datos: dataResumenFormulario24, colums: columnsFormulario24 },
        { titulo: 'Formulario 35', datos: dataResumenFormulario35, colums: columnsFormulario35 },
        { titulo: 'Formulario 36', datos: dataResumenFormulario36, colums: columnsFormulario36 }
    ], [dataResumenFormulario19, dataResumenFormulario23, dataResumenFormulario24, 
        dataResumenFormulario35, dataResumenFormulario36]);

    const handleClickTab = (index) => {
        setPestañaActiva(index);
    };

    useEffect(() => {
        if (aps) {
            onDataFormulario19();
            onDataFormulario23();
            onDataFormulario24();
            onDataFormulario35();
            onDataFormulario36();
        }
    }, [aps])

    return (
        <>
            <div className="headerComponent">
                <div className="selector">
                    <TituloVista titulo="Resumen Formatos Formularios" />
                </div>
                <div className="selector">
                    <Selectores selectorAps={true} />
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4 bodyComponent" >
                <div className='width-Component'>
                    <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
                    <div className="panel">
                        <TablaInformesGerenciales tituloTabla={titulosTabs[pestañaActiva].titulo} datos={titulosTabs[pestañaActiva].datos} colums={titulosTabs[pestañaActiva].colums} page={true}/>
                    </div>
                </div>
            </div>
        </>
    )
}
