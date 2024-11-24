import React, { useEffect, useState } from 'react'
import { TabTable } from '../../ui/components/TabTable'
import { getRevFormato19, getRevFormato23, getRevFormato24, getRevFormato35, getRevFormato36 } from '../service/reversionesService';
import { revFormato19, revFormato23, revFormato24, revFormato35, revFormato36, columnsRevFormato19, columnsRevFormato23, columnsRevFormato24, columnsRevFormato35, columnsRevFormato36 } from '../components/data';
import { TituloVista } from '../../ui/components/TituloVista';
import { Selectores } from '../../ui/components/Selectores';
import { useSelectStore } from '../../hooks/useSelectStore';
import { TablaInformesGerenciales } from '../../informesGerenciales/components/TablaInformesGerenciales';


export const Reversiones = () => {
    const {aps} =  useSelectStore();
    const [pestañaActiva, setPestañaActiva] = useState(0);
    const [titulo, setTitulo] = useState('');
    const [dataRevFormato19, setDataRevFormato19] = useState({
        formato: {},
        datos: []
    });
    const [dataRevFormato23, setDataRevFormato23] = useState({
        formato: {},
        datos: []
    });
    const [dataRevFormato24, setDataRevFormato24] = useState({
        formato: {},
        datos: []
    });
    const [dataRevFormato35, setDataRevFormato35] = useState({
        formato: {},
        datos: []
    });
    const [dataRevFormato36, setDataRevFormato36] = useState({
        formato: {},
        datos: []
    });

    const data = {
        APSA_ID: aps,
    };

    const onDataRevForm19 = async () => {
        try {
            const response = await getRevFormato19(data);
            setDataRevFormato19({
                ...dataRevFormato19,
                formato: revFormato19,
                datos: response
            });
        } catch (error) {
            console.log('error en la data de formulario 19', error);
        }
    };

    const onDataRevForm23 = async () => {
        try {
            const response = await getRevFormato23();
            setDataRevFormato23({
                ...dataRevFormato23,
                formato: revFormato23,
                datos: response
            });
        } catch (error) {
            console.log('error en la data de formulario 23', error);
        }
    };

    const onDataRevForm24 = async () => {
        try {
            const response = await getRevFormato24();
            setDataRevFormato24({
                ...dataRevFormato24,
                formato: revFormato24,
                datos: response
            });
        } catch (error) {
            console.log('error en la data de formulario 24', error);
        }
    };

    const onDataRevForm35 = async () => {
        try {
            const response = await getRevFormato35();
            setDataRevFormato35({
                ...dataRevFormato35,
                formato: revFormato35,
                datos: response
            });
        } catch (error) {
            console.log('error en la data de formulario 35', error);
        }
    };

    const onDataRevForm36 = async () => {
        try {
            const response = await getRevFormato36();
            setDataRevFormato36({
                ...dataRevFormato36,
                formato: revFormato36,
                datos: response
            });
        } catch (error) {
            console.log('error en la data de formulario 36', error);
        }
    };

    const titulosTabs = [
        { titulo: 'REV Formulario 19', datos: dataRevFormato19, colums: columnsRevFormato19 },
        { titulo: 'REV Formulario 23', datos: dataRevFormato23, colums: columnsRevFormato23 },
        { titulo: 'REV Formulario 24', datos: dataRevFormato24, colums: columnsRevFormato24 },
        { titulo: 'REV Formulario 35', datos: dataRevFormato35, colums: columnsRevFormato35 },
        { titulo: 'REV Formulario 36', datos: dataRevFormato36, colums: columnsRevFormato36 }
    ];

    const handleClickTab = (index, titulo) => {
        setPestañaActiva(index);
        setTitulo(titulo)
    };

    useEffect(() => {
        if (aps) {
            onDataRevForm19();
            onDataRevForm23();
            onDataRevForm24();
            onDataRevForm35();
            onDataRevForm36();
        }
    }, [aps]);

    return (
        <>
            <div className="headerComponent">
                <div className="selector">
                    <TituloVista titulo="Detallado Tarifas" />
                </div>
                <div className="selector">
                    <Selectores selectorAps={true} />
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4 bodyComponent" >
                <div className='width-Component'>
                    <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
                    <div className="panel">
                        <TablaInformesGerenciales tituloTabla={titulo} datos={titulosTabs[pestañaActiva].datos} colums={titulosTabs[pestañaActiva].colums} page={true}/>
                    </div>
                </div>
            </div>
        </>
    )
};