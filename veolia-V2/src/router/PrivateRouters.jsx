import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
 
export const PrivateRouters = ({children}) => {
    const[auth, setAuth] = useState(false);

    useEffect(() => {
        // Verifica la autorización en el montaje inicial
        const autorizado = localStorage.getItem("autorizado") === true;
        setAuth(autorizado);
    }, []);

    if (!auth) {
        return <Navigate to="/login" />;
      }
    
      // Si está autorizado, muestra el contenido protegido
      return children;
};