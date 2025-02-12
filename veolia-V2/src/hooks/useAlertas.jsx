import { useState } from "react";

export const useAlertas = ( inicial=[] ) => {
    const [ alerta, setAlerta ] = useState(inicial);
    
    const agregarAlerta = (mensaje, tipo = "info") => {
        const id = new Date().getTime();
        setAlerta((prevAlertas) => [...prevAlertas, { id, mensaje, tipo }]);
    
        setTimeout(() => {
          setAlerta((prevAlertas) => prevAlertas.filter((alerta) => alerta.id !== id));
        }, 3000);
    };

    const onCerrarAlerta = (alert) => {
        setAlerta((prevAlertas) =>
          prevAlertas.filter((a) => a.id !== alert)
        );
    };

    return { alerta, agregarAlerta, onCerrarAlerta };
};