import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { columsEmpresa, columsAps, columsRelleno } from "../components/data";
import { TablaVerificacion } from "../components/verificacion/TablaVerificacion";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { getVerificacionAPS, getVerificacionEmpresa, getVerificacinRelleno } from "../service/verificacionService";

 export const Verificacion = () => {
    const aps = useApsSelector(state => state.aps);
    const anno = useAnnoSelector((state) => state.anno);
    const mes = useMesSelector((state) => state.mes);
    const [verificacionEmpresa, setVerificacionEmpresa] = useState([]);
    const [verificacionAPS, setVerificacionAPS] = useState([]);
    const [verificacionRelleno, setVerificacionRelleno] = useState([]);
        
    const data = {
        APSA_ID: aps,
        INED_ANNO: anno,
        INED_MES: mes,
    }

    const onDataVerificacion = async () => {
        try {
            const empresa = await getVerificacionEmpresa(data);
            setVerificacionEmpresa(empresa);

            const APS = await getVerificacionAPS(data);
            setVerificacionAPS(APS);

            const relleno = await getVerificacinRelleno(data);
            setVerificacionRelleno(relleno);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        onDataVerificacion();
    },[aps, anno, mes]);

  return(
    <>
        <Selectores selectorAps={true} selectorFecha={true} />
        <h3>Variables de ejecución corriente (MM/AA)</h3>
        <TablaVerificacion 
            colums={columsEmpresa}
            data={verificacionEmpresa}
        />
        <TablaVerificacion 
            colums={columsAps}
            data={verificacionAPS}
        />
        <TablaVerificacion 
            colums={columsRelleno}
            data={verificacionRelleno}
        />
    </>
  )
};