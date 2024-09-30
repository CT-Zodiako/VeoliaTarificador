import { useEffect, useState } from "react";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { Selectores } from "../../ui/components/Selectores";
import { TabTable } from "../../ui/components/TabTable";
import { getDetFac, getDetFacClus, getDetFacDinc, getFacturacion } from "../service/detalladoFacturacion";
import { columnsDetFac, columnsDetFacClus, columnsDetFacDINC, columnsFacturacion, formatoDetFac, formatoDetFacClus, formatoDetFacDINC, formatoFacturacion } from "../components/data";
 
export const DetalladoFacturacion = () => {
    const aps = useApsSelector(state => state.aps);
    const mess = useMesSelector(state => state.mes);
    const anno = useAnnoSelector(state => state.anno);

    const [pestañaActiva, setPestañaActiva] = useState(0); 
    const [dataFacturacion, setDataFacturacion] = useState({
        formato:{},
        datos:[]
    });
    console.log('dataFacturacion', dataFacturacion);
    
    const [dataDetFac, setDataDetFac] = useState({
        formato:{},
        datos:[]
    });
    console.log('dataDetFac', dataDetFac);
    
    const [dataDetFacClus, setDataDetFacClus] = useState({
        formato:{},
        datos:[]
    });
    console.log('dataDetFacClus', dataDetFacClus);
    
    const [dataDetFacDinc, setDataDetFacDinc] = useState({
        formato:{},
        datos:[]
    });
    console.log('dataDetFacDinc', dataDetFacDinc);
    

    const data = {
        APS_ID: aps,
        ANNO: anno,
        MES: mess
    }

    const dataTablasFacturacion = async() => {
        try{
            const facturacion = await getFacturacion(data);
            setDataFacturacion({
                ...dataFacturacion,
                formato: formatoFacturacion,
                datos: facturacion
            });

            // const detFac = await getDetFac(data);
            // setDataDetFac({
            //     ...dataDetFac,
            //     formato: formatoDetFac,
            //     datos: detFac
            // });

            // const detFacClus = await getDetFacClus(data);
            // setDataDetFacClus({
            //     ...dataDetFacClus,
            //     formato: formatoDetFacClus,
            //     datos: detFacClus
            // });

            // const detFacDinc = await getDetFacDinc(data);
            // setDataDetFacDinc({
            //     ...dataDetFacDinc,
            //     formato: formatoDetFacDINC,
            //     datos: detFacDinc
            // });
        } catch {
            console.error('data de las tablas no encontrada'); 
        }
    }

    useEffect(()=>{
        if (aps && mess && anno){
            dataTablasFacturacion();
        }
    }, [aps, mess, anno])

    const titulosTabs = [
        { titulo: 'Facturacion', datos: dataFacturacion, encabezado: columnsFacturacion },
        { titulo: 'Det Facturacion', datos: dataDetFac, encabezado: columnsDetFac},
        { titulo: 'Det Facturacion CLUS', datos: dataDetFacClus, encabezado: columnsDetFacClus },
        { titulo: 'Det Facturacion DINC', datos: dataDetFacDinc, encabezado: columnsDetFacDINC }
    ];

    const handleClickTab = (index, titulo) => {
        setPestañaActiva(index);
    };

    return(
    <>
        <div>
            <div className="headerComponent">
                <div className="tituloComponent"/>
                <div className="selector">
                    <Selectores selectorAps={true} selectorFecha={true} />
                </div>
            </div>
            <div className="bodyComponent" >
                <div className='listTable'>
                    <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
                </div>
                {/* <TablaInformesGerenciales datos={dataDetalleReversiones} tituloTabla='Detalles de Reversiones' colums={columnsDetaReversiones} /> */}
            </div>
        </div>
    </>
  )
};