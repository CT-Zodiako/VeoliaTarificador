import { useEffect } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { columsEmpresa, columsAps, columsRelleno } from "../components/data";
import { TituloVista } from "../../ui/components/TituloVista";
import { TablasVerificacion } from "../components/verificacion/TablasVerificacion";
import { useVerificacionConsultas } from "../hooks/useVerificacionConsultas";
import { useSelectStore } from "../../hooks/useSelectStore";

 export const Verificacion = () => {
    const {anno, mes, aps, requestVerif } = useSelectStore();
    const { verificacionEmpresa, verificacionAPS, verificacionRelleno, dataEmpresa, dataAPS, dataRelleno } = useVerificacionConsultas(requestVerif);   

    useEffect(() => {
        if(aps && anno && mes){
            dataEmpresa();
            dataAPS();
            dataRelleno();
        };
    },[aps, anno, mes]);

  return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Periodo de liquidación" />
            </div>
            <div className="selector">
                <Selectores selectorAps={true} selectorFecha={true} />
            </div>
        </div>
        <TablasVerificacion 
            columsEmpresa={columsEmpresa} verificacionEmpresa={verificacionEmpresa}
            columsAps={columsAps} verificacionAPS={verificacionAPS}
            columsRelleno={columsRelleno} verificacionRelleno={verificacionRelleno}
        />
    </>
  )
};