import { useCallback, useState } from "react";

export const useFuncionalidadesDescuento = ( dataDescuento = null, onEditarDescuentoCosto = null, fetchData = null ) => {
    const [editarDescuento, setEditarDescuento] = useState('');
    const [estadoData, setEstadoData] = useState(null);
    const [modal, setModal] = useState(false);

    const onCerrarModal = () => {
        setModal(!modal);
    };

    const onDescuentoCosto = (index) => {
        setEditarDescuento(dataDescuento[index]);
        setEstadoData(index);
    };

    const onEditarDescuento = (event) => {
        const {name, value} = event.target;
        setEditarDescuento({
            ...editarDescuento,
            [name]: value
        });
    };

    const onCancelarEditar = () => {
        setEditarDescuento('');
        setEstadoData(null);
    }; 

    const onEditar = async() => {
        try {
            await onEditarDescuentoCosto(editarDescuento);
            await fetchData();
            setEstadoData(null);
        } catch (error) {
            console.error(error);
        }
    };

    const columnDescuento = useCallback((item, index) => {
        return  estadoData === index ? (
                <input
                    type="number"
                    name='DESC_VALOR'
                    value={editarDescuento.DESC_VALOR}
                    onChange={onEditarDescuento}
                />
            ) :
            (
                item.DESC_VALOR
            );
    }, [dataDescuento]);

    const onAccionBoton = (index) => {
        return estadoData === index ? (
                <div>
                    <button
                        className="btn btn-success"
                        onClick={onEditar}
                    >
                        Guardar
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={onCancelarEditar}
                    >
                        Cancelar
                    </button>
                </div>
            ) :
            (
                <button
                    className="btn btn-warning"
                    onClick={() => onDescuentoCosto(index)}
                >
                    Editar
                </button>
            );
    };

    return { modal, onCerrarModal, columnDescuento, onAccionBoton };
};