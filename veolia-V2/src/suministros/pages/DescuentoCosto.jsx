import { useEffect, useState } from "react";
import { getDescuentoCosto, patchDescuentoCosto, postDescuentoCosto } from "../service/descuentoCostoServicio";
import { TablaDescuentoCosto } from "../components/descuentoCosto/TablaDescuentoCosto";
import { Selectores } from "../../ui/components/Selectores";
import { TituloVista } from "../../ui/components/TituloVista";
import { useSelectStore } from "../../hooks/useSelectStore";

 export const DescuentoCosto = () => {
    const { aps, anno, mes, requestDesCos } = useSelectStore();
    const [dataDescuento, setDataDescuento] = useState([]); 

    const fetchData = async () => {
        try {
            const dataCosto = await getDescuentoCosto(requestDesCos);
            setDataDescuento(dataCosto);
        }
        catch (error) {
            console.error(error);
        }
    };

    const onAgregarDescuentoCosto = async(agregar) => {
        try {
            await postDescuentoCosto(agregar);
            fetchData();
        } catch (error) {
            console.error(error);
        }
    }; 

    const onEditarDescuentoCosto = async(editar) => {
        try {
            await patchDescuentoCosto(editar);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [anno, mes, aps]);

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Descuento Costo" />
            </div>
            <div className="selector">
                <Selectores selectorAps={true} selectorFecha={true} />
            </div>
        </div>
        <TablaDescuentoCosto
            dataDescuento={dataDescuento}
            onAgregarDescuentoCosto={onAgregarDescuentoCosto}
            onEditarDescuentoCosto={onEditarDescuentoCosto}
            fetchData={fetchData}
            data={requestDesCos}
        />
    </>
  )
};