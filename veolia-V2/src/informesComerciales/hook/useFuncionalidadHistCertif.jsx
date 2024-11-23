export const useFuncionalidadHistCertif = () => {
    const formatearFecha = (fecha) => {
        if (fecha) {
            const parts = fecha.split("T")[0].split("-");
            if (parts.length === 3) {
                const año = parts[0];
                const mes = parts[1];
                const dia = parts[2];
                return `${año}/${mes}/${dia}`;
            }
        } 
        if (fecha === null) return 'N/A';
    };

    const onSignacionData = (response) => {
        return response.map(item => ({
            ...item,
            FECHCERTIFICA: formatearFecha(item.FECHCERTIFICA),
            FECHINTEGRA: formatearFecha(item.FECHINTEGRA)
        }));
    };

    return { onSignacionData };
};