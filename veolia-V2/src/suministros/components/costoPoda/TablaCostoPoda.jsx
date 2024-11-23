 import { Table } from 'react-bootstrap';
import { ingresos } from '../data.js';
import { useFuncionalidadesTable } from '../../hooks/useFuncionalidadesTable.jsx';

 export const TablaCostoPoda = ({ dataPoda, onEditarCostoPoda, fetchData }) => {
    const { tipoIngreso, columnValorSui, onAccionBoton } = useFuncionalidadesTable(dataPoda, ingresos, onEditarCostoPoda, fetchData);

    return(
    <>
        <div className="bodyComponent">
            <div className="d-flex justify-content-center mt-4">
                <div className="width-Component panel">
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
                                        <td>{columnValorSui(item, index)}
                                        </td>
                                        <td>{item.CPTE_VALORFACT}</td>
                                        <td>{tipoIngreso(item.CPTE_TIPINGRESO)}</td>
                                        <td>{onAccionBoton(index)}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    </>
  )
};