import { useEffect, useState } from 'react'
import { getsubAporte } from '../service/detalladoSubAport'
import { Selectores } from '../../ui/components/Selectores'
import { columnsAPSA, formato } from '../components/data';
import { useAnnoSelector, useMesSelector } from '../../store/storeSelectors';
import { TablaInformesGerenciales } from '../components/TablaInformesGerenciales';

export const DataDetalladoSubAport = () => {
  const mess = useMesSelector(state => state.mes);
  const anno = useAnnoSelector(state => state.anno)  
  const [dataSubAport, setDataSubAport] = useState({
    formato:{},
    datos:[]
  }); 

  const data = {
    ANNO: anno,
    MES: mess
  }

  const dataTablaSubAport = async() => {
    try{
        const subAport = await getsubAporte(data);
        setDataSubAport({
          ...dataSubAport,
          formato: formato,
          datos: subAport
        });
    } catch {
        console.error('error data sub/aport'); 
    }
  }

  useEffect(()=> {
      if(anno && mess){
        dataTablaSubAport();
      }
  }, [anno, mess])

  return (
    <div>
      <div className="headerComponent">
          <div className="tituloComponent"/>
          <div className="selector">
              <Selectores selectorFecha={true} />
          </div>
      </div>
      <div className="bodyComponent" >
        <TablaInformesGerenciales datos={dataSubAport} tituloTabla={'Detallado de Sub y Aporte'} colums={columnsAPSA} />
      </div>
    </div>
  )
}
