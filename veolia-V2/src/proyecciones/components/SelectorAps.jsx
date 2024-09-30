import React, { useEffect, useState } from 'react';
import { selectorService } from '../../ui/services/selectorService';

export const SelectorAPS = ({aps}) => {
    const [data, setData] = useState([]);
    const [selectedApsaId, setSelectedApsaId] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await selectorService();
            setData(result);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
        setSelectedApsaId(aps);
    }, []);

    const handleChange = (event) => {
        setSelectedApsaId(event.target.value);
    };

    return(
    <>
        <div className='mt-1'>
            <select 
                className="form-select form-select-sm selectores" 
                aria-label="Small select example" 
                // name= 'formulario.APS'
                value={selectedApsaId} 
                onChange={handleChange}
            >
                <option value="" disabled>Selecionar APS</option>
                {data.map((item) => (
                <option key={item.APSA_ID} value={item.APSA_ID}>
                    {item.APSA_NOMAPS}
                </option>
                ))}
            </select>
        </div>
    </>
  )
};