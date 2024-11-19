import { useCallback } from "react";

export const useFuncionalidadesIndicesCRA = (data = null, handleShowModalNew, handleShowModal) => {
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

    const accionBoton = useCallback(() => {
        if (data && data.length === 0) {
            return <button onClick={handleShowModalNew} className="btn btn-success" style={{ width: '6rem' }}>Agregar</button>;
        }
        return <button onClick={handleShowModal} className="btn btn-warning" style={{ width: '6rem' }}>Editar</button>;
    }, [data]);
    

    return { getIndiceText, accionBoton };
};