import { useAnnoSelector, useApsSelector, useMesSelector } from "../store/storeSelectors";

 export const useSelectStore = () => {
    const mes = useMesSelector(state => state.mes);
    const anno = useAnnoSelector(state => state.anno);
    const aps = useApsSelector(state => state.aps);

    const data = {
        APSA_ID: aps,
        ANNO: anno,
        MES: mes
    };

    const request = {
        APS_ID: aps,
        ANNO: anno,
        MES: mes
    };

    const requestAnnoMes = {
        ANNO: anno,
        MES: mes
    };

    const requestFecha = {
        anno: anno,
        mes: mes
    };

    const requestSubCon = {
        APSA_ID: aps,
        SUCO_ANNO: anno,
        SUCO_MES: mes
    };

    const requestAjusteProd = {
        APSA_ID: aps,
        PROD_ANNO: anno,
        PROD_MES: mes
    };

    const requestVerif = {
        APSA_ID: aps,
        INED_ANNO: anno,
        INED_MES: mes
    };

    const requestAprov = {
        APSID: aps,
        APROANNO: anno,
        APROMES: mes,
    };

    const requestCosPoda = {
        APSA_ID: aps,
        CPTE_ANNO: anno,
        CPTE_MES: mes,
    };

    const requestDesCos = {
        APSA_ID: aps,
        DESC_ANNO: anno,
        DESC_MES: mes
    };

    return{ 
        anno, mes, aps, data, request, requestAnnoMes, requestFecha, requestSubCon, 
        requestAjusteProd, requestVerif, requestAprov, requestCosPoda, requestDesCos    
    };
};