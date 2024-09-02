import { Http } from "../../helpers/axiosHelper";

export const postReversiones = async (data) => { 
    try{
        const response = await Http.post('reversiones/crearReversion', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}