import { Http } from "../../helpers/axiosHelper";

export const getLineasTiempo = async (data) => { 
    try{
        const response = await Http.get('crear/consultaProyecciones', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}