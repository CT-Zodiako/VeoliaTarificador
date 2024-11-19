import { useEffect, useState } from 'react'
import { columnsAPSACosto, formatoCosto } from '../components/data';
import { getDetalladoCosto } from '../service/detalladoCostoService';
import { Selectores } from '../../ui/components/Selectores';
import { TablaInformesGerenciales } from '../components/TablaInformesGerenciales';
import { TituloVista } from '../../ui/components/TituloVista';
import { useSelectStore } from '../../hooks/useSelectStore';

export const DetalladoCosto = () => { 
  const { anno, mes, requestAnnoMes } = useSelectStore(); 
  const [dataDetalladoCosto, setDataDetalladoCosto] = useState({
    formato:{},
    datos:[]
  });

    const dataTablaDetallladoCosto = async() => {
      try{
          const detCos = await getDetalladoCosto(requestAnnoMes);
          setDataDetalladoCosto({
            ...dataDetalladoCosto,
            formato: formatoCosto,
            datos: detCos
          });
      } catch {
          console.error('error data detallado costo'); 
      }
    };
  
    useEffect(()=> {
        if(anno && mes){
          dataTablaDetallladoCosto();
        }
    }, [anno, mes]);

  return (
    <>
      <div className="headerComponent">
          <div className="selector">
              <TituloVista titulo="Detallado Facturación" />
          </div>
          <div className="selector">
              <Selectores selectorFecha={true} />
          </div>
      </div>
      <div className="d-flex justify-content-center mt-4 bodyComponent" >
        <div className='width-Component'>
            <div className="borde-table">
              <TablaInformesGerenciales datos={dataDetalladoCosto} tituloTabla={'Detallado de costos'} colums={columnsAPSACosto} />
            </div>
        </div>
      </div>
    </>
  )
}
