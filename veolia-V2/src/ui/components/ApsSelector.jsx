import React, { useEffect, useState } from 'react';
import { selectorService } from '../services/selectorService';
import { useApsSelector } from '../../store/storeSelectors';
import { useAnnoSelector } from '../../store/storeSelectors';

export const ApsSelector = () => {
  const [data, setData] = useState([]);
  const selectedApsaId = useApsSelector(state => state.aps);
  const selectedMes = useAnnoSelector(state => state.anno);
  const setSelectedApsaId = useApsSelector(state => state.cambioSelector);

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
  }, []);

  const handleChange = (event) => {
    setSelectedApsaId(event.target.value);
  };

  return (
    <div className='col-3 mt-1'>
        <h1>{selectedApsaId}</h1>
        <h1>{selectedMes}</h1>
      <label htmlFor="aps">APS:</label>
      <select 
        className="form-select form-select-sm" 
        aria-label="Small select example" 
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
  );
};
