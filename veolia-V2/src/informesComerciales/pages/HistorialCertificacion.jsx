import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { useAnnoSelector, useMesSelector } from "../../store/storeSelectors";
import { getHistorialCertificacion } from "../service/historialCertificacion";
import { TablaInformesGerenciales } from "../../informesGerenciales/components/TablaInformesGerenciales";
import { columnsHistCertificacion, formatoHistCertificacion } from "../components/data";
import { TituloVista } from "../../ui/components/TituloVista";
import { useFuncionalidadHistCertif } from "../hook/useFuncionalidadHistCertif";

 export const HistorialCertificacion = () => {
    const anno = useAnnoSelector((state) => state.anno);
    const mes = useMesSelector((state) => state.mes);
    const { onSignacionData } = useFuncionalidadHistCertif();
    const [dataHisCertificacion, setDataHisCertificacion] = useState({
        formato: {},
        datos: []
    });

    const data = {
        anno: anno,
        mes: mes
    };

    const onHistorialCertificacion = async () => {
        try {
            const response = await getHistorialCertificacion(data);       
            const formattedData = onSignacionData(response);                 
            setDataHisCertificacion({
                ...dataHisCertificacion,
                formato: formatoHistCertificacion,
                datos: formattedData
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (anno !== 0 && mes !== 0) {
            onHistorialCertificacion();
        }
    },[anno, mes]);

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Historial de Certificación" />
            </div>
            <div className="selector">
                <Selectores selectorFecha={true} />
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent">
            <div className="width-Component">
                <div className='panel-tablas'>
                    <TablaInformesGerenciales datos={dataHisCertificacion} colums={columnsHistCertificacion} />
                </div>
            </div>
        </div>
    </>
  )
};