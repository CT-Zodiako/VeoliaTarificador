import { useState } from "react";
import { getCargueSemestral } from "../cargueInformacion/service/cargueMensualService";
import { useApsSelector } from "../store/storeSelectors";

 export const useGetCargueEmpresa = () => {
    const aps = useApsSelector(state => state.aps);

    const [empresas, setEmpresas] = useState([]);

    const data = {
        APSA_ID : aps,
        propia: 1,
    }

    const onCargueSemestral = async() => {
        try{
            const cargue = await getCargueSemestral(data);
            setEmpresas(cargue);
        } catch {
            console.error('error en data cargue');
        }
    }

    return{empresas, onCargueSemestral};
};