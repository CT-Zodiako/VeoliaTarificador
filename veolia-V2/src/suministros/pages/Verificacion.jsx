import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { columsEmpresa, columsAps, columsRelleno } from "../components/data";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { getVerificacionAPS, getVerificacionEmpresa, getVerificacinRelleno } from "../service/verificacionService";
import { TablaComponentes } from "../../ui/components/TablaComponentes";

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
        <div className="headerComponent">
            <div className="tituloComponent"/>
            <div className="selector">
                <Selectores selectorAps={true} selectorFecha={true} />
            </div>
        </div>
        
        <div className="bodyComponent">
            <div className="componenTable">
                <div className="acctionTable">
                    <h3>Variables de ejecución corriente (MM/AA)</h3>
                </div>
                <div className="table-responsive tableVerificacion" style={{ maxHeight: '34rem', overflowY: 'auto' }}>
                    <div className="tableVerificacion">
                        <TablaComponentes 
                            colums={columsEmpresa}
                            data={verificacionEmpresa}
                        />
                    </div>
                    <div className="tableVerificacion">
                        <TablaComponentes 
                            colums={columsAps}
                            data={verificacionAPS}
                        />
                    </div>
                    <div className="tableVerificacion">
                        <TablaComponentes 
                            colums={columsRelleno}
                            data={verificacionRelleno}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};