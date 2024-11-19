import { useState } from "react";
import { useFiltroTablas } from "../../hooks/useFiltroTablas"
import { SelectPaginacionTabla } from "../../ui/components/SelectPaginacionTabla";

export const TablaInformesGerenciales = ({ datos, acciones, tituloTabla, colums, modal, page = false }) => {
    const {filtro, onFiltroTabla, filtroName = []} = useFiltroTablas(datos);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const dataF = filtroName.slice(indexOfFirstItem, indexOfLastItem);

    const paginacionTable = (pag) => {
        setItemsPerPage(pag)
    };

    return(
        <div className="componenTable">
            <h5 className="card-title">{datos && tituloTabla}</h5>
            <div className="tableBorde">
                <div className="card-body">
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
                                {
                                    page ? (
                                        dataF.length > 0 && dataF.map((item, index) => (
                                            <tr key={index}>
                                                {colums.map((body, colIndex) => (
                                                    <td key={colIndex}>{item[body.body]}</td>
                                                ))}
                                                {acciones && 
                                                    <td>
                                                        <button
                                                            className="btn btn-primary"
                                                            onClick={ () => modal(item, false) } 
                                                        >
                                                            Editar
                                                        </button>
                                                    </td>
                                                }
                                            </tr>
                                        ))
                                    ) : (
                                        filtroName.length > 0 && filtroName.map((item, index) => (
                                            <tr key={index}>
                                                {colums.map((body, colIndex) => (
                                                    <td key={colIndex}>{item[body.body]}</td>
                                                ))}
                                                {acciones && 
                                                    <td>
                                                        <button
                                                            className="btn btn-primary"
                                                            onClick={ () => modal(item, false) } 
                                                        >
                                                            Editar
                                                        </button>
                                                    </td>
                                                }
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    { page &&
                    <div className="pagination-buttons">
                        <button 
                            onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)} 
                            disabled={currentPage === 1}
                        >
                        ‹
                        </button>
                        <button 
                            onClick={() => setCurrentPage(currentPage < Math.ceil(filtroName.length / itemsPerPage) ? currentPage + 1 : currentPage)}
                            disabled={currentPage === Math.ceil(filtroName.length / itemsPerPage)}
                        >
                        ›
                        </button>
                        <SelectPaginacionTabla paginacionTable={paginacionTable}/>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}