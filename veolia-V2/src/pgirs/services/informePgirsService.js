import { Http } from "../../helpers/axiosHelper";

export const getInformePgirsClus = async (data) => {
    try {
        const response = await Http.get('variables-pgirs/informePgirsClus', data);
        return response;

    } catch (error) {
        console.log('error en getInformePgirsClus', error);
        
    }
}

export const getInformePgirsBarridos = async (data) => {
    try {
        const response = await Http.get('variables-pgirs/informePgirsBarridos', data);
        return response;

    } catch (error) {
        console.log('error en getInformePgirsBarridos', error);
        
    }
}