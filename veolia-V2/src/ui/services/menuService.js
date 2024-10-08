import { Http } from "../../helpers/axiosHelper";

export const getMenuService = async () => {
    try {
        const response = await Http.get("auth/menu");
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}