import { Http } from "../../helpers/axiosHelper";

export const getCargueComplementario = async (data) => { 
    try{
        const response = await Http.get('cargue-complementario/traerEmpresasPropias', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}

export const postCargueComplementario = async (data) => { 
    try{
        const response = await Http.post('cargue-complementario/cargueInfComplemento', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}