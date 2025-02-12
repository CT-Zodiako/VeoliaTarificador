import { useState } from "react";
import { PaginacionTablas } from "../../../../src/ui/components/PaginacionTablas";

export const TablaEmpresaReliq = ({ data, colums, objEditar, page= true }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [ editar, setEditar ] = useState(null);
    const [ empresaEditar, setEmpresaEditar ] = useState(objEditar);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const dataF = data.slice(indexOfFirstItem, indexOfLastItem);

    const onEmpreEditar = (index) => {
        const nuevoObjeto = Object.keys(objEditar).reduce((acc, key) => {
            acc[key] = data[index][key];
            return acc;
        }, {});
        setEmpresaEditar(nuevoObjeto);
        setEditar(index);
    };
    

    const onhanledEditar = (event) => {
        const { name, value } = event.target;
        setEmpresaEditar({
            ...empresaEditar,
            [name]: value
        })
    };

    const paginacionTable = (pag) => {
      setItemsPerPage(pag)
    };

    return(
    <>
        <div className='componenTable'>
            <div className="tableBorde">
                <div className="card-body relative shadow-md sm:rounded-md overflow-hidden">
                    <div className="max-h-[30rem] overflow-x-auto overflow-y-auto">
                        <table className="w-full text-sm text-left text-gray-700">
                            <thead className="text-xs text-gray-100 uppercase bg-headTable">
                                <tr className="text-center">
                                    {colums &&
                                        colums.map((item, index) => (
                                        <th 
                                            key={index} 
                                            className="px-4 py-3 border-x-[2px] border-borderTable"
                                        >
                                            {item.head}
                                        </th>
                                        ))
                                    }
                                    <th
                                        className="px-4 py-3 border-x-[2px] border-borderTable"
                                    >
                                        Acción
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { page ? (
                                    dataF.length > 0 &&
                                    dataF.map((item, index) => (
                                        <tr 
                                            key={index} 
                                            className={`border-b-8 border-b-gray-50 text-xs hover:text-sm
                                                border-l hover:border-l-4 hover:border-l-borderLetfTable 
                                                ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
                                        >
                                            {colums.map((body, colIndex) => (
                                                <td 
                                                    className="px-4 py-3 border-x-[2px] border-borderTable text-right"
                                                    key={colIndex}
                                                >
                                                    {editar === index && objEditar.hasOwnProperty(body.body) ? (
                                                        <input 
                                                            type="number"
                                                            name={body.body}
                                                            value={empresaEditar[body.body] || ""}
                                                            onChange={(event) => onhanledEditar(event)}
                                                        />
                                                    ) : (
                                                        item[body.body]
                                                    )}
                                                </td>
                                            ))}
                                            <td>
                                                <button
                                                    className="btn btn-primary btn-sm"
                                                    onClick={() => onEmpreEditar(index)}
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => setEditar(null)}
                                                >
                                                    Cancelar
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                )) : (
                                  data &&
                                    data.map((item, index) => (
                                        <tr 
                                            key={index} 
                                            className={`border-b-8 border-b-gray-50 text-xs hover:text-sm
                                                border-l hover:border-l-4 hover:border-l-borderLetfTable 
                                                ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
                                        >
                                            {colums.map((body, colIndex) => (
                                                <td 
                                                    className="px-4 py-3 border-x-[2px] border-borderTable text-right"
                                                    key={colIndex}
                                                >
                                                    {editar === index && objEditar.hasOwnProperty(body.body) ? (
                                                        <input 
                                                            type="number"
                                                            name={body.body}
                                                            value={empresaEditar[body.body] || ""}
                                                            onChange={(event) => onhanledEditar(event)}
                                                        />
                                                    ) : (
                                                        item[body.body]
                                                    )}
                                                </td>
                                            ))}
                                            <td>
                                                <button
                                                    className="btn btn-primary btn-sm"
                                                    onClick={() => onEmpreEditar(index)}
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => setEditar(null)}
                                                >
                                                    Cancelar
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                    { page && 
                        <PaginacionTablas 
                            data={data} 
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            itemsPerPage={itemsPerPage}
                            paginacionTable={paginacionTable}
                            indexOfLastItem={indexOfLastItem}
                            indexOfFirstItem={indexOfFirstItem}
                        />
                    }
                </div>
            </div>
        </div>
    </>
  )
};