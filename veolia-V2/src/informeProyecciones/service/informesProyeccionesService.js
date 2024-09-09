import { Http } from "../../helpers/axiosHelper";

export const getProyec = async (data) => {    
    try{
        const response = await Http.get('generales/getProyeccionByAPS', data);        
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}

export const getEnergia = async (data) => {    
    try{
        const response = await Http.get('generales/energia', data);
        return response;
    }
    catch(error){
        console.log('error en data energia', error);
    }
}

export const getAcueducto = async (data) => {  
    try{
        const response = await Http.get('generales/acueducto', data);
        return response;
    }
    catch(error){
        console.log('error en data acueducto', error);
    }
}

export const getCosto = async (data) => {    
    try{
        const response = await Http.get('generales/costos', data);
        return response;
    }
    catch(error){
        console.log('error en data costo', error);
    }
}

export const getTarifas = async (data) => {  
    try{
        const response = await Http.get('generales/tarifas', data);
        return response;
    }
    catch(error){
        console.log('error en data tarifas', error);
    }
}
