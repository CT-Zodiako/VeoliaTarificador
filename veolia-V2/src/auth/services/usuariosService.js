import { Http } from "../../helpers/axiosHelper";

export const getUsuarios = async () => {
  try {
    const response = await Http.get("auth/users");
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export const upDataUsuario = async (data) => {
  try {
    const response = await Http.put("auth/updateUser", data);
    return response;
  } catch (error) {
    console.error("Error updating data:", error);
  }
}

export const saveNewUsuario = async (data) => {
    try {
        const response = await Http.post("auth/register", data);
        return response;
    } catch (error) {
        console.error("Error saving data:", error);
    }
}

export const apsAsignadas = async (data) => {
    try {
      const response = await Http.get("aps/getApsAsignadas",data);
      return response;
    }catch (error) {
        console.error("Error fetching data:", error);
    }
  
}