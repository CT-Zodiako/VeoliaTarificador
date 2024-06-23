import { Http } from "../../helpers/axiosHelper";

export const getResumenPgirs = async (data) => {
    try{
        const response = await Http.get('resumen-variables-pgirs/resumenVariables', data);
        return response;
    }
    catch(error){
        console.log('error en getResumenPgirs', error);
    }
}