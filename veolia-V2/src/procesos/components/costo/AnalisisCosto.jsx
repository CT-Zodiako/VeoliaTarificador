import { GraficoClus, GraficoComportamientoClus } from "../costo";
import { TablaCostos } from "../";

 export const AnalisisCosto = ({ dataClus, tablaClus, compClus }) => {
    return(
    <>
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