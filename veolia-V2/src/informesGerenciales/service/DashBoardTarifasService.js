import { Http } from "../../helpers/axiosHelper";

export const getDashboard = async (data) => { 
    try{
        const response = await Http.get('dashboard', data);
        return response;
    }
    catch(error){
        console.log('error en data Tarifas dashboard', error);
    }
}