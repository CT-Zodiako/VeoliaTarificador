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

export const postPropiaSemestral = async (data) => {    
    try{
        const response = await Http.post('mensual/carguePropias', data);
        return response;
    }
    catch(error){
        console.log('error en data Tarifas gerenciales', error);
    }
}

export const postCompetidorSemestral = async (data) => {    
    try{
        const response = await Http.post('mensual/cargueInfCompetidor', data);
        return response;
    }
    catch(error){
        console.log('error en data Tarifas gerenciales', error);
    }
}

export const postUsuariosSemestral = async (data) => {    
    try{
        const response = await Http.post('mensual/cargueUsuarios', data);
        return response;
    }
    catch(error){
        console.log('error en data Tarifas gerenciales', error);
    }
}