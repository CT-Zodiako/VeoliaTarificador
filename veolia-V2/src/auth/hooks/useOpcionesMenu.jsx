export const useOpcionesMenu = (Menu, id) => {
  // console.log('menu encontrado: ', Menu);
  const opcionesUsuario = (response) => {
      let opciones = [];
      let restante = [];
      console.log('arreglo de ids: ', response);
      Menu.forEach((menu) => {
          if (menu.idSistema == id) {
              let encontrado = false;
              let hijosRestantes = [];
              response.forEach((item) => {
                  if (menu.id === item) {
                      encontrado = true;
                      if (menu.items) {
                          let itemsConChecked = [];
                          menu.items.forEach((i) => {
                              // console.log('item: ', i);
                              if (response.includes(i.id)) {
                                  itemsConChecked.push({ ...i, checked: true });
                              } else {
                                  console.log('item no encontrado: ', i);
                                  hijosRestantes.push({ ...i, checked: false });
                              }
                          });
                          opciones.push({ ...menu, checked: true, items: itemsConChecked });
                      } else {
                          opciones.push({ ...menu, checked: true });
                      }
                  }
              });
              if (encontrado && hijosRestantes.length > 0) {
                  restante.push({ ...menu, checked: false, items: hijosRestantes });
              }
              if (!encontrado) {
                  let menuSinChecked = { ...menu, checked: false };
                  if (menu.items) {
                      menuSinChecked.items = menu.items.map((i) => ({ ...i, checked: false }));
                  }
                  restante.push(menuSinChecked);
              }
          }
      });
      return { opciones, restante };
  };

  return { opcionesUsuario };
};
