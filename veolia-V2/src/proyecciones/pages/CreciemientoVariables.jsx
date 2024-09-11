import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { TablaComponentes } from "../../ui/components/TablaComponentes";
import { getCrecimientoVarbl } from "../services/crecimientoVariables";

 export const CreciemientoVariables = () => {

    const [dataCrecimientoVarbl, setDataCrecimientoVarbl] = useState([]);

    const onTablaCrecimiento = async() => {
        try{
            const variables = await getCrecimientoVarbl();
            setDataCrecimientoVarbl(variables);
        } catch {
            console.error('error en data detalle reversiones');
        }
    }

    useEffect(() =>{
        onTablaCrecimiento();
    }, []);

    return(
    <>
        <div>
            <div className="headerComponent">
                <div className="tituloComponent"/>
                <div className="selector">
                    <Selectores selectorAps={true} selectorProy={true} selectDrescripcion={true}/>
                </div>
            </div>
            <div className="bodyComponent" >
                {/* <TablaComponentes colums={columnsSubContri} data={dataSubCon}/> */}
            </div>
        </div>
    </>
  )
};