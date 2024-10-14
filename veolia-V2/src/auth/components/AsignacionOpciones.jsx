import { useEffect, useState } from 'react'
import { getOpcionesUsuario } from '../services/asignacionOpcionesMenu';
import { Menu } from '../../ui/components/datas';
import { useOpcionesMenu } from '../hooks/useOpcionesMenu';

export const AsignacionOpciones = () => {
    const [opcionesMenu, setOpcionesMenu] = useState();
    const [opcionesRestantes, setOpcionesRestantes] = useState([]);
    const [porAsignar, setPorAsignar] = useState([]);
    const [porQuitar, setPorQuitar] = useState([]);
    const {opcionesUsuario} = useOpcionesMenu(Menu);

    const onOpcionesMenu = async() => {
        try {
            const response = await getOpcionesUsuario();
            const {opciones, restante} = opcionesUsuario(response);
            setOpcionesMenu(opciones);
            setOpcionesRestantes(restante);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        onOpcionesMenu();
    }, []);

    const handleCheck = (id, isChild = false) => {
        const elementoPadre = opcionesMenu.find((menu) => menu.items?.some((item) => item.id === id));
        const elemento = isChild ? elementoPadre?.items.find((item) => item.id === id) : opcionesMenu.find((menu) => menu.id === id);
        if (!elemento) return;

        const reset = opcionesMenu.map(menu => {
            if (menu.id === id) {
              const newCheckedState = !menu.checked;
              const updatedItems = menu.items.map(item => ({
                ...item,
                checked: newCheckedState,
              }));
              return { ...menu, checked: newCheckedState, items: updatedItems };
            }
            return menu;
          });
        setOpcionesMenu(reset);

        if (!isChild) {
          const isChecked = !elemento.checked;
          const updatedItems = elemento.items.map(item => ({ ...item, checked: isChecked }));
          const updatedParent = { ...elemento, checked: isChecked };
          setPorAsignar((prev) => {
            if (isChecked) {
              return prev.filter((menu) => menu.id !== updatedParent.id);
            } else {
              return [...prev, { ...updatedParent, items: updatedItems }];
            }
          });
        } else {
            const menu = {...elemento, checked: !elemento.checked};
            if (menu.checked) {
                setPorAsignar(porAsignar.map(item => {
                    if (item.id === elementoPadre.id) {
                        return { ...item, items: item.items.filter(i => i.id !== elemento.id) };
                    }
                    return item;
                }));
                setOpcionesMenu(opcionesMenu.map(item => {
                    if (item.id === elementoPadre.id) {
                        const updatedItems = item.items.map(i => {
                            if (i.id === elemento.id) {
                                return { ...i, checked: !i.checked };
                            }
                            return i;
                        });
                        return { ...item, items: updatedItems };
                    }
                    return item; 
                }));
            } else {
                opcionesMenu.map((menu) => {
                    if (menu.id === elementoPadre.id) {
                        const updatedItems = menu.items.map(item => {
                            if(item.id === elemento.id) {
                                return { ...item, checked: !item.checked };
                            }
                            return item;
                        });
                        setOpcionesMenu(opcionesMenu.map(menu => {
                            if (menu.id === elementoPadre.id) {
                                return { ...menu, items: updatedItems };
                            }
                            return menu;
                        }));
                    }
                }); 
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
        const nuevasOpcionesRestantes = [...opcionesRestantes];
        porAsignar.forEach((nuevoMenu) => {
            const menuExistente = nuevasOpcionesRestantes.find((menu) => menu.id === nuevoMenu.id);
            if (menuExistente) {
                const nuevosItems = nuevoMenu.items.filter(
                    (nuevoItem) => !menuExistente.items.some((itemExistente) => itemExistente.id === nuevoItem.id)
                );
                menuExistente.items = [...menuExistente.items, ...nuevosItems];
            } else {
                nuevasOpcionesRestantes.push(nuevoMenu);
            }
        });
        setOpcionesRestantes(nuevasOpcionesRestantes);

        const opcionesFiltradas = opcionesMenu.map((menu) => {
            const menuPorAsignar = porAsignar.find((item) => item.id === menu.id);
            if (menuPorAsignar && menu.items) {
            const itemsFiltrados = menu.items.filter(
                (itemMenu) => !menuPorAsignar.items.some((itemAsignado) => itemAsignado.id === itemMenu.id)
            );
            return { ...menu, items: itemsFiltrados };
            }
            return menu;
        }).filter((menu) => !menu.items || menu.items.length > 0);
        
        setOpcionesMenu(opcionesFiltradas);
        setPorAsignar([]);
    };

    const handleCheckAgregar = (id, isChild = false) => {
        const elementoPadre = opcionesRestantes.find((menu) => menu.items?.some((item) => item.id === id));
        const elemento = isChild ? elementoPadre?.items.find((item) => item.id === id) : opcionesRestantes.find((menu) => menu.id === id); 
        if (!elemento) return;

        const reset = opcionesRestantes.map(menu => {
            if (menu.id === id) {
              const newCheckedState = !menu.checked;
              const updatedItems = menu.items.map(item => ({
                ...item,
                checked: newCheckedState,
              }));
              return { ...menu, checked: newCheckedState, items: updatedItems };
            }
            return menu;
          });
        setOpcionesRestantes(reset);

        if (!isChild) {
            const isChecked = !elemento.checked;
            const updatedItems = elemento.items.map(item => ({ ...item, checked: isChecked }));
            const updatedParent = { ...elemento, checked: isChecked };
            setPorQuitar((prev) => {
              if (!isChecked) {
                return prev.filter((menu) => menu.id !== updatedParent.id);
              } else {
                return [...prev, { ...updatedParent, items: updatedItems }];
              }
            });
        } else {
            const menu = {...elemento, checked: !elemento.checked};
            if (!menu.checked) {
                setPorQuitar(porQuitar.map(item => {
                    if (item.id === elementoPadre.id) {
                        return { ...item, items: item.items.filter(i => i.id !== elemento.id) };
                    }
                    return item;
                }));
                setOpcionesRestantes(opcionesRestantes.map(item => {
                    if (item.id === elementoPadre.id) {
                        const updatedItems = item.items.map(i => {
                            if (i.id === elemento.id) {
                                return { ...i, checked: !i.checked };
                            }
                            return i;
                        });
                        return { ...item, items: updatedItems };
                    }
                    return item; 
                }));
            } else {
                opcionesRestantes.map((menu) => {
                    if (menu.id === elementoPadre.id) {
                        const updatedItems = menu.items.map(item => {
                            if(item.id === elemento.id) {
                                return { ...item, checked: !item.checked };
                            }
                            return item;
                        });
                        setOpcionesRestantes(opcionesRestantes.map(menu => {
                            if (menu.id === elementoPadre.id) {
                                return { ...menu, items: updatedItems };
                            }
                            return menu;
                        }));
                    }
                });
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
        const nuevasOpcionesAsignadas = [...opcionesMenu];
        porQuitar.forEach((nuevoMenu) => {
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
        setOpcionesMenu(nuevasOpcionesAsignadas);

        const opcionesFiltradas = opcionesRestantes.map((menu) => {
            const menuPorQuitar = porQuitar.find((item) => item.id === menu.id);
            if (menuPorQuitar && menu.items) {
            const itemsFiltrados = menu.items.filter(
                (itemMenu) => !menuPorQuitar.items.some((itemAsignado) => itemAsignado.id === itemMenu.id)
            );
            return { ...menu, items: itemsFiltrados };
            }
            return menu;
        }).filter((menu) => !menu.items || menu.items.length > 0);
        
        setOpcionesRestantes(opcionesFiltradas);
        setPorQuitar([]);
    };

    const onMenuOpciones = () => {
        const opcionesAsignadas = [];
        const opcioneSinAsignar = [];
        opcionesMenu.forEach((menu) => {
            opcionesAsignadas.push(menu.id);
            if (menu.items) {
                menu.items.forEach((item) => {
                    opcionesAsignadas.push(item.id);
                });
            }
        });
        opcionesRestantes.forEach((menu) => {
            opcioneSinAsignar.push(menu.id);
            if (menu.items) {
                menu.items.forEach((item) => {
                    opcioneSinAsignar.push(item.id);
                });
            }
        });        
    }

    return(
    <>
        <div style={{ display: 'flex' }}>
            <div style={{ width: '45%', height: '45rem', padding: '1rem' }}>
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {opcionesRestantes &&
                opcionesRestantes.map((option)=> (
                    <li key={option.id} className="nav-item dropdown" style={{ display: 'flex', alignItems: 'center' }}>
                    {option.label !== 'Inicio' && (
                    <>
                            <button
                                style={{
                                    background: option.checked ? 'rgb(0, 0, 0, 0.5)' : 'transparent',
                                    color: option.checked ? 'white' : 'black',
                                    borderRadius: '20%',
                                    border: '1px solid rgb(0, 0, 0, 0.5)',
                                    cursor: 'pointer',
                                    width: '20px',
                                    height: '20px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onClick={() => handleCheckAgregar(option.id)}
                            >
                                {option.checked ? '✓' : '✗'}
                            </button>
                            <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false" style={{ marginLeft: '0.5rem' }}>
                                {option.label}
                            </a>
                        {option.items && (
                            <ul className="dropdown-menu">
                            {option.items.map((item) => (
                                <li key={item.id} className="dropdown-item">
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <button
                                        style={{
                                            background: item.checked ? 'rgb(0, 0, 0, 0.5)' : 'transparent',
                                            color: item.checked ? 'white' : 'black',
                                            borderRadius: '20%',
                                            border: '1px solid rgb(0, 0, 0, 0.5)',
                                            cursor: 'pointer',
                                            width: '20px',
                                            height: '20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        onClick={() => handleCheckAgregar(item.id, true)}
                                    >
                                        {item.checked ? '✓' : '✗'}
                                    </button>
                                        <a className="dropdown-item">{item.label}</a>
                                    </div>
                                </li>
                            ))}
                            </ul>
                        )}
                    </>
                    )}
                    </li>
                ))}
                </ul>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <button
                        style={{ margin: '0', width: '5rem', height: '2rem', background: 'blue', borderRadius: '6px', border: '1px solid rgb(0, 0, 0, 0.3)' }}
                        onClick={onOpcionesAsignadas}
                    >
                        Siguiente
                    </button>
                </div>
                <div>
                    <button
                        style={{ margin: '0', width: '5rem', height: '2rem', background: 'blue', borderRadius: '6px', border: '1px solid rgb(0, 0, 0, 0.3)' }}
                        onClick={onOpcionesRestantes}
                    >
                        Anterior
                    </button>
                </div>
            </div>
            <div style={{ width: '45%', height: '45rem', padding: '1rem' }}>
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {opcionesMenu && 
                    (() => {
                        const inicio = opcionesMenu[0];
                        return (
                        <li key={inicio.id} className="nav-item dropdown" style={{ display: 'flex', alignItems: 'center' }}>
                            <button
                                style={{
                                    background: inicio.checked ? 'rgb(0, 0, 0, 0.5)' : 'transparent',
                                    color: inicio.checked ? 'white' : 'black',
                                    borderRadius: '20%',
                                    border: '1px solid rgb(0, 0, 0, 0.5)',
                                    cursor: 'pointer',
                                    width: '20px',
                                    height: '20px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onClick={() => handleCheck(inicio.id)}
                            >
                                {inicio.checked ? '✓' : '✗'}
                            </button>
                            <a className="nav-link" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false" style={{ marginLeft: '0.5rem' }}>
                                {inicio.label}
                            </a>
                        </li>
                        );
                    })()
                }
                {opcionesMenu &&
                opcionesMenu.map((option)=> (
                    <li key={option.id} className="nav-item dropdown" style={{ display: 'flex', alignItems: 'center' }}>
                    {option.label !== 'Inicio' && (
                    <>
                            <button
                                style={{
                                    background: option.checked ? 'rgb(0, 0, 0, 0.5)' : 'transparent',
                                    color: option.checked ? 'white' : 'black',
                                    borderRadius: '20%',
                                    border: '1px solid rgb(0, 0, 0, 0.5)',
                                    cursor: 'pointer',
                                    width: '20px',
                                    height: '20px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onClick={() => handleCheck(option.id)}
                            >
                                {option.checked ? '✓' : '✗'}
                            </button>
                            <a className="nav-link dropdown-toggle" href="#" role="button" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" aria-expanded="false" style={{ marginLeft: '0.5rem' }}>
                                {option.label}
                            </a>
                        {option.items && (
                            <ul className="dropdown-menu">
                            {option.items.map((item) => (
                                <li key={item.id} className="dropdown-item">
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <button
                                        style={{
                                            background: item.checked ? 'rgb(0, 0, 0, 0.5)' : 'transparent',
                                            color: item.checked ? 'white' : 'black',
                                            borderRadius: '20%',
                                            border: '1px solid rgb(0, 0, 0, 0.5)',
                                            cursor: 'pointer',
                                            width: '20px',
                                            height: '20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        onClick={() => handleCheck(item.id, true)}
                                    >
                                        {item.checked ? '✓' : '✗'}
                                    </button>
                                        <a className="dropdown-item">{item.label}</a>
                                    </div>
                                </li>
                            ))}
                            </ul>
                        )}
                    </>
                    )}
                    </li>
                ))}
                </ul>
            </div>
            <button
                style={{ margin: '0', width: '5rem', height: '2rem', background: 'blue', borderRadius: '6px', border: '1px solid rgb(0, 0, 0, 0.3)' }}
                onClick={onMenuOpciones}
            >

            </button>
        </div>
    </>
  )
};