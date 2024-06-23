import { useState } from "react";

 export const SelectorAprovechamiento = () => {
    const [aprovechamiento, setAprovechamiento] = useState(false);
    console.log('SelectorAprovechamiento: ', aprovechamiento);
    
    const onSelectorAprovechamiento = () => {
        const valor = !aprovechamiento;
        setAprovechamiento(valor);
    }

  return(
    <>
        <div className="form-check form-switch w-75 d-flex align-items-center">
            <input 
                className="form-check-input" 
                style={{ width: '125px', height: '50px', marginRight: '20px'}}
                type="checkbox" role="switch" 
                id="flexSwitchCheckChecked" 
                checked={aprovechamiento}
                onClick={onSelectorAprovechamiento}
            />
            <label 
                className="form-check-label"
                style={{ fontSize: '30px' }} 
                htmlFor="flexSwitchCheckChecked"
            >
                Checked switch checkbox input
            </label>
        </div>
    </>
  )
};