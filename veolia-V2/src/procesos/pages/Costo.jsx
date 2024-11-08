import { useEffect, useState } from "react";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { Selectores } from "../../ui/components/Selectores";
import { GraficoClus, GraficoComportamientoClus, TablaCostos } from "../components";
import { getClusJson, getCompClusChart, getCosClusChart } from "../service/costosService";
import '../styles/costo.css';

 export const Costo = () => {
    const mess = useMesSelector(state => state.mes);
    const anno = useAnnoSelector(state => state.anno);
    const aps = useApsSelector(state => state.aps);

    const[dataClus, setDataClus] = useState([]);
    const[tablaClus, setTablaClus] = useState([]);
    const[compClus, setComportamientoClus] = useState([]);
    
    const data = {
        APSA_ID: aps,
        ANNO: anno,
        MES: mess   
    }

    const onGraficaClus = async() => {
        try{
            const graficaClus = await getCosClusChart(data);
            setDataClus(graficaClus);

            const tabla = await getClusJson(data);
            setTablaClus(tabla[0].JSON_DOCUMENT.dataset[0]);

            const comportamiento = await getCompClusChart(data);
            setComportamientoClus(comportamiento);

        } catch {
            console.error('error en data grafica clus');
        }
    }

    useEffect(()=>{
        if(anno && mess && aps) {
            onGraficaClus();
        }
    }, [anno, mess, aps])

    return(
    <>
        <div className="headerComponent">
            <div className="tituloComponent"/>
            <div className="selector">
                <Selectores selectorFecha={true} selectorAps={true}/>
            </div>
        </div>
        <div className="bodyComponent" style={{ display: "flex", alignItems: 'center', flexDirection: 'column' }}>
            <div className="panel" style={{ marginTop: '2rem' }}>
                <h3>Costo de Limpieza Urbana</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    <div style={{ width: '22rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <GraficoClus dataClus={dataClus}/>
                    </div>
                    <div style={{ width: '38rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TablaCostos data={tablaClus}/>
                    </div>
                </div>
            </div>
            <div className="panel" style={{ marginTop: '2rem' }}>
                <h3>Comportamiento CLUS</h3>
                <div style={{ width: '95%', marginTop: '2rem' }}>
                    <GraficoComportamientoClus dataCompClus={compClus}/>
                </div>
            </div>
        </div>
    </>
  )
};