import { useEffect, useState } from "react";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { Selectores } from "../../ui/components/Selectores";
import { SelectorAprovechamiento } from "../components/aprovechamiento/SelectorAprovechamiento";
import { getResumenAprovechamiento, patchResumenAprovechamiento, postResumenAprovechamiento } from "../service/resumenAprovechamientoService";

 export const ActivarAprovechamiento = () => {
    const aps = useApsSelector(state => state.aps);
    const anno = useAnnoSelector((state) => state.anno);
    const mes = useMesSelector((state) => state.mes);

    const [dataAprovechamiento, setDataAprovechamiento] = useState(
        {
            APSID: 0,
            APROANNO: 0,
            APROMES: 0,
            ACTIVAR: 0,
        }
    );    
    const [estadoData, setEstadoData] = useState(false);
    
    const data = {
        APSID: aps,
        APROANNO: anno,
        APROMES: mes,
    }

    const onAprovechamiento = (valor) => {
        valor === true ?
            setDataAprovechamiento(prevState => ({
                ...prevState,
                APSID: aps,
                APROANNO: anno,
                APROMES: mes,
                ACTIVAR: 1,
            }))
            : setDataAprovechamiento(prevState => ({
                ...prevState,
                APSID: aps,
                APROANNO: anno,
                APROMES: mes,
                ACTIVAR: 0,
            }));
    }

    const onResumenAprovechamiento = async () => {
        try {
            estadoData === true ? 
                await patchResumenAprovechamiento(dataAprovechamiento) 
                : postResumenAprovechamiento(dataAprovechamiento);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const fetchDataAndUpdateState = async () => {
            try {
                const response = await getResumenAprovechamiento(data);                
                if (response.length > 0) {
                    setEstadoData(true);
                    setDataAprovechamiento(prevState => ({
                        ...prevState,
                        APSID: aps,
                        APROANNO: anno,
                        APROMES: mes,
                        ACTIVAR: response[0].APROACTIVAR,
                    }));
                } else {
                    setEstadoData(false);
                    setDataAprovechamiento(prevState => ({
                        ...prevState,
                        APSID: aps,
                        APROANNO: anno,
                        APROMES: mes,
                        ACTIVAR: 0,
                    }));
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchDataAndUpdateState();    
    }, [anno, mes, aps]);

  return(
    <>
        <Selectores selectorAps={true} selectorFecha={true} />
        {
            aps === '' ? null 
                :(
                    <>
                        <div className="d-flex justify-content-center" style={{ height: '100px' }}>
                            <SelectorAprovechamiento 
                                dataAprovechamiento={dataAprovechamiento.ACTIVAR === 0 ? false : true}
                                onAprovechamiento={onAprovechamiento}
                            />
                        </div>
                        <button
                            onClick={onResumenAprovechamiento}
                            className="btn btn-success"
                        >
                            Activar
                        </button>
                    </>
                )
        }
    </>
  )
};