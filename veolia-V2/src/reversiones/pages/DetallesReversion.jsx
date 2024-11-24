import { useEffect, useState } from "react";
import { getDetalladoReversiones } from "../service/detalladoReversionService";
import { TablaInformesGerenciales } from "../../informesGerenciales/components/TablaInformesGerenciales";
import { columnsDetaReversiones, formatoDetaReversiones } from '../components/data'; 
import { TituloVista } from "../../ui/components/TituloVista";

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
    };

    useEffect(() =>{
        onTablaReversiones();
    }, []);

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Detalles de Reversiones" />
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent" >
            <div className='width-Component'>
                <div className="panel">
                    <TablaInformesGerenciales datos={dataDetalleReversiones} colums={columnsDetaReversiones} page={true} />
                </div>
            </div>
        </div>
    </>
  )
};