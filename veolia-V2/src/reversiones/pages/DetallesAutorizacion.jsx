import { useEffect, useState } from 'react';
import { columnsDetaAutorizacion, formatoDetaAutorizacion } from '../components/data'; 
import { TablaInformesGerenciales } from '../../informesGerenciales/components/TablaInformesGerenciales';
import { getDetalladoAutorizacion } from '../service/detalladoAutorizacionService';
import { TituloVista } from '../../ui/components/TituloVista';

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
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Detalles Autorizacion" />
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent" >
            <div className='width-Component'>
                <div className="panel">
                    <TablaInformesGerenciales datos={dataDetalleAutorizacion} colums={columnsDetaAutorizacion} page={true} />
                </div>
            </div>
        </div>
    </>
  )
};