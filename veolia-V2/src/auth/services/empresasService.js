import { Http } from "../../helpers/axiosHelper";

export const empresasService = {

    getAllEmpresas: async () => {
        try {
            const response = await Http.get('empresas/getAllEmpresas');
             return response;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    upDataEmpresa: async (empresa) => {
        try {
            const response = await Http.patch('empresas', empresa);
            return response;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    saveNewEmpresa: async (empresa) => {
        try {
            const response = await Http.post('empresas', empresa);
            return response;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
    
}