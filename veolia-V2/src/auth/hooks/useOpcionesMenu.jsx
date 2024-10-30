export const useOpcionesMenu = (Menu) => {
    const opcionesUsuario = (response) => {
        let opciones = [];
        let restante = [];
        Menu.forEach((menu) => {
          let encontrado = false;      
          response.forEach((item) => {
            if (menu.id === item) {
              encontrado = true;
              if (menu.items) {
                const itemsConChecked = menu.items.map((i) => {
                  if (response.includes(i.id)) {
                    return { ...i, checked: true };
                  }
                  return { ...i, checked: false };
                });
                opciones.push({ ...menu, checked: true, items: itemsConChecked });
              } else {
                opciones.push({ ...menu, checked: true });
              }
            }
          });
          if (!encontrado) {
            const menuSinChecked = { ...menu, checked: false };
      
            if (menu.items) {
              menuSinChecked.items = menu.items.map((i) => ({ ...i, checked: false }));
            }
            restante.push(menuSinChecked);
          }
        });
        return { opciones, restante };
    };
    
    return {opcionesUsuario};
};