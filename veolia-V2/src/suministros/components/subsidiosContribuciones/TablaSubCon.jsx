import { Button } from "react-bootstrap";

export const TablaSubCon = ({ data, handleShowModal, getClaseText }) => {
    return(
    <>
        <div className="d-flex justify-content-center  bodyComponent">
            <section className="width-Component">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-8">
                        <div className='acctionTable'>
                            <Button variant="primary" onClick={handleShowModal}>Editar Índices</Button>
                        </div>
                        <div className="card rounded">
                            <div className="card-body">
                                <div className="table-responsive" style={{ maxHeight: '40rem', overflowY: 'auto' }}>
                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Clase</th>
                                                <th>Valor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.map((item) => (
                                                <tr key={item.SUCO_ID}>
                                                    <td>{getClaseText(item.CLAS_CLASE)}</td>
                                                    <td className='text-end'>
                                                        <strong>$</strong> {item.SUCO_VALOR}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
};