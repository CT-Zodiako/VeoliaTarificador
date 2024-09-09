import React, { useEffect, useState } from 'react';
import { selectorService } from '../services/selectorService';
import { useApsSelector } from '../../store/storeSelectors';

export const ApsSelector = () => {
  const [data, setData] = useState([]);
  const selectedApsaId = useApsSelector(state => state.aps);
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
    <div className='mt-1'>
      <label htmlFor="aps" className='labelSelect'>APS:</label>
      <select 
        className="form-select form-select-sm selectores" 
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
