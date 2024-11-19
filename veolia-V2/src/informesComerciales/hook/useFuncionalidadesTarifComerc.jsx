import { useMemo } from "react";

export const useFuncionalidadesTarifComerc = (
    setDataTarifaPlena, setDataTarifaSubCon, dataTarifaPlena, 
    dataTarifaSubCon, formatoTarifasPlena, formatoTarifasSC,
    columnsTarifasPlena, columnsTarifasSC
) => {
    const asignacionData = (data) => {
        setDataTarifaPlena({
            ...dataTarifaPlena,
            formato: formatoTarifasPlena,
            datos: data
        });
        setDataTarifaSubCon({
            ...dataTarifaSubCon,
            formato: formatoTarifasSC,
            datos: data
        });
    };

    const titulosTabs = useMemo(() => [
        { titulo: 'Plena', datos: dataTarifaPlena, encabezado: columnsTarifasPlena },
        { titulo: 'Sub & Con', datos: dataTarifaSubCon, encabezado: columnsTarifasSC },
    ], [dataTarifaPlena, dataTarifaSubCon]);

    return { asignacionData, titulosTabs };
};