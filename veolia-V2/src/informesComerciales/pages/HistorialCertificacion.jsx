import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { useAnnoSelector, useMesSelector } from "../../store/storeSelectors";
import { getHistorialCertificacion } from "../service/historialCertificacion";
import { TablaInformesGerenciales } from "../../informesGerenciales/components/TablaInformesGerenciales";
import { columnsHistCertificacion, formatoHistCertificacion } from "../components/data";

 export const HistorialCertificacion = () => {
    const anno = useAnnoSelector((state) => state.anno);
    const mes = useMesSelector((state) => state.mes);

    const [dataHisCertificacion, setDataHisCertificacion] = useState({
        formato: {},
        datos: []
    });
    
    const data = {
        anno: anno,
        mes: mes
    };

    const formatearFecha = (fecha) => {
        if (fecha) {
            const parts = fecha.split("T")[0].split("-");
            if (parts.length === 3) {
                const año = parts[0];
                const mes = parts[1];
                const dia = parts[2];
                return `${año}/${mes}/${dia}`;
            }
        } 
        if (fecha === null) return 'N/A';
    }

    const onHistorialCertificacion = async () => {
        try {
            const response = await getHistorialCertificacion(data);                        
            const formattedData = response.map(item => ({
                ...item,
                FECHCERTIFICA: formatearFecha(item.FECHCERTIFICA),
                FECHINTEGRA: formatearFecha(item.FECHINTEGRA)
            }));
            setDataHisCertificacion({
                ...dataHisCertificacion,
                formato: formatoHistCertificacion,
                datos: formattedData
            });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (anno !== 0 && mes !== 0) {
            onHistorialCertificacion();
        }
    },[anno, mes]);

    return(
    <>
        <div>
        <div>
          <div className="tituloComponent">
            <h3>Historial de Certificacion</h3>
          </div>
          <div className="selector">
            <Selectores selectorFecha={true} />
          </div>
        </div>
        <div className="bodyComponent">
            <TablaInformesGerenciales datos={dataHisCertificacion} colums={columnsHistCertificacion} />
        </div>
      </div>
    </>
  )
};