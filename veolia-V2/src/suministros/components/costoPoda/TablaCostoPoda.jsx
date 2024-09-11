 import { Table } from 'react-bootstrap';
import { ingresos } from '../data.js';
import { useState } from 'react';

 export const TablaCostoPoda = ({dataPoda, aps, anno, mes, onEditarCostoPoda, fetchData}) => {
    const [editar, setEditar] = useState(null);
    const [podaEditar, setPodaEditar] = useState({
        CPTE_VALORSUI: '',
        APSA_ID: '',
        EMPR_EMPR: '',
        CPTE_ANNO: '',
        CPTE_MES: '',
    });    
    
    const tipoIngreso = (ingreso) => {
        if (!ingreso) return '';
        return ingresos.find((item) => item.id === ingreso).nombre;
    }

    const onCostoPoda = (index) => {
        setPodaEditar({
            ...podaEditar,
            CPTE_VALORSUI: dataPoda[index].CPTE_VALORSUI,
            APSA_ID: aps,
            EMPR_EMPR: dataPoda[index].EMPR_EMPR,
            CPTE_ANNO: anno,
            CPTE_MES: mes,
        });        
        setEditar(index);
    }

    const onEditarSIU = (event) => {
        const {name, value} = event.target;
        setPodaEditar({
            ...podaEditar,
            [name]: value
        });
    }

    const onEditarPoda = async() => {
        try {
            await onEditarCostoPoda(podaEditar);
            await fetchData();
            setEditar(null);
        }
        catch (error) {
            console.error(error);
        }
    }

    return(
    <>
        <div className="componenTable">
            <div className="acctionTable"/>
            <div className='tableBorde'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>EMPRESA</th>
                            <th>COSTO TECHO SUI</th>
                            <th>COSTO FACTURACION</th>
                            <th>TIPO INGRESO</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataPoda &&
                            dataPoda.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.EMPR_NOMBRE}</td>
                                    <td>{
                                        editar === index ? (
                                            <input
                                                type="number"
                                                name='CPTE_VALORSUI'
                                                value={podaEditar.CPTE_VALORSUI}
                                                onChange={(event) => onEditarSIU(event)}
                                            />
                                        ) : 
                                        (
                                            <div>
                                                {item.CPTE_VALORSUI}
                                            </div>
                                        )
                                        }
                                    </td>
                                    <td>{item.CPTE_VALORFACT}</td>
                                    <td>{tipoIngreso(item.CPTE_TIPINGRESO)}</td>
                                    <td>
                                        {
                                            editar === index ? (
                                                <div>
                                                    <button
                                                        className="btn btn-success"
                                                        onClick={onEditarPoda}
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
                                                        onClick={() => onCostoPoda(index)}
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