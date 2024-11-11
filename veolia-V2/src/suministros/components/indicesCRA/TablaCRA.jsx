 export const TablaCRA = ({ data, getIndiceText, accionBoton }) => {
    return(
    <>
        <div className="d-flex justify-content-center mt-4 bodyComponent">
                <section className="width-Component">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-8">
                            <div className="card rounded">
                                <div className="card-body">
                                    <div className="table-responsive" style={{ maxHeight: '30rem', overflowY: 'auto' }}>
                                        <table className="table table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Indice</th>
                                                    <th>Valor</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data && data.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{getIndiceText(item)}</td>
                                                        <td className='text-end'><strong>$</strong> {item.INDI_VALOR}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center card rounded">
                            <div className="card-body d-flex justify-content-center">
                                {accionBoton()}
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    </>
  )
};