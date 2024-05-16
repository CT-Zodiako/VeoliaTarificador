import { useEffect } from 'react';
import {selectorService} from '../services/selectorService';

export const ApsSelector = () => {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await selectorService();
                console.log(result)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);



    return (
        <div className='col-3 mt-1'>
            {/* <select className="form-select form-select-sm" aria-label="Small select example" defaultValue="">
                <option value="" disabled>Selecionar APS</option>
                {respuesta.map((item) => (
                    <option key={item.APSA_ID} value={item.APSA_ID}>
                        {item.APSA_NOMAPS}
                    </option>
                ))}
            </select> */}
        </div>

    )
}
