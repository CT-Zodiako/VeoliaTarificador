import { useState } from "react";
import { ModalValorProductividad } from "./ModalValorProductividad";

 export const ValorProductividad = ({datos, aps, ajusteProductividad, onServicioAjustes, fetchData}) => {
    const [modal, setModal] = useState(false);

    const onCerrarModal = () => {
        setModal(false);
    }
    
    return(
    <>
        <div className="d-flex justify-content-center mt-4 bodyComponent">
            <section className="width-Component">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="card rounded">
                            <div className="card-body">
                                <div className="table-responsive" style={{ maxHeight: '20rem', overflowY: 'auto' }}>
                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>valor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <>
                                                {datos &&
                                                    datos.map((item, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                <div>{item.PROD_VALOR}</div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center card rounded">
                        <div className="card-body d-flex justify-content-center">
                            <button
                                className={aps === '' || datos.length === 0 ? "btn btn-success" : "btn btn-warning"}
                                onClick={() => setModal(true)}
                            >
                                {aps === '' || datos.length === 0 ? 'Agregar' : 'Editar'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
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