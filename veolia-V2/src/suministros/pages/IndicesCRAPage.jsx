import React, { useEffect, useState } from 'react';
import { getIndicesCRA } from '../service/indicesCRAService';

export const IndicesCRA = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getIndicesCRA();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    console.log(data)

    return (
        <div>
            <h1>Indices CRA</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}


