import React, { useEffect, useState } from 'react'
import { getInformePgirsClus } from '../../services/informePgirsService'
import { useApsSelector } from '../../../store/storeSelectors';

export const TablePgirs = () => {
    const aps = useApsSelector(state => state.aps)
    const [clus, setClus] = useState([])

    const data = {
        APSA_ID : aps
    };

    const fetchData = async () => {
        if (!aps) return;
        const response = await getInformePgirsClus(data);
        setClus(response)
    };

    useEffect(() => {
        fetchData()
    }, [aps]);

  return (
    <div className='componenTable'>
        <h2 className="card-title">Clus</h2>
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
                                <th>CESPED PGIRS</th>
                                <th>LAVADO</th>
                                <th>LAVADO PGIRS</th>
                                <th>PLAYA</th>
                                <th>PLAYA PGIRS</th>
                                <th>I CEST</th>
                                <th>I CEST PGIRS</th>
                                <th>M PGIRS</th>
                                <th>M CEST PGIRS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clus.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.APSID}</td>
                                        <td>{item.APSA_NOMAPS}</td>
                                        <td>{item.PERIODO}</td>
                                        <td style={{ background:'rgb(76, 175, 80, 0.6)' }}>{item.PODA}</td>
                                        <td style={{ background:'rgb(33, 150, 243, 0.6)' }} >{item.PODAPGIRS}</td>
                                        <td style={{ background:'rgb(244, 67, 54, 0.6)' }}>{item.CESPED}</td>
                                        <td style={{ background:'rgb(33, 150, 243, 0.6)' }}>{item.CESPEDPGIRS}</td>
                                        <td style={{ background:'rgb(244, 67, 54, 0.6)' }}>{item.LAVADO}</td>
                                        <td style={{ background:'rgb(33, 150, 243, 0.6)' }}>{item.LAVADOPGIRS}</td>
                                        <td style={{ background:'rgb(76, 175, 80, 0.6)' }}>{item.PLAYAS}</td>
                                        <td style={{ background:'rgb(33, 150, 243, 0.6)' }}>{item.PLAYASPGIRS}</td>
                                        <td style={{ background:'rgb(76, 175, 80, 0.6)' }}>{item.CESTASINS}</td>
                                        <td style={{ background:'rgb(33, 150, 243, 0.6)' }}>{item.CESTASINSPGIRS}</td>
                                        <td style={{ background:'rgb(76, 175, 80, 0.6)' }}>{item.CESTASMAN}</td>
                                        <td style={{ background:'rgb(33, 150, 243, 0.6)' }}>{item.CESTASMANPGIRS}</td>
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
