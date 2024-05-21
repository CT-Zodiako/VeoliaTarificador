import { Http } from "../../helpers/axiosHelper";

export const getSubCon = async (APSA_ID, SUCO_ANNO, SUCO_MES) => {
    try {
        const response = await Http.get('subsidios-contribuciones', 
           { APSA_ID, SUCO_ANNO, SUCO_MES }  // Use params to send query parameters
        );
        console.log(response)
        return response;  // Return response data
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
