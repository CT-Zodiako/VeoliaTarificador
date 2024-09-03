import { useEffect, useState } from "react";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { getQaChart, getQrtChart, getTafnaChart, getLblChart, getTrnaChart, getUsuariosChart, getTarifasChart, getCostos, getCostoJSON } from "../service/calculoGraficasService";
import { GraficoQrt } from "../components/GraficoQrt";
import { GraficoQa } from "../components/GraficoQa";
import { GraficoTafna } from "../components/GraficoTafna";
import { GraficoLbl } from "../components/GraficoLbl";
import { GraficoTrna } from "../components/GraficoTrna";
import { GraficoUsuarios } from "../components/GraficoUsuarios";
import { GraficoTarifas } from "../components/GraficoTarifas";
import { CuadriculaCosto } from "../components/CuadriculaCosto";

 export const Calculo = () => {
    const mess = useMesSelector(state => state.mes);
    const anno = useAnnoSelector(state => state.anno);
    const aps = useApsSelector(state => state.aps);
    const[costo, setCosto] = useState([]);
    const[costoJson, setCostoJson] = useState([]);
    console.log('mi costoJson: ', costoJson);
    
    const[dataQrt, setDataQrt] = useState([]);
    const[dataQa, setDataQa] = useState([]);
    const[dataTafna, setDataTafna] = useState([]);
    const[dataLBL, setDataLBL] = useState([]);
    const[dataTrna, setDataTrna] = useState([]);
    const[dataUsuarios, setDataUsuarios] = useState([]);
    const[optionUsuarios, setOptionUsuarios] = useState([]);
    const[dataTarifas, setDataTarifas]=useState([]);
    
    const data = {
        APSA_ID: aps,
        ANNO: anno,
        MES: mess,
    }

    const onCosto = async() => {
        try{
            const costos = await getCostos(data);
            setCosto(costos);

            const Json = await getCostoJSON(data);
            setCostoJson(Json);
            
        } catch {         
            console.error('error en data calculo');
        }
    }

    const onDataGraficas = async() => {
        try{
            const Qrt = await getQrtChart(data);
            setDataQrt(Qrt);

            const Qa = await getQaChart(data);
            setDataQa(Qa);

            const Tafna = await getTafnaChart(data);
            setDataTafna(Tafna);

            const Lbl = await getLblChart(data);
            setDataLBL(Lbl);

            const Trna = await getTrnaChart(data);
            setDataTrna(Trna);

            const Usuarios = await getUsuariosChart(data);
            if (Usuarios != null) {
                setDataUsuarios(Usuarios.chart);
                setOptionUsuarios(response.options);
              } else {
                setDataUsuarios(null);
                setOptionUsuarios(null);
            }

            const Tarifas = await getTarifasChart(data);
            setDataTarifas(Tarifas);

        } catch {
            console.error('error en data calculo');
        }
    }

    useEffect(() => {
        if(anno && mess && aps) {
            onDataGraficas();
            onCosto();
        }
    }, [anno, mess, aps])

    return(
    <>
    <div>
        <div>
            {
                costo &&
                <CuadriculaCosto costoResult={costo}/> 
            }
        </div>
        <div style={{ marginTop: '1.5rem' }}>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 1fr)', 
                gap: '16px', 
                justifyItems: 'center' 
             }}>
                <div>
                    <GraficoQrt dataQrt={dataQrt}/>
                </div>
                <div>
                    <GraficoQa dataQa={dataQa}/>
                </div>
                <div>
                    <GraficoTafna dataTafna={dataTafna}/>
                </div>
                <div>
                    <GraficoLbl dataLBL={dataLBL}/>
                </div>
                <div>
                    <GraficoTrna dataTrna={dataTrna}/>
                </div>
                <div>
                    <GraficoUsuarios dataUsuarios={dataUsuarios} options={optionUsuarios}/>
                </div>
                <div>
                    <GraficoTarifas dataTarifas={dataTarifas}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};