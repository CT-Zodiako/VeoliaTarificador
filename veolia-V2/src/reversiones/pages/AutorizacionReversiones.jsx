import { useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { CampoDescripcionReversion } from "../components/CampoDescripcionReversion";
import { postAutorizacionReversiones } from "../service/autorizacionReversionService";
import { useSelectStore } from "../../hooks/useSelectStore";
import { TituloVista } from "../../ui/components/TituloVista";

 export const AutorizacionReversiones = () => {
    const { aps, anno, mes } = useSelectStore();
    const [descripcionReversion, setDescripcionReversion] = useState();
    
    const data = {
        APSA_ID: aps,
        ANNO: anno,
        MES: mes,
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
    };

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Detalle de Reversiones" />
            </div>
            <div className="selector">
                <Selectores selectorFecha={true} selectorAps={true}/>
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent">
            <div className="width-Component">
                <div className="panel">
                    <CampoDescripcionReversion onEstadoReversion={onDescripcionReversion} guardar={guardarAutorizacionReversion} textBoton='Guardar'/>
                </div>
            </div>
        </div>
    </>
  )
};