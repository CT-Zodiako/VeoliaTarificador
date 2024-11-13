import { useState } from "react";
import { getResumenAprovechamiento, patchResumenAprovechamiento, postResumenAprovechamiento } from "../service/resumenAprovechamientoService";

export const useAprovechamientoConsultas = ( data = null, aps = null, anno = null, mes = null ) => {
    const [estadoData, setEstadoData] = useState(false);
    const [dataAprovechamiento, setDataAprovechamiento] = useState(
        {
            APSID: 0,
            APROANNO: 0,
            APROMES: 0,
            ACTIVAR: 0,
        }
    );  

    const onDataAprovechamiento = (data) => {
        if (data.length > 0) {
            setEstadoData(true);
            setDataAprovechamiento(prevState => ({
                ...prevState,
                APSID: aps,
                APROANNO: anno,
                APROMES: mes,
                ACTIVAR: data[0].APROACTIVAR,
            }));
        } else {
            setEstadoData(false);
            setDataAprovechamiento(prevState => ({
                ...prevState,
                APSID: aps,
                APROANNO: anno,
                APROMES: mes,
                ACTIVAR: 0,
            }));
        }
    };

    const fetchDataAndUpdateState = async () => {
        try {
            const response = await getResumenAprovechamiento(data);   
            onDataAprovechamiento(response);
        } catch (error) {
            console.error(error);
        }
    };

    const onAprovechamiento = (valor) => {
        valor === true ?
            setDataAprovechamiento(prevState => ({
                ...prevState,
                ACTIVAR: 1,
            }))
            : setDataAprovechamiento(prevState => ({
                ...prevState,
                ACTIVAR: 0,
            }));
    };

    const onResumenAprovechamiento = async () => {
        try {
            estadoData === true ? 
                await patchResumenAprovechamiento(dataAprovechamiento) 
                : postResumenAprovechamiento(dataAprovechamiento);
        } catch (error) {
            console.error(error);
        }
    };

    return { estadoData, dataAprovechamiento, fetchDataAndUpdateState, onAprovechamiento, onResumenAprovechamiento };
};