import { Http } from "../../helpers/axiosHelper";

export const login = async (data) => {    
    try{
        const response = await Http.post('auth/login', data);        
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}