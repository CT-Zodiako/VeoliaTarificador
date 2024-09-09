import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { TablaComponentes } from "../../ui/components/TablaComponentes";
import { useApsSelector, useProyeccionesSelector } from "../../store/storeSelectors";
import { getLineasTiempo } from "../services/lineasTiempo";

 export const LineasTiempo = () => {
    const aps = useApsSelector(state => state.aps);
    const proy = useProyeccionesSelector(state => state.proy);

    const[dataLineasTimp, setDataLineasTimp] = useState([]);

    // const data = {
    //     APS
    // }

    const onTablaLineasTimp = async() => {
        try{
            const lineasTimp = await getLineasTiempo();
            setDataLineasTimp(lineasTimp);
        } catch {
            console.error('error en data lineas tiempo');
        }
    }

    useEffect(() =>{
        onTablaLineasTimp();
    },[])

    return(
    <>
        <div>
            <div className="headerComponent">
                <div className="tituloComponent"/>
                <div className="selector">
                    <Selectores selectorFecha={true} selectorAps={true} selectDrescripcion={true} selectHorizonte={true}/>
                </div>
            </div>
            <div className="bodyComponent" >
                {/* <TablaComponentes /> */}
            </div>
        </div>
    </>
  )
};
