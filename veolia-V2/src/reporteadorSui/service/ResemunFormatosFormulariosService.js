import { Http } from "../../helpers/axiosHelper";

export const getResumenFormulario19 = async (data) => { 
    try{
        const response = await Http.get('resumen-formatos-formularios/f19', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}

export const getResumenFormulario23 = async (data) => {    
    try{
        const response = await Http.get('resumen-formatos-formularios/f23', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}

export const getResumenFormulario24 = async (data) => {    
    try{
        const response = await Http.get('resumen-formatos-formularios/f24', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}

export const getResumenFormulario35 = async (data) => {    
    try{
        const response = await Http.get('resumen-formatos-formularios/f35', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}

export const getResumenFormulario36 = async (data) => {    
    try{
        const response = await Http.get('resumen-formatos-formularios/f36', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}


