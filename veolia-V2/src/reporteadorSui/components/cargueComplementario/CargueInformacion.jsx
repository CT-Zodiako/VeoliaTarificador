import { useState } from "react";
import { InputCargueFile } from "../../../cargueInformacion/components/InputCargueFile";
import { TablaComponentes } from "../../../ui/components/TablaComponentes";
import { useSelectStore } from "../../../hooks/useSelectStore";
import { postCargueComplementario } from "../../service/cargueComplementario";
import Papa from 'papaparse';
import { columnsCargueComplementario } from "../data";

export const CargueInformacion = () => {
    const { aps, anno, mes } = useSelectStore();
    const [fileMonthChosen, setFileMonthChosen] = useState(null);
    const [filePreviewMonth, setFilePreviewMonth] = useState([]);
    // const [iconButton, setIconButton] = useState("pi pi-save");
    // const [stapsSeleccionado, setStapsSeleccionado] = useState(null);
    const [stDate, setStDate] = useState(null);
    const [messages, setMessages] = useState([]);
    const [errors, setErrors] = useState(false);

    const cargarArchivo = (files) => {
        setFileMonthChosen(files);
    };

    const guardarData = async () => {
      const confirmation = window.confirm(
        "¿Está seguro de guardar esta información?"
      );

      if (confirmation) {
        if (fileMonthChosen) {
        //   const cargueServ = new CargueService();
        //   let date = stDate ? new Date(stDate) : new Date();
        //   date.setMonth(date.getMonth() - 1);

        //   const aps = stapsSeleccionado;
        //   const annos = date.getFullYear();
        //   const meses = date.getMonth() + 1;

        //   setIconButton("pi pi-spin pi-spinner");

          await postCargueComplementario( aps, anno, mes, filePreviewMonth );
          setFilePreviewMonth([]);
          cancelarMonthProcesado();
          setIconButton("pi pi-save");
        } else {
          alert("Debe procesar un archivo");
        }
      }
    };

    const addMessages = (type,text) => {
      setMessages((prev) => [...prev, { type, text }]);
    };

    // const fileMonthSelected = (event) => {
    //   const files = event.target.files;
    //   if (!files.length) {
    //     setFileMonthChosen(null);
    //   } else {
    //     setFileMonthChosen(files);
    //   }
    // };

    const procesarMonthArchivo = async () => {
      setMessages([]);
      if (!fileMonthChosen?.length) return;

      Papa.parse(fileMonthChosen[0], {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const procesedFile = results.data;
        //   const apsFilemonth = procesedFile[0].APSA_ID;
        //   const tmpDate = stDate ? new Date(stDate) : new Date();
        //   const tmpYear = tmpDate.getFullYear();
        //   const tmpMonth = tmpDate.getMonth() + 1;

        //   const dateyFile = procesedFile[0].COM_ANNO;
        //   const datemFile = procesedFile[0].COM_MES;

          let hasErrors = false;

          for (const element of procesedFile) {
            console.log(element);
            if (element.APSA_ID != aps) {
              addMessages("error", "El APS seleccionado no concuerda con el APS del archivo!");
                hasErrors = true;
                break;
            } else if (element.COM_ANNO != anno || element.COM_MES != mes) {
                addMessages(
                    "error",
                    "El AÑO y MES seleccionado no concuerdan con los del archivo!"
                );
                hasErrors = true;
                break;
            } else {
                console.log('no hay errores');
            }
          };

          if (!hasErrors) {
            generarPreviewMonth(procesedFile);
        }
        },
      });
    };

    const generarPreviewMonth = (data) => {
      const preview = data.map((element) => ({
        aps: element.APSA_ID,
        anno: element.COM_ANNO,
        mes: element.COM_MES,
        abc: element.F23_ABC,
        cptecho: element.F23_CPTECHO,
        det: element.F24_DET,
        f1et: element.F24_F1ET,
        cpeet: element.F24_CPEET,
        prtzet: element.F24_PRTZET,
        ceg: element.F24_CEG,
        camrers: element.F35_CAMRERS,
        inccdfalt9: element.F35_INCCDFALT9,
        prctcrrcp: element.F35_PRCTCRRCP,
        v0: element.F35_V0,
        vm: element.F35_VM,
        mcrs: element.F35_MCRS,
        icrsm: element.F35_ICRSM,
        iccrs: element.F35_ICCRS,
        frein: element.F35_FREIN,
        capperdf: element.F35_CAPPERDF,
        QRS_MES: element.F35_QRS_MES,
        DISPALT9: element.F35_DISPALT9,
        VL_MES: element.F36_VL_MES,
        fecha: element.COM_FECHA,
        usuario: element.USUARIO,
      }));
      setFilePreviewMonth(preview);
    };

    const cancelarMonthProcesado = () => {
      setFileMonthChosen(null);
    };

    return(
    <>
        <div className="componenTable">
            <h3>Cargue de Informacion Complemento</h3>
            <div className='bodyComponent datos-cargue'>
                <div className='archivo-cargue'>
                    <InputCargueFile file={cargarArchivo} procesar={procesarMonthArchivo}/>
                </div>
                {messages.map((message, index) => (
                    <div key={index} className={`message-${message.type}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className='bodyComponent vista-previa'>
                <h4>Vista Previa:</h4>
                <hr />
                <TablaComponentes colums={columnsCargueComplementario} data={filePreviewMonth}/>
            </div>
            <button
                className="btn btn-primary btn-md"
                onClick={guardarData}
            >
                Guardar Información
            </button>
        </div>
    </>
  )
};