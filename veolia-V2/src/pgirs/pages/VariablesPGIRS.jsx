import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../store/storeSelectors";
import { TablaVariablesPgirs } from "../components/variablesPgirs/TablaVariablesPgirs";
import { getVariablesPgirs, updateVariablesPgirs } from "../services/variablesPgirsService";
import '../../index.css'

 export const VariablesPGIRS = () => {
  const aps = useApsSelector(state => state.aps);
  const anno = useAnnoSelector((state) => state.anno);
  const mes = useMesSelector((state) => state.mes);

  const [datos, setDatos] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await getVariablesPgirs(aps, anno, mes);
      setDatos(response);
    } catch (error) {
      console.error(error);
    }
  }

  const onActualizar = async(variableEditar) => {
    try {
      await updateVariablesPgirs(variableEditar);
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
      <div className="headerComponent">
        <div className="tituloComponent"/>
        <div className="selector">
          <Selectores selectorAps={true} selectorFecha={true} />
        </div>
      </div>
      <div className="bodyComponent">
        <TablaVariablesPgirs
            aps={aps}
            anno={anno}
            mes={mes}
            datos={datos}
            fetchData={fetchData}
            onActualizar={onActualizar}
        />
      </div>
    </>
  )
};