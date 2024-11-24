import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { CampoDescripcionReversion } from "../components/CampoDescripcionReversion";
import { postReversiones } from "../service/reversionService";
import { TituloVista } from "../../ui/components/TituloVista";
import { useSelectStore } from "../../hooks/useSelectStore";

 export const Reversion = () => {
    const { aps, anno, mes } = useSelectStore();
    const [descripcionReversion, setDescripcionReversion] = useState();
    
    const data = {
        APSA_ID: aps,
        ANNO: anno,
        MES: mes,
        VALOR: descripcionReversion
    };

    const onDescripcionReversion = (event) => {
        setDescripcionReversion(event.target.value);
    };

    const guardarReversion = async() => {
        try{
            await postReversiones(data);
        } catch {
            console.error('error al guardar reversion');
        }
    };

    useEffect(() => {
        console.log('data reversion: ', data);
    }, [anno, mes, aps, descripcionReversion])

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Reversiones" />
            </div>
            <div className="selector">
                <Selectores selectorFecha={true} selectorAps={true} />
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent">
            <div className="width-Component">
                <div className="panel">
                    <CampoDescripcionReversion onEstadoReversion={onDescripcionReversion} guardar={guardarReversion} textBoton='Reversar'/>
                </div>
            </div>
        </div>
    </>
  )
};