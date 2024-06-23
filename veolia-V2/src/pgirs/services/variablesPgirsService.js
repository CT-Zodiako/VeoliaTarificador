import { Http } from "../../helpers/axiosHelper";

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
    try{
        const response = await Http.post('pgirs-variables', data
    );
        return response;
    }
    catch(error){
        console.log('error en getResumenPgirs', error);
    }
}

export const updateVariablesPgirs = async (data) => {  
    try{
        const response = await Http.patch('pgirs-variables', data
    );
        return response;
    }
    catch(error){
        console.log('error en getResumenPgirs', error);
    }
}