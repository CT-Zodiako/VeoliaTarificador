import { Http } from "../../helpers/axiosHelper";

export const getCostoPodaInfo = async (data) => { 
    try{
        const response = await Http.get('costo-poda', data);
        return response;
    }
    catch(error){
        console.log('error en data Tarifas costo poda info', error);
    }
}