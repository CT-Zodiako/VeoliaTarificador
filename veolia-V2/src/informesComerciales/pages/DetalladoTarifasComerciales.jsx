import { useEffect, useState } from "react";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { columnsTarifasPlena, columnsTarifasSC, formatoTarifasPlena, formatoTarifasSC } from '../components/data';
import { getTarifasComerciales } from '../service/detalladoTarifasComerciales';
import { Selectores } from "../../ui/components/Selectores";
import { TabTable } from "../../ui/components/TabTable";
import { TablaInformesGerenciales } from "../../informesGerenciales/components/TablaInformesGerenciales";

export const DetalladoTarifasComerciales = () => {
    const aps = useApsSelector(state => state.aps);
    const mess = useMesSelector(state => state.mes);
    const anno = useAnnoSelector(state => state.anno);

    const [pestañaActiva, setPestañaActiva] = useState(0); 
    const [titulo, setTitulo] = useState('')
    const [dataTarifaPlena, setDataTarifaPlena] = useState({
        formato:{},
        datos:[]
    });
    const [dataTarifaSubCon, setDataTarifaSubCon] = useState({
        formato:{},
        datos:[]
    });    

    const data = {
        // APS: aps,
        ANNO: 2023,
        MES: 2
    }  

    const dataTablasGerenciales = async() => {
        try{
            const infoGerenciales = await getTarifasComerciales(data);
            setDataTarifaPlena({
                ...dataTarifaPlena,
                formato: formatoTarifasPlena,
                datos: infoGerenciales
            });
            setDataTarifaSubCon({
                ...dataTarifaSubCon,
                formato: formatoTarifasSC,
                datos: infoGerenciales
            })
        } catch {
            console.error('data de las tablas no encontrada'); 
        }
    }

    useEffect(()=> {
        if(anno && mess){
            dataTablasGerenciales();
        }
    }, [anno, mess])

    const titulosTabs = [
        { titulo: 'Plena', datos: dataTarifaPlena, encabezado: columnsTarifasPlena },
        { titulo: 'Sub & Con', datos: dataTarifaSubCon, encabezado: columnsTarifasSC },
    ];

    const handleClickTab = (index, titulo) => {
        setPestañaActiva(index);
        setTitulo(titulo)
    };

    return(
    <>
        <div>
            <div className="headerComponent">
                <div className="tituloComponent"/>
                <div className="selector">
                    <Selectores selectorFecha={true} />
                </div>
            </div>
            <div className="bodyComponent" >
                <div className='listTable'>
                    <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
                </div>
                <TablaInformesGerenciales datos={titulosTabs[pestañaActiva].datos} tituloTabla={titulosTabs[pestañaActiva].titulo} colums={titulosTabs[pestañaActiva].encabezado} />
            </div>
        </div>
    </>
  )
};