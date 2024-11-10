import { useState } from "react";
import { getClusJson, getCompClusChart, getCosClusChart } from "../service/costosService";

 export const useCostoGraficas = (data = null) => {
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

    return{ dataClus, tablaClus, compClus, onClusGrafica, onTablaClus, onCompClus };
};