import { Http } from "../../helpers/axiosHelper";

export const getLineasTiempo = async (data) => { 
    try{
        const response = await Http.get('lineas-tiempo/consultarPorId', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}

export const postLineasTiempo = async (data) => { 
    try{
        const response = await Http.post('lineas-tiempo/crearLineasTiempo', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}