import { useState } from "react";
import { Table } from "react-bootstrap";
import { ModalValorProductividad } from "./ModalValorProductividad";

 export const ValorProductividad = ({datos, aps, ajusteProductividad, onServicioAjustes, fetchData}) => {
    const [modal, setModal] = useState(false);

    const onCerrarModal = () => {
        setModal(false);
    }
    
    return(
    <>
        <div className="componenTable" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="acctionTable"/>
            <div  className='tableBorde' style={{ width: '50%' }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datos &&
                        datos.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <div>{item.PROD_VALOR}</div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            </div>
        </div>
        <div>
            <button
                className={aps === '' || datos.length === 0 ? "btn btn-success" : "btn btn-warning"}
                onClick={() => setModal(true)}
            >
                {aps === '' || datos.length === 0 ? 'Agregar' : 'Editar'}
            </button>
        </div>
        <ModalValorProductividad
            show={modal}
            onCerrarModal={onCerrarModal}
            ajusteProductividad={ajusteProductividad}
            onServicioAjustes={onServicioAjustes}
            fetchData={fetchData}
        />
    </>
  )
};