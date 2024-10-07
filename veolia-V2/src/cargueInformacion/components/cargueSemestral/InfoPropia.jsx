import { useEffect, useState } from 'react'
import { columnsPropiaSem } from '../data';
import { TablaComponentes } from '../../../ui/components/TablaComponentes';
import { SelectCargueInformacion } from '../selectCargueInformacion';
import { useAnnoSelector, useApsSelector, useSemestreSelector } from '../../../store/storeSelectors';
import { useGetCargueEmpresa } from '../../../hooks/useGetCargueEmpresa';
import { postPropiaSemestral } from '../../service/cargueSemestralService';
import { InputCargueFile } from '../InputCargueFile';
import Papa from 'papaparse';

export const InfoPropia = () => {
    const aps = useApsSelector(state => state.aps);
    const anno = useAnnoSelector((state) => state.anno);
    const semestre = useSemestreSelector((state) => state.semestre);

    const { empresas, onCargueSemestral } = useGetCargueEmpresa();
    const [selectEmpre, setSelectEmpre] = useState('');
    const [filemonthChose, setFilemonthChose] = useState('');
    const [preViewTabla, setPreViewTabla] = useState([]);   
    const [errors, setErrors] = useState(false);
    const [messages, setMessages] = useState([]);
    
    useEffect(()=>{
        if (aps){
            onCargueSemestral();
        }
    }, [aps])

    const empreSeleccionada = (empre) => {
        setSelectEmpre(empre);
    }

    const cargarArchivo = (files) => {
        setFilemonthChose(files);
    }

    const addMessages = (type, text) => {
        setMessages((prev) => [...prev, { type, text }]);
    };

    const generarPreviewMonth = (data) => {
        const preview = data.map((element) => ({
            aps: Number(element.CODAPS),
            empr: Number(element.CODEMPRESA),
            anno: Number(element.ANNO),
            mes: Number(element.MES),
            qrt: Number(element.QRT),
            qlu: Number(element.QLU),
            qna: Number(element.QNA),
            qbl: Number(element.QBL),
            qr: Number(element.QR),
            qrs: Number(element.QRS),
            lbl: Number(element.LBL),
            vl: Number(element.VL),
            esce: Number(element.ESCE),
            ctlmx: Number(element.CTLMX),
            cpe: Number(element.CPE),
            naa: Number(element.NAA),
            tafa: Number(element.TAFA),
            crtpro: Number(element.CRTPRO),
            cdfpro: Number(element.CDFPRO),
        }));
        setPreViewTabla(preview);
    };

    const procesarMonthArchivo = async () => {
        setMessages([]);

        if (!filemonthChose || filemonthChose.length === 0) return;
    
        Papa.parse(filemonthChose[0], {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const parsedData = results.data;

            let foundError = false;
    
            parsedData.every((element) => {
              if (element.CODAPS != aps) {
                addMessages("error", "El APS Seleccionado no concuerda con el APS del archivo!");
                foundError = true;
                return false;
              } else if (element.CODEMPRESA != selectEmpre) {
                addMessages("error", "La Empresa Seleccionada no concuerda con la Empresa del archivo!");
                foundError = true;
                return false;
              } else if (element.ANNO != anno) {
                addMessages("error", "El AÑO Seleccionado no concuerda con los del archivo!");
                foundError = true;
                return false;
              } else if (Math.ceil(element.MES / 6) != semestre) {
                addMessages("error", "Existen meses fuera del rango del semestre Seleccionado no concuerdan con los del archivo!");
                foundError = true;
                return false;
              }
              return true;
            });

            setErrors(foundError);
    
            if (!foundError) {
              generarPreviewMonth(parsedData);
            }
          },
        });
      };

    const onGuardarCSV = async() => {
        try {
            await postPropiaSemestral(preViewTabla[0]);
        } catch (error) {
            console.error('Error al guardar el archivo', error);
        }
    }

    return(
    <>
        <div className="componenTable">
            <h3>Cargue de Informacion Propia</h3>
            <div className='bodyComponent datos-cargue'>
                <h4>Datos Semestrales</h4>
                <hr />
                <div className='archivo-cargue'>
                    <SelectCargueInformacion opciones={empresas} label='Seleccionar Empresa ' seleccion={empreSeleccionada}/>
                    <InputCargueFile file={cargarArchivo} procesar={procesarMonthArchivo}/>
                </div>
                {messages.map((message, index) => (
                    <div key={index} className={`message-${message.type}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className='bodyComponent vista-previa'>
                <h4>Vista Previa</h4>
                <hr />
                <TablaComponentes colums={columnsPropiaSem} data={preViewTabla}/>
            </div>
            <button
                className="btn btn-primary btn-md"
                onClick={onGuardarCSV}
            >
                guardar
            </button>
        </div>
    </>
  )
};
