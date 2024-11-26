import { Http } from "../../helpers/axiosHelper";

export const getCrecimientoVarbl = async (data) => { 
    try{
        const response = await Http.get('crecimiento-varaibles/registrarCrecimientoUsuarios', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}