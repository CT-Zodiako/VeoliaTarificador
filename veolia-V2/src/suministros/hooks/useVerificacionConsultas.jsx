import { useState } from "react";
import { getVerificacinRelleno, getVerificacionAPS, getVerificacionEmpresa } from "../service/verificacionService";

export const useVerificacionConsultas = (requestVerif = null) => {
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
    return{ verificacionEmpresa, verificacionAPS, verificacionRelleno, dataEmpresa, dataAPS, dataRelleno };
};