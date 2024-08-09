import { useState } from "react";
import { Table } from "react-bootstrap";
import { ModalCrearDescuentoCosto } from "./ModalCrearDescuentoCosto";

 export const TablaDescuentoCosto = ({dataDescuento, onAgregarDescuentoCosto, onEditarDescuentoCosto, fetchData, data}) => {
    const [editarDescuento, setEditarDescuento] = useState('');
    const [estadoData, setEstadoData] = useState(null);
    const [modal, setModal] = useState(false);
    console.log('dataDescuento: ', dataDescuento);
    console.log('editarDescuento: ', editarDescuento);
    
    const onCerrarModal = () => {
        setModal(false);
    }

    const onDescuentoCosto = (index) => {
        setEditarDescuento(dataDescuento[index]);
        setEstadoData(index);
    }

    const onEditarDescuento = (event) => {
        const {name, value} = event.target;
        setEditarDescuento({
            ...editarDescuento,
            [name]: value
        });
    }

    const onCancelarEditar = () => {
        setEditarDescuento('');
        setEstadoData(null);
    }

    const onEditar = async() => {
        try {
            await onEditarDescuentoCosto(editarDescuento);
            await fetchData();
            setEstadoData(null);
        } catch (error) {
            console.error(error);
        }
    }

    return(
    <>
        <div className="componenTable" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="acctionTable"/>
            <div className='tableBorde' style={{ width: '50%' }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Costo</th>
                            <th>Descuento</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   dataDescuento &&
                            dataDescuento.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.PARA_NOMBRE}</td>
                                    <td>
                                        {
                                            estadoData === index ? (
                                                <input
                                                    type="number"
                                                    name='DESC_VALOR'
                                                    value={editarDescuento.DESC_VALOR}
                                                    onChange={onEditarDescuento}
                                                />
                                            ) :
                                            (
                                                item.DESC_VALOR
                                            )
                                        }
                                    </td>
                                    <td>
                                        {
                                            estadoData === index ? (
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
                                            )
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <div>
                    <button
                        onClick={() => setModal(true)}
                    >
                        Agregar
                    </button>
                </div>
                <ModalCrearDescuentoCosto
                    show={modal}
                    onCerrarModal={onCerrarModal}
                    data={data}
                    onAgregarDescuentoCosto={onAgregarDescuentoCosto}
                />
            </div>
        </div>
    </>
  )
};