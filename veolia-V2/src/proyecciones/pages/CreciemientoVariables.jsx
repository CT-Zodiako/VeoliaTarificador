import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { TablaComponentes } from "../../ui/components/TablaComponentes";
import { getCrecimientoVarbl } from "../services/crecimientoVariables";
import { useApsSelector, useProyeccionesSelector } from "../../store/storeSelectors";

 export const CreciemientoVariables = () => {
    const aps = useApsSelector(state => state.aps);
    const proy = useProyeccionesSelector(state => state.proy);

    const [dataCrecimientoVarbl, setDataCrecimientoVarbl] = useState([]);
    console.log('dataCrecimientoVarbl: ', dataCrecimientoVarbl);
    const data = {
        PROY_ID: proy
    }
    const onTablaCrecimiento = async() => {
        try{
            const variables = await getCrecimientoVarbl(data);
            setDataCrecimientoVarbl(variables);
            console.log('variables: ', variables);
            
        } catch {
            console.error('error en data detalle reversiones');
        }
    }

    useEffect(() =>{
        onTablaCrecimiento();
    }, [aps, proy]);

    
    // const titulosTabs = [
    //     { titulo: 'USUARIOS', datos: dataEnergia, encabezado: columsEnergia },
    //     { titulo: 'INFORMACION PROPIA', datos: dataAcueducto, encabezado: columsAcueducto},
    //     { titulo: 'INFORMACION TERCERO', datos: dataCostos, encabezado: columsCostos },
    // ];

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