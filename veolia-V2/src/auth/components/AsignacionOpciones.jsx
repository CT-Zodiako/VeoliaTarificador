import { useEffect, useMemo, useState } from 'react'
import { getOpcionesUsuario } from '../services/asignacionOpcionesMenu';
import { Menu } from '../../ui/components/datas';
import { useOpcionesMenu } from '../hooks/useOpcionesMenu';
import { usePermisosMenu } from '../hooks/usePermisosMenu';
import { OpcionesMenu } from './OpcionesMenu';

export const AsignacionOpciones = () => {
    const [ opcionesAsignadas, setOpcionesAsignadas ] = useState();
    const [ opcionesRestantes, setOpcionesRestantes ] = useState();
    const [ porAsignar, setPorAsignar ] = useState([]);
    const [ porQuitar, setPorQuitar ] = useState([]);
    const { opcionesUsuario } = useOpcionesMenu(Menu);
    const { cambioEstadoOpcionMenu, eliminarItemDeItemsPadre, 
    alternarCheckedItemHijo, cambioEstadoItemMenu, filtrarItemsMenu, 
    cambiarAsignacionItems, newArreglosMenu, orderOpcionesAsignadas,
    orderOpcionesSinAsignar } = usePermisosMenu(opcionesAsignadas, opcionesRestantes);

    const onOpcionesMenu = async() => {
        try {
            const response = await getOpcionesUsuario();
            const {opciones, restante} = opcionesUsuario(response);
            setOpcionesAsignadas(opciones);
            setOpcionesRestantes(restante);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        onOpcionesMenu();
    }, []);

    const onSelectorAsignadas = (id, isChild = false) => {
        const elementoPadre = opcionesAsignadas.find((menu) => menu.items?.some((item) => item.id === id));
        const elemento = isChild ? elementoPadre?.items.find((item) => item.id === id) : opcionesAsignadas.find((menu) => menu.id === id);
        if (!elemento) return;

        const reset = cambioEstadoOpcionMenu(opcionesAsignadas, id);
        setOpcionesAsignadas(reset);

        if (!isChild) {
          const isChecked = !elemento.checked;
          const updatedItems = elemento.items && elemento.items.map(item => ({ ...item, checked: isChecked }));
          const updatedParent = { ...elemento, checked: isChecked };
          setPorAsignar((prev) => {
            if (isChecked) {
              return prev.filter((menu) => menu.id !== updatedParent.id);
            } else if (!updatedParent.items) {
              return [...prev, updatedParent];
            } else {
              return [...prev, { ...updatedParent, items: updatedItems }];
            }
          });
        } else {
            const menu = {...elemento, checked: !elemento.checked};
            if (menu.checked) {
                const eliminar = eliminarItemDeItemsPadre(porAsignar, elementoPadre.id, elemento.id);
                const estado = alternarCheckedItemHijo(opcionesAsignadas, elementoPadre.id, elemento.id);
                setPorAsignar(eliminar);
                setOpcionesAsignadas(estado);
            } else {
                cambioEstadoItemMenu(opcionesAsignadas, elementoPadre.id, elemento.id, setOpcionesAsignadas);
                const hijo = {...elemento, checked: !elemento.checked};
                const padre = porAsignar.find((menu) => menu.id === elementoPadre.id);
                if(padre) {
                    setPorAsignar(porAsignar.map(menu => {
                        if (menu.id === elementoPadre.id) {
                            return { ...menu, items: [...menu.items, hijo] };
                        }
                        return menu;
                    }));
                } else {    
                    const padre = {...elementoPadre, items: [], checked: !elementoPadre.checked};
                    setPorAsignar([...porAsignar,
                        {...padre,
                            items: [hijo]
                        }
                    ]);            
                };
            }
        }
    };

    const onOpcionesRestantes = () => {
        const nuevasOpcionesRestantes = filtrarItemsMenu(opcionesRestantes, porAsignar);
        const opcionesFiltradas = cambiarAsignacionItems(opcionesAsignadas, porAsignar);
        setOpcionesRestantes(nuevasOpcionesRestantes);
        setOpcionesAsignadas(opcionesFiltradas);
        setPorAsignar([]);
    };

    const onSelectorRestantes = (id, isChild = false) => {
        const elementoPadre = opcionesRestantes.find((menu) => menu.items?.some((item) => item.id === id));
        const elemento = isChild ? elementoPadre?.items.find((item) => item.id === id) : opcionesRestantes.find((menu) => menu.id === id); 
        if (!elemento) return;

        const reset = cambioEstadoOpcionMenu(opcionesRestantes, id);
        setOpcionesRestantes(reset);

        if (!isChild) {
            // asignacionOpcionPadre(elemento, setPorAsignar, false);
            const isChecked = !elemento.checked;
            const updatedItems = elemento.items && elemento.items.map(item => ({ ...item, checked: isChecked }));
            const updatedParent = { ...elemento, checked: isChecked };
            setPorQuitar((prev) => {
              if (!isChecked) {
                return prev.filter((menu) => menu.id !== updatedParent.id);
              } else if (!updatedParent.items) {
                return [...prev, updatedParent];
              } else {
                return [...prev, { ...updatedParent, items: updatedItems }];
              }
            });
        } else {
            const menu = {...elemento, checked: !elemento.checked};
            if (!menu.checked) {
                const item = eliminarItemDeItemsPadre(porQuitar, elementoPadre.id, elemento.id);
                const estado = alternarCheckedItemHijo(opcionesRestantes, elementoPadre.id, elemento.id);
                setPorQuitar(item);
                setOpcionesRestantes(estado);
            } else {
                cambioEstadoItemMenu(opcionesRestantes, elementoPadre.id, elemento.id, setOpcionesRestantes);
                const hijo = {...elemento, checked: !elemento.checked};
                const padre = porQuitar.find((menu) => menu.id === elementoPadre.id);
                if(padre) {
                    setPorQuitar(porQuitar.map(menu => {
                        if (menu.id === elementoPadre.id) {
                            return { ...menu, items: [...menu.items, hijo] };
                        }
                        return menu;
                    }));
                } else {    
                    const padre = {...elementoPadre, items: [], checked: !elementoPadre.checked};
                    setPorQuitar([...porQuitar,
                        {...padre,
                            items: [hijo]
                        }
                    ]);            
                };
            }
        }
    };

    const onOpcionesAsignadas = () => {
        const nuevasOpcionesAsignadas = filtrarItemsMenu(opcionesAsignadas, porQuitar);
        const opcionesFiltradas = cambiarAsignacionItems(opcionesRestantes, porQuitar);
        setOpcionesAsignadas(nuevasOpcionesAsignadas);
        setOpcionesRestantes(opcionesFiltradas);
        setPorQuitar([]);
    };

    const onMenuOpciones = () => {
        const {asignadas, sinAsignar} = newArreglosMenu(opcionesAsignadas, opcionesRestantes);
        const opcionesAsignadas = asignadas;
        const opcioneSinAsignar = sinAsignar;
        console.log(opcionesAsignadas);
        console.log(opcioneSinAsignar); 
    };

    // const iconoOpcionPadre = (padre) => {
    //     if (padre.items.every((item) => item.checked)) return '✓';
    //     else if (padre.items.every((item) => !item.checked)) return '✗';
    //     return '-';
    // };

    return(
    <>
        <OpcionesMenu 
            opcionesRestantes={orderOpcionesSinAsignar}
            opcionesAsignadas={orderOpcionesAsignadas}
            onSelectorAsignadas={onSelectorAsignadas}
            onSelectorRestantes={onSelectorRestantes}
            onOpcionesAsignadas={onOpcionesAsignadas}
            onOpcionesRestantes={onOpcionesRestantes}
            onMenuOpciones={onMenuOpciones}
        />
    </>
  )
};