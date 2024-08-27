import { Http } from "../../helpers/axiosHelper";

export const getDetalladoReversiones = async () => { 
    try{        
        const response = await Http.get('reversiones/detalladoReversion');
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}