import { useState, useMemo } from "react";

export const useFiltroTablas = (datos, initialForm = {}) => {
    const [filtro, setFiltro] = useState(initialForm) 
    
    console.log('filtro: ', filtro)
    
    const onFiltroTabla = (key, event) => {
        setFiltro({
            ...filtro[0],
            [key]: event.target.value
        });
    };

    const filtroName = useMemo(() => {        
        return filtro && Object.keys(filtro).length > 0 ?
        datos.datos.filter((item) => {   
            return Object.entries(filtro).some(([key, value]) => {
                const itemValue = item[key];
                if (itemValue !== undefined && value !== undefined) {
                    const itemValueStr = itemValue.toString().toLowerCase();
                    const valueStr = value.toString().toLowerCase();
                    return itemValueStr.includes(valueStr);
                }
                return false;
            });
        })
        : datos.datos;
    }, [filtro, datos]);

    return { onFiltroTabla, filtro, filtroName }; 
};