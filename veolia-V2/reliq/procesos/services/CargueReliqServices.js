import { Http } from "../../../src/helpers/axiosHelper";

export const getEmpresaRelq = async (data) => {    
    try{
        const response = await Http.get('cargue-reliq/resumen-empresa', data);
        return response;
    }
    catch(error){
        console.log('error en data tabla empresa relq', error);
    }
}

export const getAdicionalRelq = async (data) => {    
    try{
        const response = await Http.get('cargue-reliq/resumen-adicional', data);
        return { success: true, data: response, mensaje: "Cargó tabla adicional" };
    }
    catch(error){
        console.log('error en data tabla adicional relq', error);
        return { success: false, error: "No se logró cargar la tabla." };
    }
}

export const getUsuarioRelq = async (data) => {    
    try{
        const response = await Http.get('cargue-reliq/resumen-usuarios', data);
        return response;
    }
    catch(error){
        console.log('error en data tabla usuario relq', error);
    }
}

export const getApsRelq = async (data) => {    
    try{
        const response = await Http.get('cargue-reliq/resumen-aps', data);
        return response;
    }
    catch(error){
        console.log('error en data tabla aps relq', error);
    }
}

export const getRellenoRelq = async (data) => {    
    try{
        const response = await Http.get('cargue-reliq/resumen-relleno', data);
        return response;
    }
    catch(error){
        console.log('error en data tabla relleno relq', error);
    }
}

export const updateEmpresaRelq = async (data) => {    
    try{
        const response = await Http.patch('cargue-reliq/update-resumen-empresa', data);
        return response;
    }
    catch(error){
        console.log('error al actualizar empresa reliq', error);
    }
}

export const updateAdicionalRelq = async (data) => {    
    try{
        const response = await Http.patch('cargue-reliq/update-resumen-adicional', data);
        return response;
    }
    catch(error){
        console.log('error al actualizar adicional reliq', error);
    }
}

export const updateUsuarioRelq = async (data) => {    
    try{
        const response = await Http.patch('cargue-reliq/update-resumen-usuarios', data);
        return response;
    }
    catch(error){
        console.log('error al actualizar adicional reliq', error);
    }
}

export const updateApsRelq = async (data) => {
    try{
        const response = await Http.patch('cargue-reliq/update-resumen-aps', data);
        return response;
    }
    catch(error){
        console.log('error al actualizar aps reliq', error);
    }
}

export const updateRellenoRelq = async (data) => {
    try{
        const response = await Http.patch('cargue-reliq/update-resumen-relleno', data);
        return response;
    }
    catch(error){
        console.log('error al actualizar relleno reliq', error);
    }
}

