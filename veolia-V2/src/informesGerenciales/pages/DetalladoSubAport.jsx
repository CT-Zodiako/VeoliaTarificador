import { useEffect, useState } from 'react'
import { getsubAporte } from '../service/detalladoSubAport'
import { Selectores } from '../../ui/components/Selectores'
import { columnsAPSA, formato } from '../components/data';
import { TablaInformesGerenciales } from '../components/TablaInformesGerenciales';
import { TituloVista } from '../../ui/components/TituloVista';
import { useSelectStore } from '../../hooks/useSelectStore';

export const DataDetalladoSubAport = () => {  
  const { anno, mes, requestAnnoMes } = useSelectStore();
  const [dataSubAport, setDataSubAport] = useState({
    formato:{},
    datos:[]
  }); 

  const dataTablaSubAport = async() => {
    try{
        const subAport = await getsubAporte(requestAnnoMes);
        setDataSubAport({
          ...dataSubAport,
          formato: formato,
          datos: subAport
        });
    } catch {
        console.error('error data sub/aport'); 
    }
  };

  useEffect(()=> {
      if(anno && mes){
        dataTablaSubAport();
      }
  }, [anno, mes]);

  return (
    <>
      <div className="headerComponent">
        <div className="selector">
            <TituloVista titulo="Detallado de Sub y Aporte" />
        </div>
        <div className="selector">
            <Selectores selectorAps={true} selectorFecha={true} />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4 bodyComponent" >
        <div className='width-Component'>
          <div className="borde-table">
            <TablaInformesGerenciales datos={dataSubAport} tituloTabla={'Detallado de Sub y Aporte'} colums={columnsAPSA} />
          </div>
        </div>
      </div>
    </>
  )
}
