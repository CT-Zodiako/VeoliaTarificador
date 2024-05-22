import { Http } from "../../helpers/axiosHelper";


export const rellenosService = {

    getRellenos: async () => {
        try {
            const response = await Http.get('rellenos');
            return response;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    upDataRellenos: async (data) => {
        try {
            const response = await Http.patch('rellenos', data);
            return response;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    saveNewRelleno: async (data) => {
        try {
            const response = await Http.post('rellenos', data);
            return response;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }



}