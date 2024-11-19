import { Http } from "../../helpers/axiosHelper";

export const getFormulario19 = async (data) => { 
    try{
        const response = await Http.get('formatos-formularios/f19', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}

export const getFormulario23 = async (data) => {    
    try{
        const response = await Http.get('formatos-formularios/f23', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}

export const getFormulario24 = async (data) => {    
    try{
        const response = await Http.get('formatos-formularios/f24', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}

export const getFormulario35 = async (data) => {    
    try{
        const response = await Http.get('formatos-formularios/f35', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}

export const getFormulario36 = async (data) => {    
    try{
        const response = await Http.get('formatos-formularios/f36', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}