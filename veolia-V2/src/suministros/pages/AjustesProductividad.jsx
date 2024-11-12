import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { ValorProductividad } from "../components/ajusteProductividad/ValorProductividad";
import { getAjuestesProductividad, patchAjuestesProductividad, postAjuestesProductividad } from "../service/ajustesProductividadService";
import { TituloVista } from "../../ui/components/TituloVista";
import { useSelectStore } from "../../hooks/useSelectStore";

 export const AjustesProductividad = () => {
    const { anno, mes, aps, dataAjusteProd } = useSelectStore();
    const [datos, setDatos] = useState([]);
    const [estadoAjuste, setEstadoAjuste] = useState(false);
    const [ajusteProductividad, setAjusteProductividad] = useState({
        APSA_ID: 0,
        PROD_ANNO: 0,
        PROD_MES: 0,
        PROD_VALOR: 0
    });    

    const fetchData = async () => {
        try {
            const response = await getAjuestesProductividad(dataAjusteProd);
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
    };

    const onServicioAjustes = async (data) => {
        try {
            estadoAjuste === true ?
                await patchAjuestesProductividad(data)
                : await postAjuestesProductividad(data);
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if(aps && anno && mes) {
            fetchData();
        };
    },[aps, anno, mes]);

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Ajuste Productividad" />
            </div>
            <div className="selector">
                <Selectores selectorAps={true} selectorFecha={true} />
            </div>
        </div>
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