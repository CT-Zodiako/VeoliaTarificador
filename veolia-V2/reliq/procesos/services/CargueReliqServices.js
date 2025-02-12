import { Http } from "../../../src/helpers/axiosHelper";

export const getEmpresaRelq = async (data) => {    
    try{
        const response = await Http.get('cargue-reliq/resumen-empresa', data);
        return response;
    }
    catch(error){
        console.log('error en data tabla crear relq', error);
    }
}

export const getAdicionalRelq = async (data) => {    
    try{
        const response = await Http.get('cargue-reliq/resumen-adicional', data);
        return response;
    }
    catch(error){
        console.log('error en data tabla crear relq', error);
    }
}

export const getUsuarioRelq = async (data) => {    
    try{
        const response = await Http.get('cargue-reliq/resumen-usuarios', data);
        return response;
    }
    catch(error){
        console.log('error en data tabla crear relq', error);
    }
}

export const getApsRelq = async (data) => {    
    try{
        const response = await Http.get('cargue-reliq/resumen-aps', data);
        return response;
    }
    catch(error){
        console.log('error en data tabla crear relq', error);
    }
}

export const getRellenoRelq = async (data) => {    
    try{
        const response = await Http.get('cargue-reliq/resumen-relleno', data);
        return response;
    }
    catch(error){
        console.log('error en data tabla crear relq', error);
    }
}

