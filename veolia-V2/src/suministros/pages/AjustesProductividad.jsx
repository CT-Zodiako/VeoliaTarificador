import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { ValorProductividad } from "../components/ajusteProductividad/ValorProductividad";
import { getAjuestesProductividad, patchAjuestesProductividad, postAjuestesProductividad } from "../service/ajustesProductividadService";
import { TituloVista } from "../../ui/components/TituloVista";
import { useSelectStore } from "../../hooks/useSelectStore";
import { useFuncionalidadesAjustProd } from "../hooks/useFuncionalidadesAjustProd";

 export const AjustesProductividad = () => {
    const { anno, mes, aps, requestAjusteProd } = useSelectStore();
    const [datos, setDatos] = useState([]);
    const [estadoAjuste, setEstadoAjuste] = useState(false);
    const [ajusteProductividad, setAjusteProductividad] = useState({
        APSA_ID: 0,
        PROD_ANNO: 0,
        PROD_MES: 0,
        PROD_VALOR: 0
    });    
    const { estodAjusteProdut } = useFuncionalidadesAjustProd(setEstadoAjuste, setAjusteProductividad, aps, anno, mes);

    const fetchData = async () => {
        try {
            const response = await getAjuestesProductividad(requestAjusteProd);
            setDatos(response);
            estodAjusteProdut(response);
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
            datos={datos} aps={aps}
            ajusteProductividad={ajusteProductividad}
            onServicioAjustes={onServicioAjustes}
            fetchData={fetchData}
        />
    </>
  )
};