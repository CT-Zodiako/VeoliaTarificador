import { useMemo } from "react";

 export const usePermisosMenu = (opcionesMenu, opcionesRestantes) => {
    // const  asignacionOpcionPadre = (elemento, setArray, accion) =>{
    //     const isChecked = !elemento.checked;
    //       const updatedItems = elemento.items.map(item => ({ ...item, checked: isChecked }));
    //       const updatedParent = { ...elemento, checked: isChecked };
    //       setArray((prev) => {
    //         if (isChecked) {
    //           return prev.filter((menu) => menu.id !== updatedParent.id);
    //         } else if (!updatedParent.items) {
    //           return [...prev, updatedParent];
    //         } 
    //         else {
    //           return [...prev, { ...updatedParent, items: updatedItems }];
    //         }        
    //     });
    // };

    const cambioEstadoOpcionMenu = (opcionesMenu, id) => {
        const reset = opcionesMenu.map(menu => {
            if (menu.id === id) {
              const newCheckedState = !menu.checked;
              const updatedItems = menu.items
                ? menu.items.map(item => ({
                    ...item,
                    checked: newCheckedState,
                }))
                : null;
                return { 
                    ...menu, 
                    checked: newCheckedState, 
                    ...(updatedItems && { items: updatedItems }) 
                };            
            }
            return menu;
        });
        return reset;
    }; 

    const eliminarItemDeItemsPadre = (arreglo, idPadre, idHijo) => {
        const opcion = arreglo.map(item => {
            if (item.id === idPadre) {
                return { ...item, items: item.items.filter(i => i.id !== idHijo) };
            }
            return item;
        });
        return opcion;
    };

    const alternarCheckedItemHijo = (opcionesMenu, idPadre, idHijo) => {
        const opcion = opcionesMenu.map(item => {
            if (item.id === idPadre) {
                const updatedItems = item.items.map(i => {
                    if (i.id === idHijo) {
                        return { ...i, checked: !i.checked };
                    }
                    return i;
                });
                return { ...item, items: updatedItems };
            }
            return item; 
        });
        return opcion;
    };

    const cambioEstadoItemMenu = (arreglo, idPadre, idHijo, setOpcionesMenu) => {
        arreglo.map((menu) => {
            if (menu.id === idPadre) {
                const updatedItems = menu.items.map(item => {
                    if(item.id === idHijo) {
                        return { ...item, checked: !item.checked };
                    }
                    return item;
                });
                setOpcionesMenu(arreglo.map(menu => {
                    if (menu.id === idPadre) {
                        return { ...menu, items: updatedItems };
                    }
                    return menu;
                }));
            }
        });
    };

    const filtrarItemsMenu = (array, newArray) => {
        const nuevasOpcionesAsignadas = [...array];
        newArray.forEach((nuevoMenu) => {
            const menuExistente = nuevasOpcionesAsignadas.find((menu) => menu.id === nuevoMenu.id);
            if (menuExistente) {
                const nuevosItems = nuevoMenu.items.filter(
                    (nuevoItem) => !menuExistente.items.some((itemExistente) => itemExistente.id === nuevoItem.id)
                );
                menuExistente.items = [...menuExistente.items, ...nuevosItems];
            } else {
                nuevasOpcionesAsignadas.push(nuevoMenu);
            }
        });
        return nuevasOpcionesAsignadas;
    };

    const cambiarAsignacionItems = (array, newArray) => {
        const opcionesFiltradas = array.map((menu) => {
            const menuPorQuitar = newArray.find((item) => item.id === menu.id);
            if (menuPorQuitar && menu.items) {
                const itemsFiltrados = menu.items.filter(
                    (itemMenu) => !menuPorQuitar.items.some((itemAsignado) => itemAsignado.id === itemMenu.id)
                );
                return { ...menu, items: itemsFiltrados };
            }
            return menu;
        })
        .filter((menu) => {
            return menu.items ? menu.items.length > 0 : false;
        });
        return opcionesFiltradas;
    };
    

    const newArreglosMenu = (opcionesMenu, opcionesRestantes) => {
        const asignadas = [];
        const sinAsignar = [];
        opcionesMenu.forEach((menu) => {
            asignadas.push(menu.id);
            if (menu.items) {
                menu.items.forEach((item) => {
                    asignadas.push(item.id);
                });
            }
        });
        opcionesRestantes.forEach((menu) => {
            sinAsignar.push(menu.id);
            if (menu.items) {
                menu.items.forEach((item) => {
                    sinAsignar.push(item.id);
                });
            }
        });
        return {asignadas, sinAsignar};
    };

    const orderOpcionesAsignadas = useMemo(() => {
        if (!opcionesMenu) return [];
        return opcionesMenu
            .sort((a, b) => a.id - b.id)
            .map(parent => ({
                ...parent,
                items: parent.items?.sort((a, b) => a.id - b.id) || []
            }));
    }, [opcionesMenu]);

    const orderOpcionesSinAsignar = useMemo(() => {
        if (!opcionesRestantes) return [];
        return opcionesRestantes
            .sort((a, b) => a.id - b.id)
            .map(parent => ({
                ...parent,
                items: parent.items?.sort((a, b) => a.id - b.id) || []
            }));
    }, [opcionesRestantes]);

    return {cambioEstadoOpcionMenu, eliminarItemDeItemsPadre, 
        alternarCheckedItemHijo, cambioEstadoItemMenu, 
        filtrarItemsMenu, cambiarAsignacionItems, 
        newArreglosMenu, orderOpcionesAsignadas, 
        orderOpcionesSinAsignar};
};