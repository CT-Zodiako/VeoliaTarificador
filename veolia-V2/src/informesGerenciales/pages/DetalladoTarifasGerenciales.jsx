import { useEffect, useMemo, useState } from "react";
import { useAnnoSelector, useMesSelector } from "../../store/storeSelectors";
import { columnsTarifasPlena, columnsTarifaSubCon, formatoTarifasPlena, formatoATarifaSubCon } from '../components/data';
import { getTarifasGerenciales } from '../service/detalladoTarifasGerenciales';
import { Selectores } from "../../ui/components/Selectores";
import { TablaInformesGerenciales } from "../components/TablaInformesGerenciales";
import { TabTable } from "../../ui/components/TabTable";
import { TituloVista } from "../../ui/components/TituloVista";

export const DetalladoTarifasGerenciales = () => {
    const mess = useMesSelector(state => state.mes);
    const anno = useAnnoSelector(state => state.anno);

    const [pestañaActiva, setPestañaActiva] = useState(0); 
    const [dataTarifaPlena, setDataTarifaPlena] = useState({
        formato:{},
        datos:[]
    });
    const [dataTarifaSubCon, setDataTarifaSubCon] = useState({
        formato:{},
        datos:[]
    });    

    const data = {
        ANNO: 2023,
        MES: 2
    };  

    const dataTablasGerenciales = async() => {
        try{
            const infoGerenciales = await getTarifasGerenciales(data);
            setDataTarifaPlena({
                ...dataTarifaPlena,
                formato: formatoTarifasPlena,
                datos: infoGerenciales
            });
            setDataTarifaSubCon({
                ...dataTarifaSubCon,
                formato: formatoATarifaSubCon,
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

    const titulosTabs = useMemo(() => [
        { titulo: 'Plena', datos: dataTarifaPlena, encabezado: columnsTarifasPlena },
        { titulo: 'Sub & Con', datos: dataTarifaSubCon, encabezado: columnsTarifaSubCon }
    ], [dataTarifaPlena, dataTarifaSubCon]);

    const handleClickTab = (index) => {
        setPestañaActiva(index);
    };

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Detallado Tarifas" />
            </div>
            <div className="selector">
                <Selectores selectorAps={true} selectorFecha={true} />
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent" >
            <div className='width-Component'>
                <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
                <div className="borde-table">
                    <TablaInformesGerenciales 
                        datos={titulosTabs[pestañaActiva].datos} tituloTabla={titulosTabs[pestañaActiva].titulo} 
                        colums={titulosTabs[pestañaActiva].encabezado} page={true}/>
                </div>
            </div>
        </div>
    </>
  )
};