import { Http } from "../../helpers/axiosHelper";

export const selectorService = async () => {
    try {
        const response = await Http.get("aps/apsByUser");
        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}