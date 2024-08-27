import { Http } from "../../helpers/axiosHelper";

export const getDetalladoAutorizacion = async () => { 
    try{        
        const response = await Http.get('reversiones/detalladoAutorizacion');
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}