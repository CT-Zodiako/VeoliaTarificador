import { useEffect, useState } from "react";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { Selectores } from "../../ui/components/Selectores";
import { GraficoClus } from "./GraficoClus";

 export const Costo = () => {
    const mess = useMesSelector(state => state.mes);
    const anno = useAnnoSelector(state => state.anno);
    const aps = useApsSelector(state => state.aps);

    const[dataClus, setGraficaClus] = useState([]);

    const onGraficaClus = async() => {
        try{
            // const graficaClus = await getGraficaClus(data);
            // setGraficaClus(graficaClus);
        } catch {
            console.error('error en data grafica clus');
        }
    }

    useEffect(()=>{
        // onGraficaClus();
    }, [])

    return(
    <>
        <div className="headerComponent">
            <div className="tituloComponent"/>
            <div className="selector">
                <Selectores selectorFecha={true} selectorAps={true}/>
            </div>
        </div>
        <div className="bodyComponent" >
            <GraficoClus dataClus={dataClus}/>
            <h2>grafica grande</h2>
            {/* <TablaComponentes colums={columnsDashBoardSUI} data={dataDashBoardSUI} /> */}
        </div>
    </>
  )
};