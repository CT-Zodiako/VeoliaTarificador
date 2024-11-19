import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { TituloVista } from "../../ui/components/TituloVista";
import { AccionAprovechamiento } from "../components/aprovechamiento/AccionAprovechamiento";
import { useAprovechamientoConsultas } from "../hooks/useAprovechamientoConsultas";
import { getResumenAprovechamiento, patchResumenAprovechamiento, postResumenAprovechamiento } from "../service/resumenAprovechamientoService";
import { useSelectStore } from "../../hooks/useSelectStore";

 export const ActivarAprovechamiento = () => {
    const { anno, mes, aps, requestAprov } = useSelectStore();
    const [estadoData, setEstadoData] = useState(false);
    const [dataAprovechamiento, setDataAprovechamiento] = useState(
        {
            APSID: 0,
            APROANNO: 0,
            APROMES: 0,
            ACTIVAR: 0,
        }
    );  
    const { onAprovechamiento, onDataAprovechamiento } = useAprovechamientoConsultas(setEstadoData, setDataAprovechamiento, aps, anno, mes);  

    const fetchDataAndUpdateState = async () => {
        try {
            const response = await getResumenAprovechamiento(requestAprov);   
            onDataAprovechamiento(response);
        } catch (error) {
            console.error(error);
        }
    };

    const onResumenAprovechamiento = async () => {
        try {
            estadoData === true ? 
                await patchResumenAprovechamiento(dataAprovechamiento) 
                : postResumenAprovechamiento(dataAprovechamiento);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if(anno && mes && aps) {
            fetchDataAndUpdateState();    
        };
    }, [anno, mes, aps]);

  return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Activar Aprovechamiento" />
            </div>
            <div className="selector">
                <Selectores selectorAps={true} selectorFecha={true} />
            </div>
        </div>
        <AccionAprovechamiento 
            aps={aps} dataAprovechamiento={dataAprovechamiento} 
            onAprovechamiento={onAprovechamiento} onResumenAprovechamiento={onResumenAprovechamiento}
        />
    </>
  )
};