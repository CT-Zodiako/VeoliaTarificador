import { Http } from "../../helpers/axiosHelper";

export const getMenuService = async (data) => {
    console.log('data', data);
    try {
        const response = await Http.get("auth/menu", data);
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}