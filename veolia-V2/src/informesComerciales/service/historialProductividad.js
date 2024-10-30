import { Http } from "../../helpers/axiosHelper";

export const getHistorialProductividad = async (data) => {    
    try{
        const response = await Http.get('facturacion-informes-comerciales/historialProductividad', data);
        return response;
    }
    catch(error){
        console.log('error en data Tarifas gerenciales', error);
    }
}