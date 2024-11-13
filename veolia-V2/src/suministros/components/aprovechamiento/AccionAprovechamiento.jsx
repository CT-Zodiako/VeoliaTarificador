import { useMemo } from "react";
import { SelectorAprovechamiento } from "./SelectorAprovechamiento";

 export const AccionAprovechamiento = ({ aps, dataAprovechamiento, onAprovechamiento, onResumenAprovechamiento  }) => {
    const estadoAprovechamiento = useMemo(() => {
        return dataAprovechamiento.ACTIVAR === 0 ? false : true;
    }, [dataAprovechamiento]);

    return(
    <>
        <div className="d-flex justify-content-center mt-4 bodyComponent">
            <div className="d-flex justify-content-center width-Component">
                <div className="col-md-8">
                    <div className="card rounded d-flex justify-content-center" style={{ flexDirection: 'row', padding: '2rem' }}>
                        {
                            aps === '' ? null 
                                :(
                                    <>
                                        <div className="d-flex justify-content-center" style={{ width: '70%' }}>
                                            <SelectorAprovechamiento 
                                                dataAprovechamiento={estadoAprovechamiento}
                                                onAprovechamiento={onAprovechamiento}
                                            />
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center card rounded">
                                            <div className="card-body d-flex justify-content-center">
                                                <button
                                                    onClick={onResumenAprovechamiento}
                                                    className="btn btn-success"
                                                >
                                                    Activar
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};