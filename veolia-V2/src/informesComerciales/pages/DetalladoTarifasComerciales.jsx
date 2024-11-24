import { useEffect, useState } from "react";
import { columnsTarifasPlena, columnsTarifasSC, formatoTarifasPlena, formatoTarifasSC } from '../components/data';
import { getTarifasComerciales } from '../service/detalladoTarifasComerciales';
import { Selectores } from "../../ui/components/Selectores";
import { TabTable } from "../../ui/components/TabTable";
import { TablaInformesGerenciales } from "../../informesGerenciales/components/TablaInformesGerenciales";
import { useSelectStore } from "../../hooks/useSelectStore";
import { useFuncionalidadesTarifComerc } from "../hook/useFuncionalidadesTarifComerc";
import { TituloVista } from "../../ui/components/TituloVista";
import '../style/detalladoTarifas.css'

export const DetalladoTarifasComerciales = () => {
    const { anno, mes, requestAnnoMes } = useSelectStore();
    const [pestañaActiva, setPestañaActiva] = useState(0); 
    const [dataTarifaPlena, setDataTarifaPlena] = useState({
        formato:{},
        datos:[]
    });
    const [dataTarifaSubCon, setDataTarifaSubCon] = useState({
        formato:{},
        datos:[]
    });    
    
    const { asignacionData, titulosTabs } = useFuncionalidadesTarifComerc(
        setDataTarifaPlena, setDataTarifaSubCon, dataTarifaPlena,
        dataTarifaSubCon, formatoTarifasPlena, formatoTarifasSC, 
        columnsTarifasPlena, columnsTarifasSC
    );

    const dataTablasGerenciales = async() => {
        try{
            const infoGerenciales = await getTarifasComerciales(requestAnnoMes);
            asignacionData(infoGerenciales);
        } catch {
            console.error('data de las tablas no encontrada'); 
        }
    };
    
    const handleClickTab = (index) => {
        setPestañaActiva(index);
    };

    useEffect(()=> {
        if(anno && mes){
            dataTablasGerenciales();
        };
    }, [anno, mes]);

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Detallado Comerciales" />
            </div>
            <div className="selector">
                <Selectores selectorFecha={true} />
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent">
            <div className="width-Component">
                <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
                <div className="panel">
                    <TablaInformesGerenciales datos={titulosTabs[pestañaActiva].datos} tituloTabla={titulosTabs[pestañaActiva].titulo} colums={titulosTabs[pestañaActiva].encabezado} page={true}/>
                </div>
            </div>
        </div>
    </>
  )
};