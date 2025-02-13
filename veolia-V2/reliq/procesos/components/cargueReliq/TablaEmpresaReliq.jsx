import { useEffect, useState } from "react";
import { PaginacionTablas } from "../../../../src/ui/components/PaginacionTablas";

export const TablaEmpresaReliq = ({ actualizar, onDataEmpresa, data, colums, objEditar, page= true }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [ editar, setEditar ] = useState(false);
    const [ empresaEditar, setEmpresaEditar ] = useState([]);
    console.log('por editar: ', empresaEditar);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const dataF = data.slice(indexOfFirstItem, indexOfLastItem);

    const onhanledEditar = (event, index) => {
        const { name, value } = event.target;
        setEmpresaEditar(prevState => 
            prevState.map((item, i) =>
            i === index ? { ...item, [name]: Number(value) } : item
        ));
    };

    const paginacionTable = (pag) => {
      setItemsPerPage(pag)
    };

    const onCancelar = () => {
        onNewData(data);
        setEditar(false);
    };

    const onNewData = (data) => {
        if (data.length > 0) {
            const newData = data.map(item => 
                objEditar.info.reduce((acc, key) => {
                    acc[key] = item[key];
                    return acc;
                }, {})
            );
            setEmpresaEditar(newData);
        };
    };

    const onActualizar = async() => {
        const update = {
            data: empresaEditar,
        };
        await actualizar(update);
        onDataEmpresa();
        setEditar(false);
    };

    useEffect(() => {
        onNewData(data);
    }, [data]);

    return(
    <>
        <div className='componenTable'>
            <div className="flex justify-end">
                {editar ? (
                    <>
                        <button
                            className="btn btn-danger"
                            onClick={onCancelar}
                        >
                            Cancelar
                        </button>
                        <button
                            className="btn btn-success"
                            onClick={onActualizar}
                        >
                            Guardar
                        </button>
                    </>

                ) : (
                    <>
                        <button
                            className="btn btn-primary"
                            onClick={() => setEditar(true)}
                        >
                            Editar
                        </button>
                    </>
                )}  
            </div>
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
                                    {/* <th
                                        className="px-4 py-3 border-x-[2px] border-borderTable"
                                    >
                                        Acción
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody>
                                { page ? (
                                    dataF.length > 0 &&
                                    dataF.map((item, index) => (
                                        <tr 
                                            key={index} 
                                            className={`border-b-8 border-b-gray-50 text-xs 
                                                border-l hover:border-l-4 hover:border-l-borderLetfTable 
                                                ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
                                        >
                                            {colums.map((body, colIndex) => (
                                                <td 
                                                    className="px-4 py-3 border-x-[2px] border-borderTable text-right"
                                                    key={colIndex}
                                                >
                                                    {editar && objEditar.editar.includes(body.body) ? (
                                                        <input 
                                                            style={{ width: '5rem', height: '1.5rem', border: '1px solid #ccc' }}
                                                            className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                                                            type="number"
                                                            name={body.body}
                                                            // placeholder={empresaEditar[index]?.[body.body] === 0 && '0'}
                                                            value={empresaEditar[index]?.[body.body] || ''}
                                                            onChange={(event) => onhanledEditar(event, index)}
                                                        />
                                                    ) : (
                                                        item[body.body]
                                                    )}
                                                </td>
                                            ))}
                                            {/* <td>
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
                                            </td> */}
                                        </tr>
                                    )
                                )) : (
                                  data &&
                                    data.map((item, index) => (
                                        <tr 
                                            key={index} 
                                            className={`border-b-8 border-b-gray-50 text-xs
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
                                            {/* <td>
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
                                            </td> */}
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