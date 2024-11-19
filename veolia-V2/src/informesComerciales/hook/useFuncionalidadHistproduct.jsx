export const useFuncionalidadHistproduct = () => {
    const formatearNumero = (numero) => {
        if (!numero || isNaN(numero)) return null;
            return parseFloat(numero).toFixed(5);
    };

    const onAsignacionData = (response) => {
        const formattedData =  response.map(item => ({
            ...item,
            PR22_VALOR: item.PR22_VALOR ? formatearNumero(item.PR22_VALOR) : item.PR22_VALOR,
        }));
        return formattedData;
    };

    return { onAsignacionData };
};