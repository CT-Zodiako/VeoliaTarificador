import { useCallback } from "react";

export const useFuncionalidadesIndicesCRA = (data = null) => {
    const getIndiceText = useCallback((item) => {
        if (item.PARA_INDICE20011 === 1) {
            return 'IPC';
        } else if (item.PARA_INDICE20011 === 2) {
            return 'SMLV';
        } else if (item.PARA_INDICE20011 === 3) {
            return 'IPCC';
        } else if (item.PARA_INDICE20011 === 4) {
            return 'IOEXP';
        } else {
            return 'Desconocido';
        }
    }, [data]);

    return { getIndiceText };
};