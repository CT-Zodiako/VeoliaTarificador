import { TablaComponentes } from "../../../ui/components/TablaComponentes";

export const TablasVerificacion = ({ 
    columsEmpresa, verificacionEmpresa, columsAps, verificacionAPS,
    columsRelleno, verificacionRelleno
}) => {
    return(
    <>
        <div className="bodyComponent">
            <div className="d-flex justify-content-center mt-4">
                <div className="width-Component">
                    <div className="acctionTable">
                        <h3>Variables de ejecución corriente (MM/AA)</h3>
                    </div>
                    <div>
                        <div>
                            <TablaComponentes 
                                colums={columsEmpresa}
                                data={verificacionEmpresa}
                                page={false}
                            />
                        </div>
                        <div>
                            <TablaComponentes 
                                colums={columsAps}
                                data={verificacionAPS}
                                page={false}

                            />
                        </div>
                        <div>
                            <TablaComponentes 
                                colums={columsRelleno}
                                data={verificacionRelleno}
                                page={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};