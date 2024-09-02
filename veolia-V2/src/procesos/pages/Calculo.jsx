import { useEffect, useState } from "react";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { getQrtChart } from "../service/calculoGraficasService";

 export const Calculo = () => {
    const mess = useMesSelector(state => state.mes);
    const anno = useAnnoSelector(state => state.anno);
    const aps = useApsSelector(state => state.aps);

    const[dataQrt, setDataQrt] = useState([]);
    console.log('arreglo dataQrt: ', dataQrt);
    
    const data = {
        APSA_ID: 1011,
        ANNO: 2024,
        MES: 8,
    }

    const onDataGraficas = async() => {
        try{
            const Qrt = await getQrtChart(data);
            setDataQrt(Qrt);
        } catch {
            console.error('error en data calculo');
        }
    }

    useEffect(() => {
        onDataGraficas();
    }, [anno, mess, aps])

    return(
    <>
    </>
  )
};