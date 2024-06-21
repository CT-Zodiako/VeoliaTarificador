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
                LBL: '',
                selectorLBL: '',
            },
            {
                PGRIVARIABLE: 21,
                CESPED: '',
                selectorCESPED: '',
            },
            {
                PGRIVARIABLE: 22,
                PODA: '',
                selectorPODA: '',
            },
            {
                PGRIVARIABLE: 23,
                LAVADO: '',
                selectorLAVADO: '',
            },
            {
                PGRIVARIABLE: 24,
                PLAYAS: '',
                selectorPLAYAS: '',
            },
            {
                PGRIVARIABLE: 25,
                INSCESTAS: '',
                selectorINSCESTAS: '',
            },
            {
                PGRIVARIABLE: 26,
                MANCESTAS: '',
                selectorMANCESTAS: '',
            },
        ],
            aps: apss,
            anno: annos,
            mes: mess,
    });
    
    const onFormChange = (event) => {
        const { name, value } = event.target;
        if (Array.isArray(formulario.data)) {
            const cargarFormulario = formulario.data.map((item) => {
                if (item.hasOwnProperty(name)) {
                    return {
                        ...item,
                        [name]: value
                    };
                }
                return item;
            });
            setFormulario((prevFormulario) => ({
                ...prevFormulario,
                data: cargarFormulario
            }));
        } else {
            console.error("formulario.data no es un array o no está definido");
        }
    }

    const onDatas = () => {
        setFormulario({
            ...formulario,
            APSAID: apss,
            PGRIANNO: annos,
            PGRIMES: mess
        });
    }

    return { formulario, onFormChange, onDatas };
};