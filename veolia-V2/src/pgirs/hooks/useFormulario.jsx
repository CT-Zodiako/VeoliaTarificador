import { useState } from "react";
import { data } from "../../ui/components/datas";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";

 export const UseFormulario = () => {
    const apss = useApsSelector(state => state.aps);
    const annos = useAnnoSelector((state) => state.anno);
    const mess = useMesSelector((state) => state.mes);
    const [formulario, setFormulario] = useState(data);

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