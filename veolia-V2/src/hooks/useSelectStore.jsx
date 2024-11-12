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

    const dataAnnoMes = {
        ANNO: anno,
        MES: mes
    };

    const dataSubCon = {
        APSA_ID: aps,
        SUCO_ANNO: anno,
        SUCO_MES: mes
    };

    const dataAjusteProd = {
        APSA_ID: aps,
        PROD_ANNO: anno,
        PROD_MES: mes
    };

    return{ anno, mes, aps, data, dataAnnoMes, dataSubCon, dataAjusteProd };
};