import { useEffect, useState } from "react";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { Selectores } from "../../ui/components/Selectores";
import { ValorProductividad } from "../components/ajusteProductividad/ValorProductividad";
import { getAjuestesProductividad, patchAjuestesProductividad, postAjuestesProductividad } from "../service/ajustesProductividadService";

 export const AjustesProductividad = () => {
    const aps = useApsSelector(state => state.aps);
    const anno = useAnnoSelector((state) => state.anno);
    const mes = useMesSelector((state) => state.mes);
    const [datos, setDatos] = useState([]);
    const [ajusteProductividad, setAjusteProductividad] = useState({
        APSA_ID: 0,
        PROD_ANNO: 0,
        PROD_MES: 0,
        PROD_VALOR: 0
    });    
    const [estadoAjuste, setEstadoAjuste] = useState(false);
    
    const data = {
        APSA_ID: aps,
        PROD_ANNO: anno,
        PROD_MES: mes
    }

    const fetchData = async () => {
        try {
            const response = await getAjuestesProductividad(data);
            setDatos(response);
            if (response.length > 0) {
                setEstadoAjuste(true)
                setAjusteProductividad(prevState => ({
                    ...prevState,
                    APSA_ID: aps,
                    PROD_ANNO: anno,
                    PROD_MES: mes,
                    PROD_VALOR: response[0].PROD_VALOR
                }));
            } else {
                setEstadoAjuste(false)
                setAjusteProductividad(prevState => ({
                    ...prevState,
                    APSA_ID: aps,
                    PROD_ANNO: anno,
                    PROD_MES: mes,
                    PROD_VALOR: 0
                }));
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    const onServicioAjustes = async (data) => {
        try {
            estadoAjuste === true ?
                await patchAjuestesProductividad(data)
                : await postAjuestesProductividad(data);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    },[aps, anno, mes]);

    return(
    <>
        <Selectores selectorAps={true} selectorFecha={true} />
        <ValorProductividad 
            datos={datos}
            aps={aps}
            ajusteProductividad={ajusteProductividad}
            onServicioAjustes={onServicioAjustes}
            fetchData={fetchData}
        />
    </>
  )
};