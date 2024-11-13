import { useEffect } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { TituloVista } from "../../ui/components/TituloVista";
import { AccionAprovechamiento } from "../components/aprovechamiento/AccionAprovechamiento";
import { useAprovechamientoConsultas } from "../hooks/useAprovechamientoConsultas";
import { useSelectStore } from "../../hooks/useSelectStore";

 export const ActivarAprovechamiento = () => {
    const { anno, mes, aps, dataAprov } = useSelectStore();

    const { 
        dataAprovechamiento, fetchDataAndUpdateState, 
        onAprovechamiento, onResumenAprovechamiento 
    } = useAprovechamientoConsultas(dataAprov, aps, anno, mes);   

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