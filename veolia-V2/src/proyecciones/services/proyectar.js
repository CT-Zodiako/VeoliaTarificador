import { Http } from "../../helpers/axiosHelper";

export const getLineasTiempo = async (data) => { 
    try{
        const response = await Http.get('proyectar', data);
        return response;
    }
    catch(error){
        console.log('error en data lineas Tiempo', error);
    }
}

export const getUsuarioVariables = async (data) => { 
    try{
        const response = await Http.get('proyectar/consultarProyeccionUsuario', data);
        return response;
    }
    catch(error){
        console.log('error en data variables', error);
    }
}

export const getPropiaVariables = async (data) => { 
    try{
        const response = await Http.get('proyectar/consultarProyeccionInfoPropia', data);
        return response;
    }
    catch(error){
        console.log('error en data variables', error);
    }
}

export const getTercerosVariables = async (data) => { 
    try{
        const response = await Http.get('proyectar/consultarProyeccionInfoPropia', data);
        return response;
    }
    catch(error){
        console.log('error en data variables', error);
    }
}