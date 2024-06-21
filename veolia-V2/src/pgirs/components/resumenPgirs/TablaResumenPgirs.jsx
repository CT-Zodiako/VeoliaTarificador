import { useEffect, useMemo, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getResumenPgirs } from '../../services/informePgirsService'
import { useApsSelector } from '../../../store/storeSelectors';
import { useFiltroTabResumen } from '../../../hooks/useFiltroTabResumen';

 export const TablaResumenPgirs = () => {
    const aps = useApsSelector(state => state.aps);
    const [datos, setDatos] = useState([]);
    const { filtro, onFiltroTabla, filtroInput } = useFiltroTabResumen(datos);     
    
    const filas = [
        {
            id: 1,
            nombre: 'APSA_NOMAPS'
        },
        {
            id: 2,
            nombre: 'PERIODO'
        },
        {
            id: 3,
            nombre: 'PGRINGRESO'
        },
        {
            id: 4,
            nombre: 'PGRIFECHA'
        },
        {
            id: 5,
            nombre: 'SISU_CORREO'
        }
    ];
    
    const fetchData = async () => {
        if (!aps) return;            
        const data = {
            APSA_ID : aps
        }
        const response = await getResumenPgirs(data);
        setDatos(response);
    };
    
    useEffect(() => {
        fetchData();
    }, [aps]);

  return(
    <>
        <div className='container'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>APS</th>
                        <th>INGRESO</th>
                        <th>TIPO INGRESO</th>
                        <th>FECHA INGRESO</th>
                        <th>USUARIO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            filas.map((item, index) => (
                                <td key={index}>
                                    {
                                        (item.id === 1 || item.id === 2 || item.id === 3) &&
                                        (<input
                                            type="text" 
                                            className="form-control" 
                                            aria-label="Sizing example input" 
                                            aria-describedby="inputGroup-sizing-sm" 
                                            placeholder='Buscar'
                                            value={filtro[item.nombre] || ''} 
                                            onChange={(event) => onFiltroTabla(item.nombre, event)}
                                        />) 
                                    }
                                </td>
                            ))
                        }
                    </tr>
                    {
                        filtroInput .map((item, index) => (
                            <tr key={index}>
                                <td>{item.APSA_NOMAPS}</td>
                                <td>{item.PERIODO}</td>
                                <td>{item.PGRINGRESO}</td>
                                <td>{item.PGRIFECHA}</td>
                                <td>{item.SISU_CORREO}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table> 
        </div>
    </>
  )
};