import { Http } from "../../helpers/axiosHelper";

export const getFacturacion = async (data) => {    
    try{
        const response = await Http.get('facturacion-informes-comerciales/facturacionDinc', data);
        console.log('response facturacion: ', response);
        return response;
    }
    catch(error){
        console.log('error en data Tarifas gerenciales', error);
    }
}

export const getDetFac = async (data) => { 
    try{
        const response = await Http.get('facturacion-informes-comerciales/detalleFacturacion', data);
        return response;
    }
    catch(error){
        console.log('error en data Tarifas gerenciales', error);
    }
}

export const getDetFacClus = async (data) => { 
    try{
        const response = await Http.get('facturacion-informes-comerciales/facturacionClus', data);
        return response;
    }
    catch(error){
        console.log('error en data Tarifas gerenciales', error);
    }
}

export const getDetFacDinc = async (data) => { 
    try{
        const response = await Http.get('facturacion-informes-comerciales/facturacionDinc', data);
        console.log('response DINC: ', response); 
        return response;
    }
    catch(error){
        console.log('error en data Tarifas gerenciales', error);
    }
}