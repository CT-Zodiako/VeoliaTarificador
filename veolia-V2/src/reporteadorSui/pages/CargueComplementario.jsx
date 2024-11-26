import { useEffect, useState } from "react";
import { Selectores } from "../../ui/components/Selectores";
import { TituloVista } from "../../ui/components/TituloVista";
import { getCargueComplementario } from "../service/cargueComplementario";
import { CargueInformacion } from "../components/cargueComplementario/CargueInformacion";

export const CargueComplementario = () => {
    // const [ complementario, setComplementario ] = useState();

    // const onDataComplementario = async() => {
    //     try{
    //         const cargue = await getCargueComplementario();
    //         setComplementario(cargue);
    //     } catch {
    //         console.error('error en data proyeccion');
    //     }
    // };

    // useEffect(() =>{
    //     onDataComplementario();
    // }, []);

    return(
    <>
        <div className="headerComponent">
            <div className="selector">
                <TituloVista titulo="Cargue Complementario" />
            </div>
            <div className="selector">
                <Selectores selectorAps={true} selectorFecha={true}/>
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4 bodyComponent">
            <div className="width-Component">
                <div className="panel">
                    <CargueInformacion />
                </div>
            </div>
        </div>
    </>
  )
};