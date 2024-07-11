import { useEffect, useState } from "react";
import { getDescuentoCosto, patchDescuentoCosto, postDescuentoCosto } from "../service/descuentoCostoServicio";
import { TablaDescuentoCosto } from "../components/descuentoCosto/TablaDescuentoCosto";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { Selectores } from "../../ui/components/Selectores";

 export const DescuentoCosto = () => {
    const aps = useApsSelector(state => state.aps);
    const anno = useAnnoSelector((state) => state.anno);
    const mes = useMesSelector((state) => state.mes);
    const [dataDescuento, setDataDescuento] = useState([]); 
    
    const data = {
        APSA_ID: aps,
        DESC_ANNO: anno,
        DESC_MES: mes
    }

    const fetchData = async () => {
        try {
            const dataCosto = await getDescuentoCosto(data);
            setDataDescuento(dataCosto);
        }
        catch (error) {
            console.error(error);
        }
    }

    const onAgregarDescuentoCosto = async(agregar) => {
        try {
            await postDescuentoCosto(agregar);
            fetchData();
        } catch (error) {
            console.error(error);
        }
    }   

    const onEditarDescuentoCosto = async(editar) => {
        try {
            await patchDescuentoCosto(editar);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [anno, mes, aps]);

    return(
    <>
        <Selectores selectorAps={true} selectorFecha={true} />
        <TablaDescuentoCosto
            dataDescuento={dataDescuento}
            onAgregarDescuentoCosto={onAgregarDescuentoCosto}
            onEditarDescuentoCosto={onEditarDescuentoCosto}
            fetchData={fetchData}
            data={data}
        />
    </>
  )
};