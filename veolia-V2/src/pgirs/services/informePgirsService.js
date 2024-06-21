import { Http } from "../../helpers/axiosHelper";

export const getInformePgirsClus = async (data) => {
    try {
        const response = await Http.get('variables-pgirs/informePgirsClus', data);
        return response;

    } catch (error) {
        console.log('error en getInformePgirsClus', error);
        
    }
}

export const getInformePgirsBarridos = async (data) => {
    try {
        const response = await Http.get('variables-pgirs/informePgirsBarridos', data);
        return response;

    } catch (error) {
        console.log('error en getInformePgirsBarridos', error);
        
    }
}

export const getResumenPgirs = async (data) => {
    try{
        const response = await Http.get('resumen-variables-pgirs/resumenVariables', data);
        return response;
    }
    catch(error){
        console.log('error en getResumenPgirs', error);
    }
}

export const getVariablesPgirs = async (aps, anno, mes) => {  
    try{
        const response = await Http.get('pgirs-variables/getVariablesPgirs',  
        {
            APSA_ID: aps,
            ANNO: anno,
            MES: mes
        }
    );
        return response;
    }
    catch(error){
        console.log('error en getResumenPgirs', error);
    }
}

export const postVariablesPgirs = async (data) => {  
    console.log(data)
    try{
        const response = await Http.post('pgirs-variables', data
    );
        return response;
    }
    catch(error){
        console.log('error en getResumenPgirs', error);
    }
}