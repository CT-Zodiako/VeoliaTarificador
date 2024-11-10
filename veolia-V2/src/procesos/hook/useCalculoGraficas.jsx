import { useState } from "react";
import { getQaChart, getQrtChart, getTafnaChart, getLblChart, getTrnaChart, getUsuariosChart, getTarifasChart } from "../service/calculoGraficasService";
import { getCostoJSON, getCostos } from "../service/costosService";

export const useCalculoGraficas = (data = null) => {
    const[costo, setCosto] = useState([]);
    const[costoJson, setCostoJson] = useState([]);
    const[periodoCosto, setPeriodoCosto] = useState([]);
    const[dataQrt, setDataQrt] = useState([]);
    const[dataQa, setDataQa] = useState([]);
    const[dataTafna, setDataTafna] = useState([]);
    const[dataLBL, setDataLBL] = useState([]);
    const[dataTrna, setDataTrna] = useState([]);
    const[dataUsuarios, setDataUsuarios] = useState([]);
    const[optionUsuarios, setOptionUsuarios] = useState([]);
    const[dataTarifas, setDataTarifas]=useState([]);

    const onCosto = async() => {
        try{
            const costos = await getCostos(data);
            setCosto(costos);
        } catch {         
            console.error('error en data costo');
        }
    };

    const onJsonCosto = async() => {
        try{
            const Json = await getCostoJSON(data);
            setCostoJson(Json[0].JSON_DOCUMENT.dataset);
            setPeriodoCosto(Json[0].JSON_DOCUMENT.semestre);
        } catch {
            console.error('error en data json costo');
        }
    };

    const qrtData = async() => {
        try{
            const Qrt = await getQrtChart(data);
            setDataQrt(Qrt);
        } catch {
            console.error('error en data qrt');
        }
    };

    const qaData = async() => {
        try{
            const Qa = await getQaChart(data);
            setDataQa(Qa);
        } catch {
            console.error('error en data qa');
        }
    };

    const tafnaData = async() => {
        try{
            const Tafna = await getTafnaChart(data);
            setDataTafna(Tafna);
        } catch {
            console.error('error en data tafna');
        }
    };

    const lblData = async() => {
        try{
            const Lbl = await getLblChart(data);
            setDataLBL(Lbl);
        } catch {
            console.error('error en data lbl');
        }
    };

    const trnaData = async() => {
        try{
            const Trna = await getTrnaChart(data);
            setDataTrna(Trna);
        } catch {
            console.error('error en data trna');
        }
    };

    const usuariosData = async() => {
        try{
            const Usuarios = await getUsuariosChart(data);
            if (Usuarios != null) {
                setDataUsuarios(Usuarios.chart);
                setOptionUsuarios(response.options);
            } else {
                setDataUsuarios(null);
                setOptionUsuarios(null);
            }
        } catch {
            console.error('error en data usuarios');
        }
    };

    const tarifasData = async() => {
        try{
            const Tarifas = await getTarifasChart(data);
            setDataTarifas(Tarifas);
        } catch {
            console.error('error en data tarifas');
        }
    };

    return{ costo, costoJson, periodoCosto, dataQrt, dataQa, dataTafna, dataLBL, 
        dataTrna, dataUsuarios, optionUsuarios, dataTarifas, onCosto, onJsonCosto, 
        qrtData, qaData, tafnaData, lblData, trnaData, usuariosData, tarifasData 
    };
};