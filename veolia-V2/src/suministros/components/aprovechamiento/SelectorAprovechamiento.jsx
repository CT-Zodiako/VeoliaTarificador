import { useEffect, useState } from "react";

 export const SelectorAprovechamiento = ({dataAprovechamiento, onAprovechamiento}) => {  
    const [aprovechamiento, setAprovechamiento] = useState(false);

    const onSelectorAprovechamiento = () => {
        const newAprovechamiento = !aprovechamiento;
        setAprovechamiento(newAprovechamiento);
        onAprovechamiento(newAprovechamiento);
    }

    useEffect(() => {
        setAprovechamiento(dataAprovechamiento);
    }, [dataAprovechamiento]);

  return(
    <>
        <div className="form-check form-switch w-75 d-flex align-items-center">
            <input 
                className="form-check-input" 
                style={{ width: '75px', height: '30px', marginRight: '20px'}}
                type="checkbox" role="switch" 
                id="flexSwitchCheckChecked" 
                checked={aprovechamiento}
                onChange={onSelectorAprovechamiento}
            />
            <label 
                className="form-check-label"
                style={{ fontSize: '18px' }} 
                htmlFor="flexSwitchCheckChecked"
            >
                {
                    aprovechamiento ? 
                        'Cobro de aprovechamiento sin tener QA: Activado'
                        : 'Cobro de aprovechamiento sin tener QA: Desactivado'
                }
            </label>
        </div>
    </>
  )
};