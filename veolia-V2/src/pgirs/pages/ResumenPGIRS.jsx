import { useEffect, useState } from "react";
import { TablaInformesGerenciales } from "../../informesGerenciales/components/TablaInformesGerenciales";
import { useApsSelector } from "../../store/storeSelectors";
import { Selectores } from "../../ui/components/Selectores";
import { TituloVista } from "../../ui/components/TituloVista";
import { columnsResumenPgri, formatoResumenPgri } from "../components/data";
import { getResumenPgirs } from "../services/resumenPgirsService";

 export const ResumenPGIRS = () => {
  const aps = useApsSelector(state => state.aps);
    const [datos, setDatos] = useState({
      formato:{},
      datos:[]
    });

    const data = {
      APSA_ID : aps
    };

    const fetchData = async () => {
        if (!aps) return;            
        const response = await getResumenPgirs(data);
        setDatos({
          ...datos,
          formato: formatoResumenPgri,
          datos: response
        });
    };
    
    useEffect(() => {
        fetchData();
    }, [aps]);

  return(
    <>
        <div className="headerComponent">
          <div className="selector">
              <TituloVista titulo="Resumen Variables PGIRS" />
          </div>
          <div className="selector">
            <Selectores selectorAps={true} />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent">
            <div className="width-Component">
              <div className="panel">
                <TablaInformesGerenciales datos={datos} colums={columnsResumenPgri}/>
              </div>
            </div>
        </div>
    </>
  )
};