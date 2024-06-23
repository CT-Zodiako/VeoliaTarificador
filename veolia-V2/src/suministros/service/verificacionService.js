import { Http } from "../../helpers/axiosHelper";

export const getVerificacionEmpresa = async (data) => {
    try {
        const response = await Http.get('verificacion/resumenEmpresa', data);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const getVerificacionAPS = async (data) => {
    try {
        const response = await Http.get('verificacion/resumenAPS', data);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const getVerificacinRelleno = async (data) => {
    try {
        const response = await Http.get('verificacion/resumenRelleno', data);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
