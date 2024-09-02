import { useState } from "react";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { Selectores } from "../../ui/components/Selectores";
import { CampoDescripcionReversion } from "../components/CampoDescripcionReversion";
import { postAutorizacionReversiones } from "../service/autorizacionReversionService";

 export const AutorizacionReversiones = () => {
    const mess = useMesSelector(state => state.mes);
    const anno = useAnnoSelector(state => state.anno);
    const aps = useApsSelector(state => state.aps);

    const [descripcionReversion, setDescripcionReversion] = useState();
    
    const data = {
        APSA_ID: aps,
        ANNO: anno,
        MES: mess,
        DESCRIPCION: descripcionReversion
    }

    const onDescripcionReversion = (event) => {
        setDescripcionReversion(event.target.value);
    }

    const guardarAutorizacionReversion = async() => {
        try{
            await postAutorizacionReversiones(data);
        } catch {
            console.error('error al guardar autorizacion reversion');
        }
    }

    return(
    <>
        <div className="headerComponent">
            <div className="tituloComponent"/>
            <div className="selector">
                <Selectores selectorFecha={true} selectorAps={true}/>
            </div>
        </div>
        <div className="bodyComponent" >
            <CampoDescripcionReversion onEstadoReversion={onDescripcionReversion} guardar={guardarAutorizacionReversion} textBoton='Guardar'/>
        </div>
    </>
  )
};