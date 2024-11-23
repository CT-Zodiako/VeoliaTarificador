import { Http } from "../../helpers/axiosHelper";

export const getSubCon = async (data) => {
    try {
        const response = await Http.get('subsidios-contribuciones', data);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const updateSubCon = async (data) => {
    try {
        const response = await Http.patch('subsidios-contribuciones', data);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

