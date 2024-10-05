import { Http } from "../../helpers/axiosHelper";

export const getCargueSemestral = async (data) => {    
    try{
        const response = await Http.get('semestral/consultaPropias', data);
        return response;
    }
    catch(error){
        console.log('error en data Tarifas gerenciales', error);
    }
}

export const postPropiaMensual = async (data) => { 
    try{
        const response = await Http.post('semestral/carguePropia', data);
        return response;
    }
    catch(error){
        console.log('error al enviar data csv', error);
    }
}

export const postCompetidorMensual = async (data) => { 
    try{
        const response = await Http.post('semestral/cargueInfCompetidor', data);
        return response;
    }
    catch(error){
        console.log('error al enviar data csv competidor', error);
    }
}

export const postInfoUsuarios = async (data) => { 
    try{
        const response = await Http.post('semestral/cargueUsuarios', data);
        return response;
    }
    catch(error){
        console.log('error al enviar data csv competidor', error);
    }
}

export const postInfoTerceros = async (data) => { 
    try{
        const response = await Http.post('semestral/cargueTerceros', data);
        return response;
    }
    catch(error){
        console.log('error al enviar data csv competidor', error);
    }
}