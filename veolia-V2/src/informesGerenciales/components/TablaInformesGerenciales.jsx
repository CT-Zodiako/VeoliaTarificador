import { useFiltroTablas } from "../../hooks/useFiltroTablas"

export const TablaInformesGerenciales = ({ datos, acciones, tituloTabla, colums }) => {
    const {filtro, onFiltroTabla, filtroName} = useFiltroTablas(datos);
    
    return(
        <div className="componenTable">
            <div className="acctionTable"/>
            <div className="tableBorde">
                <div className="card-body">
                    <h5 className="card-title">{tituloTabla}</h5>
                    <div className="table-responsive" style={{ maxHeight: '32.5rem', overflowY: 'auto' }}>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    {datos &&
                                        Object.entries(datos.formato).map(([key, value]) => (
                                            <th key={key} >
                                                {value.name}
                                            </th>
                                        ))
                              
                                    }
                                    {acciones && <th>Acciones</th>}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {datos &&
                                        Object.entries(datos.formato).map(([key, value]) => (
                                            <td key={key} >
                                                {
                                                    value.filtre &&
                                                    <div className="input-group input-group-sm mb-3">
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            aria-label="Sizing example input" 
                                                            aria-describedby="inputGroup-sizing-sm" 
                                                            placeholder='Buscar'
                                                            value={filtro[key] || ''} 
                                                            onChange={(event) => onFiltroTabla(key, event)}
                                                        />
                                                    </div>
                                                }
                                            </td>
                                        ))
                                    }
                                </tr>
                                {filtroName.length > 0 && filtroName.map((item, index) => (
                                        <tr key={index}>
                                            {colums.map((body, colIndex) => (
                                                <td key={colIndex}>{item[body.body]}</td>
                                            ))}
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}