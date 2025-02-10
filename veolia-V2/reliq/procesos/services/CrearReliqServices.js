import { Http } from "../../../src/helpers/axiosHelper";

export const getCrearRelq = async () => {    
    try{
        const response = await Http.get('crear-reliq');
        return response;
    }
    catch(error){
        console.log('error en data tabla crear relq', error);
    }
}

export const getCorreosUsua = async (data) => {  
    try{
        const response = await Http.get('aps/usuarioPorAPS', data);
        return response;
    }
    catch(error){
        console.log('error en data correos por aps', error);
    }
}

export const postCorreosUsua = async (data) => {  
    try{
        const response = await Http.post('crear-reliq', data);
        // console.log('response', response);
        return response;
    }
    catch(error){
        console.log('error al crear la reliquidacion', error);
    }
}