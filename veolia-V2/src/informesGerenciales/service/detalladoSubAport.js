import { Http } from "../../helpers/axiosHelper";

export const getsubAporte = async (data) => { 
    try{
        const response = await Http.get('detallado-sub-aporte', data);
        return response;
    }
    catch(error){
        console.log('error en data sub/aport', error);
    }
}