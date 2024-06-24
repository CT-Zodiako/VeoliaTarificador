import { Http } from "../../helpers/axiosHelper";

export const getCostoPoda = async (data) => {
    try {
        const response = await Http.get('costo-poda-suminitro', data);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const patchCostoPoda = async (data) => {
    try {
        const response = await Http.patch('costo-poda-suminitro', data);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}