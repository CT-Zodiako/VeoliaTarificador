import { useAnnoSelector, useApsSelector, useMesSelector } from "../store/storeSelectors";

 export const useSelectStore = () => {
    const mess = useMesSelector(state => state.mes);
    const anno = useAnnoSelector(state => state.anno);
    const aps = useApsSelector(state => state.aps);

    const data = {
        APSA_ID: aps,
        ANNO: anno,
        MES: mess
    };

    return{ anno, mess, aps, data }
};