import { useEffect, useState } from "react";
import { Menu } from "../components/datas";
import { getMenuService } from "./menuService";

export const serviceMenu = () => {
    const [menu, setMenu] = useState([]);
    
    const usr = localStorage.getItem("token");
    const tokenData = usr.split(".")[1];
    const decodedToken = JSON.parse(atob(tokenData));

    const data = {
      idSistema: Number(decodedToken.idSistema),
    };
    

    useEffect(() => {
        const fetchMenu = async () => {
            let initialMenu = Menu;
            if (usr) {
                const usrMenu = await getMenuService(data);
                if (usrMenu) {
                  let auxMenu = [];
                  initialMenu.forEach((element) => {
                    for (let x of usrMenu) {
                      if (x.MENU_ID === element.id) {
                        if (element.items) {
                          let hojas = [];
                          element.items.forEach((hoja) => {
                            for (let y of usrMenu) {
                              if (y.MENU_ID === hoja.id) {
                                hojas.push(hoja);
                                break;
                              }
                            }
                          });
                          element.items = hojas;
                          auxMenu.push(element);
                        } else {
                          auxMenu.push(element);
                        }
                        break;
                      }
                    }
                  });
                  initialMenu = auxMenu;
                }
            }
            setMenu(initialMenu);
        };
        fetchMenu();
    }, [usr]);

    return menu;
};