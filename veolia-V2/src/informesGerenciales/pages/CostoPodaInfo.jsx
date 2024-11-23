import { useEffect, useState } from "react";
import { useApsSelector } from "../../store/storeSelectors";
import { getCostoPodaInfo } from "../service/costoPodaService";
import { Selectores } from "../../ui/components/Selectores";
import { TablaInformesGerenciales } from "../components/TablaInformesGerenciales";
import { columnsCostoPodaInfo, formatoCostoPodaInfo } from '../components/data';
import { TituloVista } from "../../ui/components/TituloVista";
export const CostoPodainfo = () => {
    const aps = useApsSelector(state => state.aps);
    const [dataCostoPodaInfo, setDataCostoPodaInfo] = useState({
      formato:{},
      datos:[]
    });
  
    const data = {
      APS_ID: aps
    };
    
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
    };

    useEffect(()=> {
      if(aps){
          dataTablasFormularios();
      }
    }, [aps]);

    return(
      <>
          <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Costo Poda" />
            </div>
              <div className="selector">
                  <Selectores selectorAps={true} />
              </div>
          </div>
          <div className="d-flex justify-content-center mt-4 bodyComponent" >
            <div className='width-Component'>
                <div className="borde-table">
                  <TablaInformesGerenciales datos={dataCostoPodaInfo} tituloTabla={'Costo Poda'} colums={columnsCostoPodaInfo} page={true}/>
                </div>
            </div>
          </div>
      </>
    )
};