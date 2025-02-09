import { useEffect, useState } from "react";
import { TablaComponentes } from "../../../src/ui/components/TablaComponentes";
import { columnsCrearReliq, formatoCrearRelq } from "../components/data";
import { ModalCrearRelq } from "../components/ModalCrearRelq";

export const CrearReliq = () => {
    // const [dataRelq, setDataRelq] = useState({
    //   formato:{},
    //   datos:[]
    // });
    const [modal, setModal] = useState(false);

    // const onDatosRelq = async() => {
    //   try{
    //     const relq = await getRelq();
    //     setDataRelq({
    //       ...dataRelq,
    //       formato: formatoCrearRelq,
    //       datos: relq
    //     });
    //   } catch {
    //     console.error('error en data relq');
    //   }
    // };

    const cerrarModal = () => {
      setModal(false);
    };

    const abrirModal = () => {
      setModal(true);
    };

    // useEffect(() =>{
    //   onDatosRelq();
    // }, []);
 
    return(
    <>
      <button
        className="btn btn-primary"
        onClick={abrirModal}
      >
        Crear
      </button>
      {/* <TablaComponentes colums={columnsCrearReliq} data={dataRelq}/> */}
      <ModalCrearRelq show={modal} cerrar={cerrarModal}/>
    </>
  )
};

