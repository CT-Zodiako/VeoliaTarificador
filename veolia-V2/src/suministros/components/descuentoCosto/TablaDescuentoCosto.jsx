import { Table } from "react-bootstrap";
import { ModalCrearDescuentoCosto } from "./ModalCrearDescuentoCosto";
import { useFuncionalidadesDescuento } from "../../hooks/useFuncionalidadesDescuento";

 export const TablaDescuentoCosto = ({dataDescuento, onAgregarDescuentoCosto, onEditarDescuentoCosto, fetchData, data}) => {
    const { modal, onCerrarModal, columnDescuento, onAccionBoton } = useFuncionalidadesDescuento(dataDescuento, onEditarDescuentoCosto, fetchData);

    return(
    <>
        <div className="bodyComponent">
            <div className="d-flex justify-content-center mt-4">
                <div className="width-Component panel">
                    <div className="mb-3">
                        <div className="card-body d-flex justify-content-start">
                            <button
                                className="btn btn-success"
                                onClick={onCerrarModal}
                            >
                                Agregar
                            </button>
                        </div>
                    </div>
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
                                            {columnDescuento(item, index)}
                                        </td>
                                        <td>
                                            {onAccionBoton(index)}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
            <ModalCrearDescuentoCosto
                show={modal}
                onCerrarModal={onCerrarModal}
                data={data}
                onAgregarDescuentoCosto={onAgregarDescuentoCosto}
            />
        </div>
    </>
  )
};