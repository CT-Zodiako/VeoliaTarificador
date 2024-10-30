import { useState } from "react";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../../store/storeSelectors";
import { postInfoTerceros } from "../../service/cargueMensualService";

export const InfoTerceros = () => {
    const aps = useApsSelector(state => state.aps);
    const anno = useAnnoSelector((state) => state.anno);
    const mes = useMesSelector((state) => state.mes);

    const [infoTerceros, setInfoTerceros] = useState({
        cdfter: '',
        ctlter: '',
        incenter: ''
    })

    const data = {
        aps : aps,
        anno: anno,
        mes: mes,
        cdfter: Number(infoTerceros.cdfter),
        ctlter: Number(infoTerceros.ctlter),
        incenter: Number(infoTerceros.incenter)
    }

    const onFormulario = (event) => {
        const { name, value } = event.target;
        setInfoTerceros({
            ...infoTerceros,
            [name]: value
        })
    }

    const onGuardarTerceros = async() => {
        try {
            await postInfoTerceros(data);
            setInfoTerceros({
                cdfter: '',
                ctlter: '',
                incenter: ''
            })
        } catch (error) {
            console.error(error);
        }
    }

    return(
    <>
     <div className="componenTable inf-terceros">
        <div className="inf-terceros-container">
            <div style={{ width: '100%' }}>
                <h3>Cargue de Terceros</h3>
            </div>
            <div className="form-container">
                <div>
                    <input 
                        type="number" 
                        name="cdfter"
                        value={infoTerceros.cdfter}
                        placeholder='CDF'
                        onChange={onFormulario}
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        name="ctlter"
                        value={infoTerceros.ctlter}
                        placeholder='CTL'
                        onChange={onFormulario}
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        name="incenter"
                        value={infoTerceros.incenter}
                        placeholder='Incen. CDF'
                        onChange={onFormulario}
                    />
                </div>
                <button
                    className="btn btn-primary btn-md"
                    onClick={onGuardarTerceros}
                >
                    Guardar
                </button>
            </div>
        </div>
     </div>
    </>
  )
};