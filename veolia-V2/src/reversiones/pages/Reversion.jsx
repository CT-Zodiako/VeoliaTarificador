import { useEffect, useState } from "react";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { Selectores } from "../../ui/components/Selectores";
import { CampoDescripcionReversion } from "../components/CampoDescripcionReversion";
import { postReversiones } from "../service/reversionService";

 export const Reversion = () => {
    const mess = useMesSelector(state => state.mes);
    const anno = useAnnoSelector(state => state.anno);
    const aps = useApsSelector(state => state.aps);

    const [descripcionReversion, setDescripcionReversion] = useState();
    
    const data = {
        APSA_ID: aps,
        ANNO: anno,
        MES: mess,
        VALOR: descripcionReversion
    }

    const onDescripcionReversion = (event) => {
        setDescripcionReversion(event.target.value);
    }

    const guardarReversion = async() => {
        try{
            await postReversiones(data);
        } catch {
            console.error('error al guardar reversion');
        }
    }

    useEffect(() => {
        console.log('data reversion: ', data);
    }, [anno, mess, aps, descripcionReversion])

    return(
    <>
        <div className="headerComponent">
            <div className="tituloComponent"/>
            <div className="selector">
                <Selectores selectorFecha={true} selectorAps={true}/>
            </div>
        </div>
        <div className="bodyComponent" >
            <CampoDescripcionReversion onEstadoReversion={onDescripcionReversion} guardar={guardarReversion} textBoton='Reversar'/>
        </div>
    </>
  )
};