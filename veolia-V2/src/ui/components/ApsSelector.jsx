import { useEffect, useState } from 'react';
import { selectorService } from '../services/selectorService';

export const ApsSelector = () => {
    const [data, setData] = useState([]);

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

    return (
        <div className='col-3 mt-1'>
            <label htmlFor="aps">APS:</label>
                <select className="form-select form-select-sm" aria-label="Small select example" defaultValue="">
                            <option value="" disabled>Seleccionar APS</option>
                            {data.map((item) => (
                                <option key={item.APSA_ID} value={item.APSA_ID}>
                                    {item.APSA_NOMAPS}
                                </option>
                            ))}
                </select>
        </div>
    );
};
