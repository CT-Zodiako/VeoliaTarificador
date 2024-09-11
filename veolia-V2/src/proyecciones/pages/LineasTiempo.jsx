import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { useApsSelector, useProyeccionesSelector } from "../../store/storeSelectors";
import { getLineasTiempo, postLineasTiempo } from "../services/lineasTiempo";
import { TablaEditarLinTiemp } from "../components/TablaEditarLinTiemp";

 export const LineasTiempo = () => {
    const aps = useApsSelector(state => state.aps);
    const proy = useProyeccionesSelector(state => state.proy);

    const[dataLineasTimp, setDataLineasTimp] = useState([]);
    
    const data = {
        PROYID: proy,
    }

    const onTablaLineasTimp = async() => {
        try{
            const lineasTimp = await getLineasTiempo(data);
            setDataLineasTimp(lineasTimp);
        } catch {
            console.error('error en data lineas tiempo');
        }
    }

    const onEditarLineaTiempo = async(data) => {
        try{
            await postLineasTiempo(data);
        } catch {
            console.error('error en editar linea tiempo');
        }
    }

    useEffect(() => {
        if (aps && proy) {
            onTablaLineasTimp();
        }
    },[aps, proy]);

    return(
    <>
        <div>
            <div className="headerComponent">
                <div className="tituloComponent"/>
                <div className="selector">
                    <Selectores selectorAps={true} selectorProy={true} selectDrescripcion={true} selectHorizonte={true}/>
                </div>
            </div>
            <div className="bodyComponent" >
                <TablaEditarLinTiemp data={dataLineasTimp} onEditarLineaTiempo={onEditarLineaTiempo} fetchData={onTablaLineasTimp}/>
                {/* <TablaComponentes colums={columnsLineasTimp} data={dataLineasTimp}/> */}
            </div>
        </div>
    </>
  )
};
