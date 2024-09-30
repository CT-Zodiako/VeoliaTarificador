import { Http } from "../../helpers/axiosHelper";

export const getCrear = async (data) => { 
    try{
        const response = await Http.get('crear/consultaProyecciones', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}

export const postCrear = async (data) => {     
    try{
        const response = await Http.patch('crear/editarProyeccion', data);
        console.log('response', response);
        return response;
    }
    catch(error){
        console.log('error en editar crear', error);
    }
}