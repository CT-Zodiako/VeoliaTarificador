import { Http } from "../../../src/helpers/axiosHelper";

export const getReliq = async (data) => {    
    try{
        const response = await Http.get('crear-reliq/reliquida-by-aps', data);        
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}