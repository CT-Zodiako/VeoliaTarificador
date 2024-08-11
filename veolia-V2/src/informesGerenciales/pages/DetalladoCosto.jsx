import { useEffect, useState } from 'react'
// import { TableCofiguracion } from "../../ui/components/TableCofiguracion"
import { useAnnoSelector, useMesSelector } from '../../store/storeSelectors';
import { columnsAPSACosto, formatoCosto } from '../components/data';
import { getDetalladoCosto } from '../service/detalladoCostoService';
import { Selectores } from '../../ui/components/Selectores';
import { TablaInformesGerenciales } from '../components/TablaInformesGerenciales';

export const DetalladoCosto = () => {
  const mess = useMesSelector(state => state.mes);
  const anno = useAnnoSelector(state => state.anno)  
  const [dataDetalladoCosto, setDataDetalladoCosto] = useState({
    formato:{},
    datos:[]
  });
  console.log('data detallado costo: ', dataDetalladoCosto);
  
    const data = {
      ANNO: anno,
      MES: mess
    }

    const dataTablaDetallladoCosto = async() => {
      try{
          const detCos = await getDetalladoCosto(data);
          setDataDetalladoCosto({
            ...dataDetalladoCosto,
            formato: formatoCosto,
            datos: detCos
          });
      } catch {
          console.error('error data detallado costo'); 
      }
    }
  
    useEffect(()=> {
        if(anno && mess){
          dataTablaDetallladoCosto();
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
        <TablaInformesGerenciales datos={dataDetalladoCosto} tituloTabla={'Detallado de costos'} colums={columnsAPSACosto} />
      </div>
    </div>
  )
}
