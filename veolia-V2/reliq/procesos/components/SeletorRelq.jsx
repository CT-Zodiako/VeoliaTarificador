import { useState } from "react";

export const SelectorRelq = ({ onFormulario, data }) => {
    const [ selectedApsa, setSelectedApsaId ] = useState('');
    
    const handleChange = (event) => {
      setSelectedApsaId(event.target.value);
      onFormulario(event);
    }; 

    return (
      <div className='mt-1 container-select'>
        <label htmlFor="aps" className='label-select'>APS:</label>
        <select 
          className="form-select form-select-sm style-selector" 
          aria-label="Small select example" 
          value={selectedApsa} 
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
    