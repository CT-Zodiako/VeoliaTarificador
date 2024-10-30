import { Http } from "../../helpers/axiosHelper";

export const getOpcionesUsuario = async () => {
  try {
    const response = await Http.get("auth/getMenuUserOptions");
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
