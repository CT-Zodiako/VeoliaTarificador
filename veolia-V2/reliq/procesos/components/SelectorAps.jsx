import { useEffect, useState } from "react";
import { selectorService } from "../../../src/ui/services/selectorService";

export const SelectorAps = ({ onFormularioAps }) => {
    const [ data, setData ] = useState([]);
    const [ selectedApsa, setSelectedApsaId ] = useState('');
    
    const onDataAps = async() => {
        try {
            const result = await selectorService();
            setData(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        onDataAps();
    }, []);
    
    const handleChange = (event) => {
      const apdSelect = event.target.value;
      onFormularioAps(apdSelect);
      setSelectedApsaId(apdSelect);
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
    