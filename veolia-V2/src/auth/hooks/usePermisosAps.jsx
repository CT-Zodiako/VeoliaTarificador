import { useState } from "react";

 export const usePermisosAps = () => {
    const [asignadas, setAsignadas] = useState([])
    const [sinAsignar, setSinAsignar] = useState([])
    const [porAsignar, setPorAsignar] = useState([])
    const [porQuitar, setPorQuitar] = useState([])  

    // const dataAsignadas = (response) => {
    //   return response.apsAsignadas.map((item) => {
    //         return { ...item, checked: true };
    //   });
    // };
    const dataAsignadas = (response, Asignadas) => {
      return response[Asignadas].map((item) => {
            return { ...item, checked: true };
      });
    };

    // const dataSinAsignar = (response)=> {
    //     return response.apsSinAsignar.map((item) => {
    //         return { ...item, checked: false };
    //     });
    // };
    const dataSinAsignar = (response, SinAsignar)=> {
      return response[SinAsignar].map((item) => {
          return { ...item, checked: false };
      });
    };

    // const handleCheck = (id) => {
    //     const elementoSinAsignar = sinAsignar.find(item => item.APSA_ID === id);
    //     const elementoAsignado = asignadas.find(item => item.APSA_ID === id);
        
    //     if (elementoSinAsignar) {
    //       const updatedSinAsignar = sinAsignar.map(item => 
    //         item.APSA_ID === id ? { ...item, checked: !item.checked } : item
    //       );
    //       setSinAsignar(updatedSinAsignar);
    //       const elemento = updatedSinAsignar.find(item => item.APSA_ID === id);
    //       if (elemento.checked === true) {
    //         setPorAsignar([...porAsignar, elemento]);
    //       } else {
    //         setPorAsignar(porAsignar.filter(item => item.APSA_ID !== id));
    //       }
    //     } else if (elementoAsignado) {
    //       const updatedAsignado = asignadas.map(item => 
    //         item.APSA_ID === id ? { ...item, checked: !item.checked } : item
    //       );
    //       setAsignadas(updatedAsignado);
    //       const elemento = updatedAsignado.find(item => item.APSA_ID === id);
    //       if (elemento.checked === false) {
    //         setPorQuitar([...porQuitar, elemento]);
    //       } else {
    //         setPorQuitar(porQuitar.filter(item => item.APSA_ID !== id));
    //       }
    //     }
    // };
    const handleCheck = (id, nameId) => {
      const elementoSinAsignar = sinAsignar.find(item => item[nameId] === id);
      const elementoAsignado = asignadas.find(item => item[nameId] === id);
      
      if (elementoSinAsignar) {
        const updatedSinAsignar = sinAsignar.map(item => 
          item[nameId] === id ? { ...item, checked: !item.checked } : item
        );
        setSinAsignar(updatedSinAsignar);
        const elemento = updatedSinAsignar.find(item => item[nameId] === id);
        if (elemento.checked === true) {
          setPorAsignar([...porAsignar, elemento]);
        } else {
          setPorAsignar(porAsignar.filter(item => item[nameId] !== id));
        }
      } else if (elementoAsignado) {
        const updatedAsignado = asignadas.map(item => 
          item[nameId] === id ? { ...item, checked: !item.checked } : item
        );
        setAsignadas(updatedAsignado);
        const elemento = updatedAsignado.find(item => item[nameId] === id);
        if (elemento.checked === false) {
          setPorQuitar([...porQuitar, elemento]);
        } else {
          setPorQuitar(porQuitar.filter(item => item[nameId] !== id));
        }
      }
    };

    // const handleQuitarAps = () => {        
    //   setSinAsignar(prevSinAsignar => {
    //       const nuevosSinAsignar = [...prevSinAsignar, ...porQuitar].sort((a, b) =>
    //           a.APSA_DESCRIPCION.localeCompare(b.APSA_DESCRIPCION)
    //       );
    //       return nuevosSinAsignar;
    //   });
    //   setAsignadas(prevAsignadas => {
    //       return prevAsignadas.filter(aps => 
    //           !porQuitar.some(item => item.APSA_ID === aps.APSA_ID)
    //       );
    //   });
    //   setPorQuitar([]);
    // };
    const handleQuitarAps = (ordenar, nameId) => {        
      setSinAsignar(prevSinAsignar => {
          const nuevosSinAsignar = [...prevSinAsignar, ...porQuitar].sort((a, b) =>
              a[ordenar].localeCompare(b[ordenar])
          );
          return nuevosSinAsignar;
      });
      setAsignadas(prevAsignadas => {
          return prevAsignadas.filter(aps => 
              !porQuitar.some(item => item[nameId] === aps[nameId])
          );
      });
      setPorQuitar([]);
    };
  
    
    // const handleAsignarAps = () => {
    //   setAsignadas(prevAsignadas => {
    //       const nuevasAsignadas = [...prevAsignadas, ...porAsignar].sort((a, b) =>
    //           a.APSA_DESCRIPCION.localeCompare(b.APSA_DESCRIPCION)
    //       );
    //       return nuevasAsignadas;
    //   });
    //   setSinAsignar(prevSinAsignar => {
    //       return prevSinAsignar.filter(aps => 
    //           !porAsignar.some(item => item.APSA_ID === aps.APSA_ID)
    //       );
    //   });
    //   setPorAsignar([]);
    // };
    const handleAsignarAps = (ordenar, nameId) => {
      setAsignadas(prevAsignadas => {
          const nuevasAsignadas = [...prevAsignadas, ...porAsignar].sort((a, b) =>
              a[ordenar].localeCompare(b[ordenar])
          );
          return nuevasAsignadas;
      });
      setSinAsignar(prevSinAsignar => {
          return prevSinAsignar.filter(aps => 
              !porAsignar.some(item => item[nameId] === aps[nameId])
          );
      });
      setPorAsignar([]);
    };

    // const handleApsAsignadas = () => {
    //     return asignadas.map(({ checked, ...rest }) => {    
    //         return rest.APSA_ID;
    //     });
    // }; 
    const handleApsAsignadas = (nameId) => {
      return asignadas.map(({ checked, ...rest }) => {    
          return rest[nameId];
      });
    }; 

    // const handleApsSinAsignar = () => {
    //     return sinAsignar.map(({ checked, ...rest }) => {
    //         return rest.APSA_ID;
    //     });
    // };
    const handleApsSinAsignar = (nameId) => {
      return sinAsignar.map(({ checked, ...rest }) => {
          return rest[nameId];
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