import { useState } from "react";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";

 export const UseFormulario = () => {
    const apss = useApsSelector(state => state.aps);
    const annos = useAnnoSelector((state) => state.anno);
    const mess = useMesSelector((state) => state.mes);
    const [formulario, setFormulario] = useState({
        data: [
            {
                PGRIVARIABLE: 11,
                valor: '',
                frecuencia: '',
            },
            {
                PGRIVARIABLE: 21,
                valor: '',
                frecuencia: '',
            },
            {
                PGRIVARIABLE: 22,
                valor: '',
                frecuencia: '',
            },
            {
                PGRIVARIABLE: 23,
                valor: '',
                frecuencia: '',
            },
            {
                PGRIVARIABLE: 24,
                valor: '',
                frecuencia: '',
            },
            {
                PGRIVARIABLE: 25,
                valor: '',
                frecuencia: '',
            },
            {
                PGRIVARIABLE: 26,
                valor: '',
                frecuencia: '',
            },
        ],
        APSAID: '',
        PGRIANNO: '',
        PGRIMES: '',
    });

    const onFormChange = (index, event) => {
        const newFormulario = [ ...formulario.data ];
        newFormulario[index].valor = event.target.value;
        setFormulario(prevFormulario => ({
            ...prevFormulario,
            data: newFormulario,
        }));
    }

    const onFormFrecuencia = (index, event) => {
        const newFormulario = [ ...formulario.data ];
        newFormulario[index].frecuencia = event.target.value;
        setFormulario(prevFormulario => ({
            ...prevFormulario,
            data: newFormulario,
        }));
    }

    const onDatas = () => {
        setFormulario({
            ...formulario,
            APSAID: apss,
            PGRIANNO: annos,
            PGRIMES: mess
        });
    }

    return { formulario, onFormChange, onFormFrecuencia, onDatas };
};