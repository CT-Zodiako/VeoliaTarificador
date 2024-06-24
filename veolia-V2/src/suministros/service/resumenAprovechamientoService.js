import { Http } from "../../helpers/axiosHelper";

export const getResumenAprovechamiento = async (data) => {
    try {
        const response = await Http.get('activar-aprovechamiento', data);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const postResumenAprovechamiento = async (data) => {
    try {
        const response = await Http.post('activar-aprovechamiento', data);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const patchResumenAprovechamiento = async (data) => {
    try {
        const response = await Http.patch('activar-aprovechamiento', data);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}