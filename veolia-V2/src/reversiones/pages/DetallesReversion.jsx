import { useEffect, useState } from "react";
import { getDetalladoReversiones } from "../service/detalladoReversionService";
import { TablaInformesGerenciales } from "../../informesGerenciales/components/TablaInformesGerenciales";
import { columnsDetaReversiones, formatoDetaReversiones } from '../components/data'; 

 export const DetallesReversion = () => {
    const [dataDetalleReversiones, setDataDetalleReversiones] = useState({
        formato:{},
        datos:[]
    });
    
    const onTablaReversiones = async() => {
        try{
            const detalleReversiones = await getDetalladoReversiones();
            setDataDetalleReversiones(detalleReversiones);
            setDataDetalleReversiones({
                ...dataDetalleReversiones,
                formato: formatoDetaReversiones,
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
            <div>
                {/* <div className='listTable'>
                </div> */}
                <TablaInformesGerenciales datos={dataDetalleReversiones} tituloTabla='Detalles de Reversiones' colums={columnsDetaReversiones} />
            </div>
        </div>
    </>
  )
};