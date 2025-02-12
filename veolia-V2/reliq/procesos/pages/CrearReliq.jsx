import { useEffect, useState } from "react";
import { columnsCrearReliq, formatoCrearRelq } from "../components/data";
import { ModalCrearRelq } from "../components/ModalCrearRelq";
import { getCrearRelq } from "../services/CrearReliqServices";
import { TablaInformesGerenciales } from "../../../src/informesGerenciales/components/TablaInformesGerenciales";

export const CrearReliq = () => {
    const [dataRelq, setDataRelq] = useState({
      formato:{},
      datos:[]
    });
    const [modal, setModal] = useState(false);

    const onDatosRelq = async() => {
      try{
        const relq = await getCrearRelq();
        setDataRelq({
          ...dataRelq,
          formato: formatoCrearRelq,
          datos: relq
        });
      } catch {
        console.error('error en data relq');
      }
    };

    const cerrarModal = () => {
      setModal(false);
    };

    const abrirModal = () => {
      setModal(true);
    };

    useEffect(() =>{
      onDatosRelq();
    }, []);
 
    return(
    <>
      <button
        className="btn btn-primary"
        onClick={abrirModal}
      >
        Crear
      </button>
      {/* <TablaComponentes colums={columnsCrearReliq} data={dataRelq}/> */}
      <TablaInformesGerenciales 
          datos={dataRelq} 
          colums={columnsCrearReliq} 
          acciones={true}
          // modal={abrirModal}
          page={true}
      />
      <ModalCrearRelq show={modal} cerrar={cerrarModal}/>
    </>
  )
};

