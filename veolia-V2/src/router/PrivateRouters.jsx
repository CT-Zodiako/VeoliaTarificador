import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, requiresAuth, isAdmin }) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (requiresAuth && !token) {
        return <Navigate to="/login" />;
    }

    if (isAdmin && (!user || user.is_admin !== 1)) {
        return <Navigate to="/" />;
    }

    return element;
};

// import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
 
// export const PrivateRouters = ({children}) => {
//     const[auth, setAuth] = useState(false);

//     useEffect(() => {
//         const autorizado = localStorage.getItem("autorizado") === true;
//         setAuth(autorizado);
//     }, []);

//     if (!auth) {
//         return <Navigate to="/login" />;
//       }
    
//       return children;
// };