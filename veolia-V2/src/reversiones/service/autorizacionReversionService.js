import { Http } from "../../helpers/axiosHelper";

export const postAutorizacionReversiones = async (data) => { 
    try{        
        const response = await Http.post('reversiones/crearAutorizacion', data);
        console.log('se creo la autorizacion', response);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}