import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { TabTable } from "../../ui/components/TabTable";
import { getDetFac, getDetFacClus, getDetFacDinc, getFacturacion } from "../service/detalladoFacturacion";
import { columnsDetFac, columnsDetFacClus, columnsDetFacDINC, columnsFacturacion, formatoDetFac, formatoDetFacClus, formatoDetFacDINC, formatoFacturacion } from "../components/data";
import { TablaInformesGerenciales } from "../../informesGerenciales/components/TablaInformesGerenciales";
import { TituloVista } from "../../ui/components/TituloVista";
import { useSelectStore } from "../../hooks/useSelectStore";
import { useFuncionalidadesFacturacion } from "../hook/useFuncionalidadesFacturacion";
 
export const DetalladoFacturacion = () => {
    const { aps, anno, mes, request } = useSelectStore();
    const [pestañaActiva, setPestañaActiva] = useState(0); 
    const [dataFacturacion, setDataFacturacion] = useState({
        formato:{},
        datos:[]
    });
    
    const [dataDetFac, setDataDetFac] = useState({
        formato:{},
        datos:[]
    });
    
    const [dataDetFacClus, setDataDetFacClus] = useState({
        formato:{},
        datos:[]
    });
    
    const [dataDetFacDinc, setDataDetFacDinc] = useState({
        formato:{},
        datos:[]
    });    

    const { titulosTabs } = useFuncionalidadesFacturacion(dataFacturacion, dataDetFac, dataDetFacClus, 
        dataDetFacDinc, columnsFacturacion, columnsDetFac, columnsDetFacClus, columnsDetFacDINC);

    const onDataFacturacion = async() => {
        const facturacion = await getFacturacion(request);
        setDataFacturacion({
            ...dataFacturacion,
                formato: formatoFacturacion,
                datos: facturacion
        });
    };

    const onDataDetFac = async() => {
        const detFac = await getDetFac(request);
        setDataDetFac({
            ...dataDetFac,
                formato: formatoDetFac,
                datos: detFac
        });
    };

    const onDataDetFacClus = async() => {
        const detFacClus = await getDetFacClus(request);
        setDataDetFacClus({
            ...dataDetFacClus,
                formato: formatoDetFacClus,
                datos: detFacClus
        });
    };

    const onDataDetFacDinc = async() => {
        const detFacDinc = await getDetFacDinc(request);
        setDataDetFacDinc({
            ...dataDetFacDinc,
                formato: formatoDetFacDINC,
                datos: detFacDinc
        });
    };

    useEffect(()=>{
        if (aps && mes && anno){
            onDataDetFac();
            onDataDetFacClus();
            onDataDetFacDinc();
            onDataFacturacion();
        }
    }, [aps, mes, anno]);

    const handleClickTab = (index) => {
        setPestañaActiva(index);
    };

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Detallado Facturación" />
            </div>
            <div className="selector">
                <Selectores selectorAps={true} selectorFecha={true} />
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent" >
            <div className='width-Component'>
                <TabTable titulosTabs={titulosTabs} onTabClick={handleClickTab} />
                <div className="borde-table">
                    <TablaInformesGerenciales 
                        datos={titulosTabs[pestañaActiva].datos} tituloTabla={titulosTabs[pestañaActiva].titulo} 
                        colums={titulosTabs[pestañaActiva].encabezado} page={true} />
                </div>
            </div>
        </div>
    </>
  )
};