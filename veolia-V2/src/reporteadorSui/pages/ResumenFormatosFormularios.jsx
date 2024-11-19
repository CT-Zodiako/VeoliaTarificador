import { useMemo, useState } from 'react'
import { TabTable } from '../../ui/components/TabTable'
import { TableCofiguracion } from '../../ui/components/TableCofiguracion'
import { dataResmunenFormatosFormularios19, dataResmunenFormatosFormularios23, dataResmunenFormatosFormularios24, 
    dataResmunenFormatosFormularios35, dataResmunenFormatosFormularios36,
    getResumenFormulario19, getResumenFormulario23, getResumenFormulario24,
    getResumenFormulario35, getResumenFormulario36
} from '../service/ResemunFormatosFormulariosService';
import { formatoFormulario19, formatoFormulario23, formatoFormulario24, 
    formatoFormulario35, formatoFormulario36 
} from '../components/data';
import { TituloVista } from '../../ui/components/TituloVista';
import { Selectores } from '../../ui/components/Selectores';

export const ResumenFormatosFormularios = () => {
    const [titulo, setTitulo] = useState('')
    const [pestañaActiva, setPestañaActiva] = useState(0);
    const [dataResumenFormulario19, setDataResumenFormulario19] = useState({
        formato: formatoFormulario19,
        datos: []
    }); 
    const [dataResumenFormulario23, setDataResumenFormulario23] = useState({
        formato: formatoFormulario23,
        datos: []
    });
    const [dataResumenFormulario24, setDataResumenFormulario24] = useState({
        formato: formatoFormulario24,
        datos: []
    });
    const [dataResumenFormulario35, setDataResumenFormulario35] = useState({
        formato: formatoFormulario35,
        datos: []
    });
    const [dataResumenFormulario36, setDataResumenFormulario36] = useState({
        formato: formatoFormulario36,
        datos: []
    });

    const onDataFormulario19 = () => {
        try {
            const response = getResumenFormulario19();
            setDataResumenFormulario19(response);
        } catch (error) {
            console.log('error en la data de formulario 19',error);
        }
    };

    const onDataFormulario23 = () => {
        try {
            const response = getResumenFormulario23();
            setDataResumenFormulario23(response);
        } catch (error) {
            console.log('error en la data de formulario 23',error);
        }
    };

    const onDataFormulario24 = () => {
        try {
            const response = getResumenFormulario24();
            setDataResumenFormulario24(response);
        } catch (error) {
            console.log('error en la data de formulario 24',error);
        }
    };

    const onDataFormulario35 = () => {
        try {
            const response = getResumenFormulario35();
            setDataResumenFormulario35(response);
        } catch (error) {
            console.log('error en la data de formulario 35',error);
        }
    };

    const onDataFormulario36 = () => {
        try {
            const response = getResumenFormulario36();
            setDataResumenFormulario36(response);
        } catch (error) {
            console.log('error en la data de formulario 36',error);     
        }
    };

    const titulosTabs = useMemo(() => [
        { titulo: 'Formulario 19', datos: dataResmunenFormatosFormularios19 },
        { titulo: 'Formulario 23', datos: dataResmunenFormatosFormularios23},
        { titulo: 'Formulario 24', datos: dataResmunenFormatosFormularios24},
        { titulo: 'Formulario 35', datos: dataResmunenFormatosFormularios35},
        { titulo: 'Formulario 36', datos: dataResmunenFormatosFormularios36}
    ], [dataResmunenFormatosFormularios19, dataResmunenFormatosFormularios23, dataResmunenFormatosFormularios24, dataResmunenFormatosFormularios35, dataResmunenFormatosFormularios36]);

    // const titulosTabs = useMemo(() => [
    //     { titulo: 'Formulario 19', datos: dataResumenFormulario19 },
    //     { titulo: 'Formulario 23', datos: dataResumenFormulario23},
    //     { titulo: 'Formulario 24', datos: dataResumenFormulario24},
    //     { titulo: 'Formulario 35', datos: dataResumenFormulario35},
    //     { titulo: 'Formulario 36', datos: dataResumenFormulario36}
    // ], [dataResumenFormulario19, dataResumenFormulario23, dataResumenFormulario24, 
    //     dataResumenFormulario35, dataResumenFormulario36]);

    const handleClickTab = (index, titulo) => {
        setPestañaActiva(index);
        setTitulo(titulo)
    };

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
                    <div className="borde-table">
                        <TableCofiguracion tituloTabla={titulosTabs[pestañaActiva].titulo} datos={titulosTabs[pestañaActiva].datos} />
                    </div>
                </div>
            </div>
        </>
    )
}
