import { Http } from "../../helpers/axiosHelper";

export const getSistemas = async (data) => {
  try {
    const response = await Http.get("auth/getSistemas", data);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}