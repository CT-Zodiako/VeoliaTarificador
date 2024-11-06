import { Navigate } from "react-router-dom";
import { serviceMenu } from "../ui/services/serviceMenu";

export const PrivateRoute = ({ path, element }) => {
    const token = localStorage.getItem("token");
    const menu = serviceMenu();

    const opcion = menu.some((item) => 
        item.items && item.items.some((subItem) => subItem.to === path)
    );
    
    if (!token) {
        return <Navigate to="/login" />;
    };

    if (!opcion && menu.length > 0) {
        return <Navigate to="/" />;
    };

    return element;
};