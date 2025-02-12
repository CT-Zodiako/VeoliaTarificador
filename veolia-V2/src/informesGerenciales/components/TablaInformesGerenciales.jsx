import { useEffect, useState } from "react";
import { useFiltroTablas } from "../../hooks/useFiltroTablas"
import { SelectPaginacionTabla } from "../../ui/components/SelectPaginacionTabla";
import '../../ui/styles/estilosTablas.css';
import '../../ui/styles/paginacionTablas.css';

export const TablaInformesGerenciales = ({ datos, acciones, tituloTabla, colums, modal, page = false }) => {
    const {filtro, onFiltroTabla, filtroName = []} = useFiltroTablas(datos);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const dataF = filtroName.slice(indexOfFirstItem, indexOfLastItem);

    const totalItems = filtroName.length;
    const showingStart = totalItems === 0 ? 0 : indexOfFirstItem + 1;
    const showingEnd = Math.min(indexOfLastItem, totalItems);

    const paginacionTable = (pag) => {
        setItemsPerPage(pag)
    };

    useEffect(() => {
        setCurrentPage(1);
      }, [filtroName, itemsPerPage]);

    return(
        <div className="componenTable">
            <h5 className="card-title">{datos && tituloTabla}</h5>
            <div className="tableBorde">
                <div className="card-body relative shadow-md sm:rounded-md overflow-hidden">
                    <div className="max-h-[30rem] overflow-x-auto overflow-y-auto">
                        <table className="w-full text-sm text-left text-gray-700">
                            <thead className="text-xs text-gray-100 uppercase bg-headTable">
                                <tr className="text-center">
                                    {datos &&
                                        Object.entries(datos.formato).map(([key, value]) => (
                                            <th 
                                                key={key}
                                                className="px-4 py-3 border-x-[2px] border-borderTable"
                                            >
                                                {value.name}
                                            </th>
                                        ))}
                                    {acciones && <th className="px-4 py-3 border-x-[2px] border-borderTable">Acciones</th>}
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="filter-row">
                                    {datos &&
                                        Object.entries(datos.formato).map(([key, value]) => (
                                            <td 
                                                key={key}
                                                className="px-1 py-2 border-x-[2px] border-borderTable"
                                            >
                                                {value.filtre && (
                                                    <div className="input-group input-group-sm mb-3" style={{ width: '100%' }}>
                                                        <input
                                                            style={{ minWidth: '5rem' }}
                                                            type="text"
                                                            className="form-control filter-input"
                                                            aria-label="Sizing example input"
                                                            aria-describedby="inputGroup-sizing-sm"
                                                            placeholder="Buscar"
                                                            value={filtro[key] || ''}
                                                            onChange={(event) => onFiltroTabla(key, event)}
                                                        />
                                                    </div>
                                                )}
                                            </td>
                                        ))}
                                    {acciones && <td></td>}
                                </tr>
                                {page
                                    ? dataF.length > 0 &&
                                    dataF.map((item, index) => (
                                        <tr 
                                            key={index} 
                                            className={`border-b-4 border-b-gray-100 text-xs hover:text-sm
                                                border-l hover:border-l-4 hover:border-l-borderLetfTable 
                                                ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
                                        >
                                            {colums.map((body, colIndex) => (
                                                <td 
                                                    key={colIndex}
                                                    className="px-4 py-3 border-x-[2px] border-borderTable text-right"
                                                >
                                                    {item[body.body]}
                                                </td>
                                            ))}
                                            {acciones && (
                                                <td>
                                                    <button
                                                        className="px-4 py-3 border-x-[2px] border-borderTable text-right"
                                                        onClick={() => modal(item, false)}
                                                    >
                                                        Editar
                                                    </button>
                                                </td>
                                            )}
                                        </tr>
                                    ))
                                    : filtroName.length > 0 &&
                                    filtroName.map((item, index) => (
                                        <tr 
                                            key={index} 
                                            className={`border-b-4 border-b-gray-100 text-xs hover:text-sm
                                                border-l hover:border-l-4 hover:border-l-borderLetfTable 
                                                ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
                                        >
                                            {colums.map((body, colIndex) => (
                                                <td 
                                                    key={colIndex}
                                                    className="px-4 py-3 border-x-[2px] border-borderTable text-right"
                                                >
                                                    {item[body.body]}
                                                </td>
                                            ))}
                                            {acciones && (
                                                <td
                                                    className="px-4 py-3 border-x-[2px] border-borderTable text-right"
                                                >
                                                    <button
                                                        className="btn btn-primary btn-action"
                                                        onClick={() => modal(item, false)}
                                                    >
                                                        Editar
                                                    </button>
                                                </td>
                                            )}
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                    { page &&
                    <nav 
                        className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 
                        py-[10px] px-[16px] bg-gray-100" 
                        aria-label="Table navigation">
                        <span className="flex items-center space-x-1 text-sm font-normal text-gray-700 gap-x-3">
                        Mostrando{' '}
                        <SelectPaginacionTabla paginacionTable={paginacionTable}/>
                        <span className="font-semibold text-gray-900">
                            {showingStart}-{showingEnd}
                        </span>{' '}
                        de{' '}
                        <span className="font-semibold text-gray-900">{totalItems}</span>
                        </span>
                        <ul className="inline-flex items-stretch -space-x-px">
                        <li>
                            <a 
                                className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300
                                hover:bg-gray-100 hover:text-gray-700"
                                onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)}
                                disabled={currentPage === 1}
                            >
                                <span className="sr-only">Previous</span>
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </li>
                        {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, index) => (
                            <li key={index}>
                            <a
                                className={`flex items-center justify-center text-sm py-2 px-3 leading-tight font-bold
                                ${currentPage === index + 1 ? 'text-primary-600 bg-primary-50 border-primary-300' : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700'}`}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </a>
                            </li>
                        ))}
                        <li>
                            <a 
                                className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                                onClick={() => setCurrentPage(currentPage < Math.ceil(filtroName.length / itemsPerPage) ? currentPage + 1 : currentPage)}
                                disabled={currentPage === Math.ceil(filtroName.length / itemsPerPage)}
                                >
                                <span className="sr-only">Next</span>
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </li>
                        </ul>
                    </nav>
                    }
                </div>
            </div>
        </div>
    );
}