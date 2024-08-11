import { Http } from "../../helpers/axiosHelper";

export const getTarifasGerenciales = async (data) => { 
    try{
        const response = await Http.get('detallado-tarifas', data);
        return response;
    }
    catch(error){
        console.log('error en data Tarifas gerenciales', error);
    }
}