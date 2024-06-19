import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { getInformePgirsBarridos } from '../../services/informePgirsService'
import { useApsSelector } from '../../../store/storeSelectors';

export const TablaBarrido = () => {

    const aps = useApsSelector(state => state.aps)

    const [barridos, setBarridos] = useState([])


    const fetchData = async () => {
        if (!aps) return;
        const data = {
            APSA_ID : aps
        }

        const response = await getInformePgirsBarridos(data);
        setBarridos(response)
    }


    useEffect(() => {
        fetchData()
    
    }, [aps])
    




  return (
    <div className='container'>
        <h2>Barrido</h2>
        <Table striped bordered hover>
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
                {
                    barridos.map((item, index) => (
                        <tr key={item.APSID}>
                            <td>{item.APSID}</td>
                            <td>{item.APSA_NOMAPS}</td>
                            <td>{item.PERIODO}</td>
                            <td>{item.SEMESTRE}</td>
                            <td style={{background:'green'}}>{item.BARRIDO}</td>
                            <td style={{background:'aqua'}}>{item.BARRIDOPGIRS}</td>
                        </tr>
                    ))
                }

            </tbody>
        </Table>


    </div>
  )
}
