import { Http } from "../../helpers/axiosHelper";

export const getAjuestesProductividad = async (data) => {
    try {
        const response = await Http.get('ajuste-productividad', data);
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