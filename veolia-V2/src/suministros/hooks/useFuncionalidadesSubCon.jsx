import { useCallback } from "react";

export const useFuncionalidadesSubCon = (data = null) => {
    const getClaseText = useCallback((clase) => {
        switch (clase) {
            case 1:
                return 'Estrato 1';
            case 2:
                return 'Estrato 2';
            case 3:
                return 'Estrato 3';
            case 4:
                return 'Estrato 4';
            case 5:
                return 'Estrato 5';
            case 6:
                return 'Estrato 6';
            case 7:
                return 'Comercial';
            case 8:
                return 'Industrial';
            case 9:
                return 'Oficial';
            default:
                return 'Desconocido';
        }
    }, [data]);
    
    return { getClaseText };
};