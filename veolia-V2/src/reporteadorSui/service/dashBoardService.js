import { Http } from "../../helpers/axiosHelper";

export const getDashBoardSUI = async (data) => { 
    try{
        const response = await Http.get('dashboardReporteador', data);
        return response;
    }
    catch(error){
        console.log('error en data proyeccion', error);
    }
}