import { Http } from "../../helpers/axiosHelper";

export const getOpcionesUsuario = async (id, idSistema) => {
  const data = {
    sisuId: id, 
    idSistema: idSistema
  };
  try {
    const response = await Http.get('auth/getMenuByUser', data);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export const asignarMenu = async (data) => {
  try {
    const response = await Http.post('auth/asignarMenu', data);
    console.log('response', response);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}