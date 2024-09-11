import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';

 export const TablaEditarLinTiemp = ({data = [], onEditarLineaTiempo, fetchData}) => {
    const [editar, setEditar] = useState(null);
    const [lianeasTiempEdit, setLianeasTiempEdit] = useState({
        isNEw: false,
        dataTable: []
    })

    const onLineasTiempo = (index) => {       
        setEditar(index);
    }

    const onEditarlineasTiempo = (event) => {
        const {name, value} = event.target;
        const newLineasTiempo = [...lianeasTiempEdit.dataTable];
        newLineasTiempo[editar] = {
            ...newLineasTiempo[editar],
            [name]: value
        }
        setLianeasTiempEdit({
            ...lianeasTiempEdit,
            dataTable: newLineasTiempo
        })
    }

    const onEditarLineasTiempo = async() => {
        try {
            await onEditarLineaTiempo(lianeasTiempEdit);
            await fetchData();
            setEditar(null);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
            setLianeasTiempEdit({
                ...lianeasTiempEdit,
                dataTable: data
            });
    }, [data]);

    return(
    <>
        <div className="componenTable">
            <div className="acctionTable"/>
            <div className='tableBorde'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>AÑO</th>
                            <th>MES</th>
                            <th>IPC</th>
                            <th>IPCC</th>
                            <th>SMLV</th>
                            <th>IOEXP</th>
                            <th>FACT PROD</th>
                            <th>IND IPCC</th>
                            <th>ACCION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.PROYANNO}</td>
                                    <td>{item.PROYMES}</td>
                                    {
                                        editar === index ? (
                                            <>
                                                <td>
                                                    <input 
                                                        type="number"
                                                        name='DELTIPC'
                                                        value={lianeasTiempEdit.dataTable[editar].DELTIPC}
                                                        onChange={onEditarlineasTiempo} 
                                                    />
                                                </td>
                                                <td>
                                                    <input 
                                                        type="number"
                                                        name='DELTIPCC'
                                                        value={lianeasTiempEdit.dataTable[editar].DELTIPCC}
                                                        onChange={onEditarlineasTiempo} 
                                                    />
                                                </td>
                                                <td>
                                                    <input 
                                                        type="number"
                                                        name='DELTSMLV'
                                                        value={lianeasTiempEdit.dataTable[editar].DELTSMLV}
                                                        onChange={onEditarlineasTiempo} 
                                                    />
                                                </td>
                                                <td>
                                                    <input 
                                                        type="number"
                                                        name='DELTIOEXP'
                                                        value={lianeasTiempEdit.dataTable[editar].DELTIOEXP}
                                                        onChange={onEditarlineasTiempo} 
                                                    />
                                                </td>
                                                <td>
                                                    <input 
                                                        type="number"
                                                        name='DELTFACPRODUC'
                                                        value={lianeasTiempEdit.dataTable[editar].DELTFACPRODUC}
                                                        onChange={onEditarlineasTiempo} 
                                                    />
                                                </td>
                                                <td>
                                                    <input 
                                                        type="number"
                                                        name='DELTINDIPCC'
                                                        value={lianeasTiempEdit.dataTable[editar].DELTINDIPCC}
                                                        onChange={onEditarlineasTiempo}
                                                    />
                                                </td>
                                            </>
                                        ) : (
                                            <>
                                                <td>{item.DELTIPC}</td>
                                                <td>{item.DELTIPCC}</td>
                                                <td>{item.DELTSMLV}</td>
                                                <td>{item.DELTIOEXP}</td>
                                                <td>{item.DELTFACPRODUC}</td>
                                                <td>{item.DELTINDIPCC}</td>
                                            </>
                                        )
                                    }
                                    <td>
                                    {
                                        editar === index ? (
                                            <div>
                                                <button
                                                    className="btn btn-success"
                                                    onClick={onEditarLineasTiempo}
                                                >
                                                    Guardar
                                                </button>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => setEditar(null)}
                                                >
                                                    Cancelar
                                                </button>
                                            </div>
                                        )
                                        : (
                                            <div>
                                                <button
                                                    className="btn btn-warning"
                                                    onClick={() => onLineasTiempo(index)}
                                                >
                                                    Editar
                                                </button>
                                            </div>
                                        )
                                    }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    </>
  )
};