import { useEffect, useState } from "react";
import { getCostoPoda, patchCostoPoda } from "../service/costoPodaService";
import { Selectores } from "../../ui/components/Selectores";
import { TablaCostoPoda } from "../components/costoPoda/TablaCostoPoda";
import { TituloVista } from "../../ui/components/TituloVista";
import { useSelectStore } from "../../hooks/useSelectStore";

 export const CostoPoda = () => {
    const { aps, anno, mes, requestCosPoda } = useSelectStore();

    const [dataCostoPoda, setCostoPoda] = useState([]);

    const fetchData = async() => {
        try {
            const response = await getCostoPoda(requestCosPoda);
            setCostoPoda(response);
        } catch (error) {
            console.error(error);
        }
    };

    const onEditarCostoPoda = async(data) => {
        try {
            await patchCostoPoda(data);
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if(aps && anno && mes) {
            fetchData();
        };
    }, [aps, anno, mes]);

    return(
    <>  
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Costo Poda" />
            </div>
            <div className="selector">
                <Selectores selectorAps={true} selectorFecha={true} />
            </div>
        </div>
        <TablaCostoPoda 
            dataPoda={dataCostoPoda}
            aps={aps}
            anno={anno}
            mes={mes}
            onEditarCostoPoda={onEditarCostoPoda}
            fetchData={fetchData}
        />
    </>
  )
};