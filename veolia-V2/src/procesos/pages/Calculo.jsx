import { useEffect, useMemo, useState } from "react";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
// import { getQaChart, getQrtChart, getTafnaChart, getLblChart, getTrnaChart, getUsuariosChart, getTarifasChart } from "../service/calculoGraficasService";
// import { 
//     GraficoQrt, GraficoQa, GraficoTafna, GraficoLbl, GraficoTrna, 
//     GraficoUsuarios, GraficoTarifas, CuadriculaCosto, TablaCostos
// } from "../components";
import { getCostoJSON, getCostos } from "../service/costosService";
import { Selectores } from "../../ui/components/Selectores";
// import '../styles/calculo.css';
import { useServiciosGraficas } from "../hook/useServiciosGraficas";
import { GraficasCalculo } from "../components/GraficasCalculo";

 export const Calculo = () => {
    const mess = useMesSelector(state => state.mes);
    const anno = useAnnoSelector(state => state.anno);
    const aps = useApsSelector(state => state.aps);

    const[costo, setCosto] = useState([]);
    const[costoJson, setCostoJson] = useState([]);
    const[periodoCosto, setPeriodoCosto] = useState([]);

    const { qrtData, qaData, tafnaData, lblData, 
        trnaData, usuariosData, tarifasData } = useServiciosGraficas();
    
    const data = useMemo(() => ({
        APSA_ID: aps,
        ANNO: anno,
        MES: mess,
    }), [aps, anno, mess]);

    const onCosto = async() => {
        try{
            const costos = await getCostos(data);
            setCosto(costos);

            const Json = await getCostoJSON(data);
            setCostoJson(Json[0].JSON_DOCUMENT.dataset);
            setPeriodoCosto(Json[0].JSON_DOCUMENT.semestre);
            
        } catch {         
            console.error('error en data costo');
        }
    };

    useEffect(() => {
        if(anno && mess && aps) {
            // onDataGraficas();
            qrtData();
            qaData();
            tafnaData();
            lblData();
            trnaData();
            usuariosData();
            tarifasData();
            onCosto();
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
        <GraficasCalculo costo={costo} costoJson={costoJson} periodoCosto={periodoCosto} />
    </>
  )
};