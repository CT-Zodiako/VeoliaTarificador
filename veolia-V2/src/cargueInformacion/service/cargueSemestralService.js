import { Http } from "../../helpers/axiosHelper";

export const getCargueSemestral = async (data) => {    
    try{
        const response = await Http.get('semestral/consultaPropias', data);
        return response;
    }
    catch(error){
        console.log('error en data Tarifas gerenciales', error);
    }
}
