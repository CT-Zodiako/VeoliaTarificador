import axios from 'axios';

export const getIndicesCRA = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/indice-cra/', {
            params: {
                ANNO: 2023,
                MES: 11
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
