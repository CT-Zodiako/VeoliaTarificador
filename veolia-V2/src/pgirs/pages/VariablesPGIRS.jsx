import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { useSelectStore } from "../../hooks/useSelectStore";
import { TablaVariablesPgirs } from "../components/variablesPgirs/TablaVariablesPgirs";
import { getVariablesPgirs, updateVariablesPgirs } from "../services/variablesPgirsService";
import '../../index.css'
import { TituloVista } from "../../ui/components/TituloVista";

 export const VariablesPGIRS = () => {
  const { aps, anno, mes } = useSelectStore();
  const [datos, setDatos] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await getVariablesPgirs(aps, anno, mes);
      setDatos(response);
    } catch (error) {
      console.error(error);
    }
  };

  const onActualizar = async(variableEditar) => {
    try {
      await updateVariablesPgirs(variableEditar);
    }
    catch (error) {
      console.error(error);
    } 
  };

  useEffect(() => {
    fetchData();
  },[aps, anno, mes]);

  return(
    <>
      <div className="headerComponent">
        <div className="selector">
            <TituloVista titulo="Variables PGIRS" />
        </div>
        <div className="selector">
          <Selectores selectorAps={true} selectorFecha={true} />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4 bodyComponent">
        <div className='width-Component'>
          <div className="panel">
            <TablaVariablesPgirs
                aps={aps}
                anno={anno}
                mes={mes}
                datos={datos}
                fetchData={fetchData}
                onActualizar={onActualizar}
            />
          </div>
        </div>
      </div>
    </>
  )
};