import { useEffect, useState } from "react";
import { useAnnoSelector, useApsSelector, useMesSelector, useProyeccionesSelector } from "../../store/storeSelectors";
import { Selectores } from "../../ui/components/Selectores";
import { getSubContribuciones } from "../services/subsidiosContribuciones";
import { columnsSubContri } from "../components/data";
import { TablaComponentes } from "../../ui/components/TablaComponentes";

 export const SubsidiosContribuciones = () => {
    const aps = useApsSelector(state => state.aps);
    const anno = useAnnoSelector((state) => state.anno);
    const mess = useMesSelector((state) => state.mes);
    const proy = useProyeccionesSelector(state => state.proy);

    const [dataSubCon, setDataSubCon] = useState([]);

    const data = {
        APSA_ID: aps,
        PROY_ID: proy,
        SUCO_ANNO: anno,
        SUCO_MES: mess,
    }

    const onTablaSubCon = async() => {
        try{
            const subCon = await getSubContribuciones(data);
            console.log('data subCon: ', subCon);
            setDataSubCon(subCon);
        } catch {
            console.error('error en data subsidios contribuciones');
        }
    }

    useEffect(() =>{
        if (aps && proy) {
            onTablaSubCon();
        }
    },[aps, proy, anno, mess] );

    return(
    <>
        <div>
            <div className="headerComponent">
                <div className="tituloComponent"/>
                <div className="selector">
                    <Selectores selectorFecha={true} selectorAps={true} selectorProy={true} selectDrescripcion={true}/>
                </div>
            </div>
            <div className="bodyComponent" >
                <TablaComponentes colums={columnsSubContri} data={dataSubCon}/>
            </div>
        </div>
    </>
  )
};