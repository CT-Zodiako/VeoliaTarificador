import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { getInformePgirsClus } from '../../services/informePgirsService'
import { useApsSelector } from '../../../store/storeSelectors';

export const TablePgirs = () => {

    const aps = useApsSelector(state => state.aps)

    const [clus, setClus] = useState([])


    const fetchData = async () => {
        if (!aps) return;
        const data = {
            APSA_ID : aps
        }

        const response = await getInformePgirsClus(data);
        setClus(response)
    }


    useEffect(() => {
        fetchData()
    
    }, [aps])
    




  return (
    <div className='container'>
        <h2>Clus</h2>
        {
            aps
        }
        <Table striped bordered hover>
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
                        <tr key={item.APSID}>
                            <td>{item.APSID}</td>
                            <td>{item.APSA_NOMAPS}</td>
                            <td>{item.PERIODO}</td>
                            <td style={{background:'green'}}>{item.PODA}</td>
                            <td style={{background:'aqua'}} >{item.PODAPGIRS}</td>
                            <td style={{background:'red'}}>{item.CESPED}</td>
                            <td style={{background:'aqua'}}>{item.CESPEDPGIRS}</td>
                            <td style={{background:'red'}}>{item.LAVADO}</td>
                            <td style={{background:'aqua'}}>{item.LAVADOPGIRS}</td>
                            <td style={{background:'green'}}>{item.PLAYAS}</td>
                            <td style={{background:'aqua'}}>{item.PLAYASPGIRS}</td>
                            <td style={{background:'green'}}>{item.CESTASINS}</td>
                            <td style={{background:'aqua'}}>{item.CESTASINSPGIRS}</td>
                            <td style={{background:'green'}}>{item.CESTASMAN}</td>
                            <td style={{background:'aqua'}}>{item.CESTASMANPGIRS}</td>
                        </tr>
                    ))
                }

            </tbody>
        </Table>


    </div>
  )
}
