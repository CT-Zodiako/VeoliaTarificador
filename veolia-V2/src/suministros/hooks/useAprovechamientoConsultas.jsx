export const useAprovechamientoConsultas = ( setEstadoData, setDataAprovechamiento, aps = null, anno = null, mes = null ) => {
    const onDataAprovechamiento = (data) => {
        if (data.length > 0) {
            setEstadoData(true);
            setDataAprovechamiento(prevState => ({
                ...prevState,
                APSID: aps,
                APROANNO: anno,
                APROMES: mes,
                ACTIVAR: data[0].APROACTIVAR,
            }));
        } else {
            setEstadoData(false);
            setDataAprovechamiento(prevState => ({
                ...prevState,
                APSID: aps,
                APROANNO: anno,
                APROMES: mes,
                ACTIVAR: 0,
            }));
        }
    };

    const onAprovechamiento = (valor) => {
        valor === true ?
            setDataAprovechamiento(prevState => ({
                ...prevState,
                ACTIVAR: 1,
            }))
            : setDataAprovechamiento(prevState => ({
                ...prevState,
                ACTIVAR: 0,
            }));
    };

    return { onAprovechamiento, onDataAprovechamiento };
};