import { useEffect, useState } from 'react';
import { columnsDetaAutorizacion, formatoDetaAutorizacion } from '../components/data'; 
import { TablaInformesGerenciales } from '../../informesGerenciales/components/TablaInformesGerenciales';
import { getDetalladoAutorizacion } from '../service/detalladoAutorizacionService';

 export const DetallesAutorizacion = () => {
    const [dataDetalleAutorizacion, setDataDetalleReversiones] = useState({
        formato:{},
        datos:[]
    });
    
    const onTablaReversiones = async() => {
        try{
            const detalleReversiones = await getDetalladoAutorizacion();
            setDataDetalleReversiones(detalleReversiones);
            setDataDetalleReversiones({
                ...dataDetalleAutorizacion,
                formato: formatoDetaAutorizacion,
                datos: detalleReversiones
            });
        } catch {
            console.error('error en data detalle reversiones');
        }
    }

    useEffect(() =>{
        onTablaReversiones();
    }, [])

    return(
    <>
        <div>
            <div className="bodyComponent" >
                {/* <div className='listTable'>
                </div> */}
                <TablaInformesGerenciales datos={dataDetalleAutorizacion} tituloTabla='Detalles Autorizacion' colums={columnsDetaAutorizacion} />
            </div>
        </div>
    </>
  )
};