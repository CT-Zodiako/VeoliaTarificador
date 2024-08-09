import { useEffect, useState } from "react";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { getCostoPoda, patchCostoPoda } from "../service/costoPodaService";
import { Selectores } from "../../ui/components/Selectores";
import { TablaCostoPoda } from "../components/costoPoda/TablaCostoPoda";

 export const CostoPoda = () => {
    const aps = useApsSelector(state => state.aps);
    const anno = useAnnoSelector((state) => state.anno);
    const mes = useMesSelector((state) => state.mes);

    const [dataCostoPoda, setCostoPoda] = useState([]);

    const data = {
        APSA_ID: aps,
        CPTE_ANNO: anno,
        CPTE_MES: mes,
    }

    const fetchData = async() => {
        try {
            const response = await getCostoPoda(data);
            setCostoPoda(response);
        } catch (error) {
            console.error(error);
        }
    }

    const onEditarCostoPoda = async(data) => {
        try {
            await patchCostoPoda(data);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [aps, anno, mes])

    return(
    <>  
        <div className="headerComponent">
            <div className="tituloComponent"/>
            <div className="selector">
                <Selectores selectorAps={true} selectorFecha={true} />
            </div>
        </div>
        <div className="bodyComponent">
            <TablaCostoPoda 
                dataPoda={dataCostoPoda}
                aps={aps}
                anno={anno}
                mes={mes}
                onEditarCostoPoda={onEditarCostoPoda}
                fetchData={fetchData}
            />
        </div>
    </>
  )
};