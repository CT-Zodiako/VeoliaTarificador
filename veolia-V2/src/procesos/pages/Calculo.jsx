import { useEffect } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { useCalculoGraficas } from "../hook/useCalculoGraficas";
import { GraficasCalculo } from "../components/GraficasCalculo";
import { useSelectStore } from "../../hooks/useSelectStore";
import { TituloVista } from "../../ui/components/TituloVista";

 export const Calculo = () => {
    const { anno, mess, aps, data } = useSelectStore();

    const { costo, costoJson, periodoCosto, dataQrt, dataQa, dataTafna, dataLBL, dataTrna, 
        dataUsuarios, optionUsuarios, dataTarifas, onCosto, onJsonCosto, qrtData, qaData, 
        tafnaData, lblData, trnaData, usuariosData, tarifasData } = useCalculoGraficas(data);

    useEffect(() => {
        if(anno && mess && aps) {
            onCosto();
            onJsonCosto();
            qrtData();
            qaData();
            tafnaData();
            lblData();
            trnaData();
            usuariosData();
            tarifasData();
        }
    }, [anno, mess, aps])

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <Selectores selectorFecha={true} selectorAps={true}/>
            </div>
        </div>
        <GraficasCalculo
            costo={costo} costoJson={costoJson} periodoCosto={periodoCosto}
            dataQrt={dataQrt} dataQa={dataQa} dataTafna={dataTafna} dataLBL={dataLBL} 
            dataTrna={dataTrna} dataUsuarios={dataUsuarios} optionUsuarios={optionUsuarios} 
            dataTarifas={dataTarifas}
        />
    </>
  )
};