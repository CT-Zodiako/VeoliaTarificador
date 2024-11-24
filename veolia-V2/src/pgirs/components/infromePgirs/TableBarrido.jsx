import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { getInformePgirsBarridos } from '../../services/informePgirsService'
import { useApsSelector } from '../../../store/storeSelectors';

export const TablaBarrido = () => {
    const aps = useApsSelector(state => state.aps)
    const [barridos, setBarridos] = useState([])

    const data = {
        APSA_ID : aps
    };
    
    const fetchData = async () => {
        if (!aps) return;
        const response = await getInformePgirsBarridos(data);
        setBarridos(response)
    };

    useEffect(() => {
        fetchData()
    
    }, [aps]);

  return (
    <div className='componenTable'>
        <h2 className="card-title">Barrido</h2>
        <div className="tableBorde">
            <div className="card-body">
                <div className="table-responsive" style={{ maxHeight: '40rem', overflowY: 'auto' }}>
                    <table className="table table-striped table-bordered custom-table">
                        <thead>
                            <tr>
                                <th>APS</th>
                                <th>NPM APS</th>
                                <th>PERIODO</th>
                                <th>PODA</th>
                                <th>PODA PGIRS</th>
                                <th>CESPED</th>
                            </tr>
                        </thead>
                        <tbody>
                            { barridos.map((item, index) => (
                                    <tr key={item.APSID}>
                                        <td>{item.APSID}</td>
                                        <td>{item.APSA_NOMAPS}</td>
                                        <td>{item.PERIODO}</td>
                                        <td>{item.SEMESTRE}</td>
                                        <td style={{ background: 'rgb(76, 175, 80, 0.6)' }}>{item.BARRIDO}</td>
                                        <td style={{ background: 'rgb(33, 150, 243, 0.6)' }}>{item.BARRIDOPGIRS}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
