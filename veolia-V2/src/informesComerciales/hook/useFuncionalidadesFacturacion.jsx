import { useMemo } from "react";

export const useFuncionalidadesFacturacion = (
    dataFacturacion, dataDetFac, dataDetFacClus, dataDetFacDinc, 
    columnsFacturacion, columnsDetFac, columnsDetFacClus, columnsDetFacDINC
) => {
    const titulosTabs = useMemo(() => [
        { titulo: 'Facturacion', datos: dataFacturacion, encabezado: columnsFacturacion },
        { titulo: 'Det Facturacion', datos: dataDetFac, encabezado: columnsDetFac},
        { titulo: 'Det Facturacion CLUS', datos: dataDetFacClus, encabezado: columnsDetFacClus },
        { titulo: 'Det Facturacion DINC', datos: dataDetFacDinc, encabezado: columnsDetFacDINC }
    ], [dataFacturacion, dataDetFac, dataDetFacClus, dataDetFacDinc]);

    return { titulosTabs  };
};