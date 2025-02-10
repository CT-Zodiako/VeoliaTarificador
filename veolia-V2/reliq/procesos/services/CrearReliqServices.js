import { Http } from "../../helpers/axiosHelper";

export const getCrearRelq = async (data) => {    
    try{
        const response = await Http.get('crear-reliq', data);
        return response;
    }
    catch(error){
        console.log('error en data Tarifas gerenciales', error);
    }
}