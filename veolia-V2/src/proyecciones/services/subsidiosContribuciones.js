import { Http } from "../../helpers/axiosHelper";

export const getSubContribuciones = async (data) => { 
    try{
        const response = await Http.get('subsidios-contribuciones/consultaSubCon', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}