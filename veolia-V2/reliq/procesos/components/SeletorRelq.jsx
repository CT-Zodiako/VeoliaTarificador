import { useState } from "react";

export const SelectorRelq = ({ onFormulario, data, label, opcion, name, keys, text }) => {
    const [ selectedApsa, setSelectedApsaId ] = useState('');
    
    const handleChange = (event) => {
      setSelectedApsaId(event.target.value);
      onFormulario(event);
    }; 

    return (
      <div className='mt-1 container-select'>
        <label htmlFor="aps" className='label-select'>{label}:</label>
        <select 
          className="form-select form-select-sm style-selector" 
          aria-label="Small select example" 
          type="number"
          value={selectedApsa} 
          onChange={handleChange}
          name={name}
        >
          <option value="" disabled>Selecionar {opcion}</option>
          {data && data.length > 0 &&
          data.map((item) => (
            <option key={item[keys]} value={item[keys]}>
              {item[text]}
            </option>
          ))}
        </select>
      </div>
    );
};
    