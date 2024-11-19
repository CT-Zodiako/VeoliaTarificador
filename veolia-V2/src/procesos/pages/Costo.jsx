import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { getClusJson, getCompClusChart, getCosClusChart } from "../service/costosService";
import { useSelectStore } from "../../hooks/useSelectStore";
import { AnalisisCosto } from "../components/costo/AnalisisCosto";
import '../styles/costo.css';

 export const Costo = () => {
    const { anno, mes, aps, data } = useSelectStore();
    const[dataClus, setDataClus] = useState([]);
    const[tablaClus, setTablaClus] = useState([]);
    const[compClus, setComportamientoClus] = useState([]);

    const onClusGrafica = async() => {
        try{
            const graficaClus = await getCosClusChart(data);
            setDataClus(graficaClus);
        } catch {
            console.error('error en data grafica clus');
        }
    };

    const onTablaClus = async() => {
        try{
            const tabla = await getClusJson(data);
            setTablaClus(tabla[0].JSON_DOCUMENT.dataset[0]);
        } catch {
            console.error('error en data tabla clus');
        }
    };

    const onCompClus = async() => {
        try{
            const comportamiento = await getCompClusChart(data);
            setComportamientoClus(comportamiento);
        } catch {
            console.error('error en data comportamiento clus');
        }
    };

    useEffect(()=>{
        if(anno && mes && aps) {
            onClusGrafica();
            onTablaClus();
            onCompClus();
        }
    }, [anno, mes, aps])

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <Selectores selectorFecha={true} selectorAps={true}/>
            </div>
        </div>
        <AnalisisCosto dataClus={dataClus} tablaClus={tablaClus} compClus={compClus}/>
    </>
  )
};