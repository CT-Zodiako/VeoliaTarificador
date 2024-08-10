import { Http } from "../../helpers/axiosHelper";

export const getDetalladoCosto = async (data) => { 
    try{
        const response = await Http.get('detallado-costo', data);
        return response;
    }
    catch(error){
        console.log('error en data sub/aport', error);
    }
}