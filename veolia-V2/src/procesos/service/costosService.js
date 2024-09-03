import { Http } from "../../helpers/axiosHelper";

export const getCostos = async (data) => {
    try{        
        const response = await Http.get('procesos/costos', data);
        return response;
    }
    catch(error){      
        console.log('error en data costo', error);
    }
  }

export const getCostoJSON = async (data) => {
    console.log('data costoJson: ', data);
    try{        
        const response = await Http.get('procesos/costosJson', data);
        return response;
    }
    catch(error){      
        console.log('error en data costo', error);
    }
  }