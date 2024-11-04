import { Navigate } from "react-router-dom";
import { serviceMenu } from "../ui/services/serviceMenu";

export const PrivateRoute = ({ path, element }) => {
    const token = localStorage.getItem("token");
    const menu = serviceMenu();

    const opcion = menu.some((item) => 
        item.items && item.items.some((subItem) => subItem.to === path)
    );
    console.log('opcion', opcion);
    
    if (!token) {
        return <Navigate to="/login" />;
    };

    // setTimeout(() => {
    //     if (!opcion) {
    //         return <Navigate to="/" />;
    //     };
    // }, 2000);
    if (!opcion) {
        return <Navigate to="/" />;
    };

    return element;
};