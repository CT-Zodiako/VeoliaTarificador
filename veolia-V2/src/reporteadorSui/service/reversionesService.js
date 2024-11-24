import { Http } from "../../helpers/axiosHelper";

export const getRevFormato19 = async (data) => { 
    try{
        const response = await Http.get('reversiones/f19', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}

export const getRevFormato23 = async (data) => {
    try{
        const response = await Http.get('reversiones/f23', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}

export const getRevFormato24 = async (data) => {
    try{
        const response = await Http.get('reversiones/f24', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}

export const getRevFormato35 = async (data) => {
    try{
        const response = await Http.get('reversiones/f35', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}

export const getRevFormato36 = async (data) => {
    try{
        const response = await Http.get('reversiones/f36', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}
