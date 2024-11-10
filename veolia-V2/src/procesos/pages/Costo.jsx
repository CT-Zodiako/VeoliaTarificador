import { useEffect } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { GraficoClus, GraficoComportamientoClus, TablaCostos } from "../components";
import { useCostoGraficas } from "../hook/useCostoGraficas";
import { useSelectStore } from "../../hooks/useSelectStore";
import '../styles/costo.css';

 export const Costo = () => {
    const { anno, mess, aps, data } = useSelectStore();

    const { dataClus, tablaClus, compClus, onClusGrafica, onTablaClus, onCompClus } = useCostoGraficas(data);

    useEffect(()=>{
        if(anno && mess && aps) {
            onClusGrafica();
            onTablaClus();
            onCompClus();
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
        <div className="d-flex align-items-center flex-column bodyComponent">
            <div className="panel" style={{ marginTop: '2rem' }}>
                <h3>Costo de Limpieza Urbana</h3>
                <div className="d-flex flex-wrap justify-content-evenly">
                    <div className="estruct-items" style={{ width: '22rem' }}>
                        <GraficoClus dataClus={dataClus}/>
                    </div>
                    <div className="estruct-items" style={{ width: '38rem' }}>
                        <TablaCostos data={tablaClus}/>
                    </div>
                </div>
            </div>
            <div className="mt-4 panel">
                <h3>Comportamiento CLUS</h3>
                <div className="w-95 mt-4">
                    <GraficoComportamientoClus dataCompClus={compClus}/>
                </div>
            </div>
        </div>
    </>
  )
};