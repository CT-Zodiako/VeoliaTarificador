import { useEffect } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { GraficoClus, GraficoComportamientoClus, TablaCostos } from "../components";
import { useCostoGraficas } from "../hook/useCostoGraficas";
import { useSelectStore } from "../../hooks/useSelectStore";
import '../styles/costo.css';

 export const Costo = () => {
    const { anno, mes, aps, data } = useSelectStore();

    const { dataClus, tablaClus, compClus, onClusGrafica, onTablaClus, onCompClus } = useCostoGraficas(data);

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
        <div className="d-flex justify-content-center">
            <div className="d-flex align-items-center justify-content-center flex-column width-Component">
                <div className="panel" style={{ marginTop: '2rem', width: '100%' }}>
                    <h3>Costo de Limpieza Urbana</h3>
                    <div className="d-flex flex-wrap justify-content-evenly">
                        <div className="estruct-items" style={{ width: '22rem', marginTop: '1rem' }}>
                            <GraficoClus dataClus={dataClus}/>
                        </div>
                        <div className="estruct-items" style={{ width: '35rem', marginTop: '1rem' }}>
                            <TablaCostos data={tablaClus}/>
                        </div>
                    </div>
                </div>
                <div className="mt-4 panel" style={{ width: '100%' }}>
                    <h3>Comportamiento CLUS</h3>
                    <div className="w-100 mt-4">
                        <GraficoComportamientoClus dataCompClus={compClus}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};