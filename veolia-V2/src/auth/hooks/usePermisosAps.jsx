import { useState } from "react";

 export const usePermisosAps = () => {
  const [asignadas, setAsignadas] = useState([])
  const [sinAsignar, setSinAsignar] = useState([])
  const [porAsignar, setPorAsignar] = useState([])
  const [porQuitar, setPorQuitar] = useState([])  
  
  const dataAsignadas = (response) => {
        return response.apsAsignadas.map((item) => {
              return { ...item, checked: true };
        });
    };

    const dataSinAsignar = (response)=> {
        return response.apsSinAsignar.map((item) => {
            return { ...item, checked: false };
        });
    };

    const handleCheck = (id) => {
        const elementoSinAsignar = sinAsignar.find(item => item.APSA_ID === id);
        const elementoAsignado = asignadas.find(item => item.APSA_ID === id);
        
        if (elementoSinAsignar) {
          const updatedSinAsignar = sinAsignar.map(item => 
            item.APSA_ID === id ? { ...item, checked: !item.checked } : item
          );
          setSinAsignar(updatedSinAsignar);
          const elemento = updatedSinAsignar.find(item => item.APSA_ID === id);
          if (elemento.checked === true) {
            setPorAsignar([...porAsignar, elemento]);
          } else {
            setPorAsignar(porAsignar.filter(item => item.APSA_ID !== id));
          }
        } else if (elementoAsignado) {
          const updatedAsignado = asignadas.map(item => 
            item.APSA_ID === id ? { ...item, checked: !item.checked } : item
          );
          setAsignadas(updatedAsignado);
          const elemento = updatedAsignado.find(item => item.APSA_ID === id);
          if (elemento.checked === false) {
            setPorQuitar([...porQuitar, elemento]);
          } else {
            setPorQuitar(porQuitar.filter(item => item.APSA_ID !== id));
          }
        }
    };

    const handleQuitarAps = () => {        setSinAsignar([...sinAsignar, ...porQuitar]);
        setAsignadas(asignadas.filter(aps => 
          !porQuitar.some(item => item.APSA_ID === aps.APSA_ID)
        ));
        setPorQuitar([]);
    };
    
      const handleAsignarAps = () => {
          setAsignadas([...asignadas, ...porAsignar]);
          setSinAsignar(sinAsignar.filter(aps => 
            !porAsignar.some(item => item.APSA_ID === aps.APSA_ID)
          ));
          setPorAsignar([]);
    };

    const handleApsAsignadas = () => {
        return asignadas.map(({ checked, ...rest }) => {    
            return rest;
        });
    }; 

    const handleApsSinAsignar = () => {
        return sinAsignar.map(({ checked, ...rest }) => {
            return rest;
        });
    };

    return{
        asignadas,
        sinAsignar,
        setAsignadas,
        setSinAsignar,
        handleCheck, 
        handleQuitarAps, 
        handleAsignarAps, 
        handleApsAsignadas, 
        handleApsSinAsignar,
        dataAsignadas,
        dataSinAsignar
    };
};