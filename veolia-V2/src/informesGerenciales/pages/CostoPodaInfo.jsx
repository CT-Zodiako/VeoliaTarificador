import { useEffect, useState } from "react";
import { useApsSelector } from "../../store/storeSelectors";
import { getCostoPodaInfo } from "../service/costoPodaService";
import { Selectores } from "../../ui/components/Selectores";
import { TablaInformesGerenciales } from "../components/TablaInformesGerenciales";
import { columnsCostoPodaInfo, formatoCostoPodaInfo } from '../components/data';
export const CostoPodainfo = () => {
    const aps = useApsSelector(state => state.aps);

    const [dataCostoPodaInfo, setDataCostoPodaInfo] = useState({
      formato:{},
      datos:[]
    });
  console.log('costo poda info: ', dataCostoPodaInfo);
  
    const data = {
      APS_ID: aps
    }
    
    const dataTablasFormularios = async() => {
      try{
          const costo = await getCostoPodaInfo(data);
          setDataCostoPodaInfo({
            ...dataCostoPodaInfo,
            formato: formatoCostoPodaInfo,
            datos: costo
          });
      } catch {
          console.error('data de las tablas no encontrada'); 
      }
    }

    useEffect(()=> {
      if(aps){
          dataTablasFormularios();
      }
    }, [aps])

    return(
      <>
        <div>
            <div className="headerComponent">
                <div className="tituloComponent"/>
                <div className="selector">
                    <Selectores selectorAps={true} />
                </div>
            </div>
            <div className="bodyComponent" >
                <TablaInformesGerenciales datos={dataCostoPodaInfo} tituloTabla={'Costo Poda'} colums={columnsCostoPodaInfo} />
            </div>
        </div>
      </>
    )
};