import { Http } from "../../helpers/axiosHelper";

export const getHistorialCertificacion = async (data) => {    
    try{
        const response = await Http.get('facturacion-informes-comerciales/historialCertificacion', data);
        return response;
    }
    catch(error){
        console.log('error en data Tarifas gerenciales', error);
    }
}