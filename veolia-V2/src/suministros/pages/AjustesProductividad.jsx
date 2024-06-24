import { useEffect, useState } from "react";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { Selectores } from "../../ui/components/Selectores";
import { ValorProductividad } from "../components/ajusteProductividad/ValorProductividad";
import { getAjuestesProductividad } from "../service/ajustesProductividadService";

 export const AjustesProductividad = () => {
    const aps = useApsSelector(state => state.aps);
    const anno = useAnnoSelector((state) => state.anno);
    const mes = useMesSelector((state) => state.mes);
    const [] = useState([]);

    const data = {
        APSA_ID: aps,
        PROD_ANNO: anno,
        PROD_MES: mes
    }

    const fetchData = async () => {
        try {
            const response = await getAjuestesProductividad(data);
            console.log(response);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    },[aps, anno, mes]);

    return(
    <>
        <Selectores selectorAps={true} selectorFecha={true} />
        <ValorProductividad />
    </>
  )
};