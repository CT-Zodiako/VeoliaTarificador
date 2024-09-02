import { useEffect, useState } from "react";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { getQaChart, getQrtChart, getTafnaChart, getLblChart, getTrnaChart, getUsuariosChart, getTarifasChart } from "../service/calculoGraficasService";
import { GraficoQrt } from "../components/GraficoQrt";
import { GraficoQa } from "../components/GraficoQa";
import { GraficoTafna } from "../components/GraficoTafna";
import { GraficoLbl } from "../components/GraficoLbl";
import { GraficoTrna } from "../components/GraficoTrna";
import { GraficoUsuarios } from "../components/GraficoUsuarios";
import { GraficoTarifas } from "../components/GraficoTarifas";

 export const Calculo = () => {
    const mess = useMesSelector(state => state.mes);
    const anno = useAnnoSelector(state => state.anno);
    const aps = useApsSelector(state => state.aps);

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
        }
    }, [anno, mess, aps])

    return(
    <>
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
    </>
  )
};