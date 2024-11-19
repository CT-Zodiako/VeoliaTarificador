import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { columsEmpresa, columsAps, columsRelleno } from "../components/data";
import { TituloVista } from "../../ui/components/TituloVista";
import { TablasVerificacion } from "../components/verificacion/TablasVerificacion";
import { getVerificacinRelleno, getVerificacionAPS, getVerificacionEmpresa } from "../service/verificacionService";
import { useSelectStore } from "../../hooks/useSelectStore";

 export const Verificacion = () => {
    const {anno, mes, aps, requestVerif } = useSelectStore();
    const [verificacionEmpresa, setVerificacionEmpresa] = useState([]);
    const [verificacionAPS, setVerificacionAPS] = useState([]);
    const [verificacionRelleno, setVerificacionRelleno] = useState([]);

    const dataEmpresa = async() => {
        try {
            const empresa = await getVerificacionEmpresa(requestVerif);
            setVerificacionEmpresa(empresa);
        } catch (error) {
            console.error('error en data empresa: ',error);
        }
    }; 

    const dataAPS = async() => {
        try {
            const APS = await getVerificacionAPS(requestVerif);
            setVerificacionAPS(APS);
        } catch (error) {
            console.error('error en data APS: ',error);
        }
    };

    const dataRelleno = async() => {
        try {
            const relleno = await getVerificacinRelleno(requestVerif);
            setVerificacionRelleno(relleno);
        } catch (error) {
            console.error('error en data relleno: ',error);
        }
    };

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