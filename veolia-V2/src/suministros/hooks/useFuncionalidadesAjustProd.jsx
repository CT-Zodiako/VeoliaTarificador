export const useFuncionalidadesAjustProd = ( setEstadoAjuste, setAjusteProductividad, aps, anno, mes ) => {
    const estodAjusteProdut = (estado) => {
        if (estado.length > 0) {
            setEstadoAjuste(true)
            setAjusteProductividad(prevState => ({
                ...prevState,
                APSA_ID: aps,
                PROD_ANNO: anno,
                PROD_MES: mes,
                PROD_VALOR: estado[0].PROD_VALOR
            }));
        } else {
            setEstadoAjuste(false)
            setAjusteProductividad(prevState => ({
                ...prevState,
                APSA_ID: aps,
                PROD_ANNO: anno,
                PROD_MES: mes,
                PROD_VALOR: 0
            }));
        };
    };

    return { estodAjusteProdut };
};