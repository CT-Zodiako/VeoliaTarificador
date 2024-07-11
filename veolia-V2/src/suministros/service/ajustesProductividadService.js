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

export const postAjuestesProductividad = async (data) => {
    try {
        const response = await Http.post('ajuste-productividad', data);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const patchAjuestesProductividad = async (data) => {
    try {
        const response = await Http.patch('ajuste-productividad', data);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}