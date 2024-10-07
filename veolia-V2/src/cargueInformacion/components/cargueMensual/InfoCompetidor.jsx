import { useEffect, useState } from 'react'
import { columnsCompetidorMen } from '../data';
import { TablaComponentes } from '../../../ui/components/TablaComponentes';
import { postCompetidorMensual } from '../../service/cargueMensualService';
import { useAnnoSelector, useApsSelector, useMesSelector } from '../../../store/storeSelectors';
import { useGetCargueEmpresa } from '../../../hooks/useGetCargueEmpresa';
import { SelectCargueInformacion } from '../selectCargueInformacion';
import Papa from 'papaparse';
import { InputCargueFile } from '../InputCargueFile';

export const InfoCompetidor = () => {
  const aps = useApsSelector(state => state.aps);
  const anno = useAnnoSelector((state) => state.anno);
  const mes = useMesSelector((state) => state.mes);

  const { empresas, onCargueSemestral } = useGetCargueEmpresa();
  const [selectEmpre, setSelectEmpre] = useState('');
  const [filemonthChose, setFilemonthChose] = useState([]);
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
        cp: Number(element.CP),
        mt3agua: Number(element.MT3AGUA),
        m2cc: Number(element.M2CC),
        m2lav: Number(element.M2LAV),
        ti: Number(element.TI),
        tm: Number(element.TM),
        klp: Number(element.KLP),
        cblj: Number(element.CBLJ)
      }));
    setPreViewTabla(preview);
  };
   
  const procesarMonthArchivo = async () => {
    setMessages([]);

    if (!filemonthChose.length) return;

    const file = filemonthChose[0];
    Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: async (results) => {
            const data = results.data;

            let hasErrors = false;

            for (const element of data) {
                if (element.CODAPS != aps) {
                    addMessages("error", "El APS Seleccionado no concuerda con el APS del archivo!");
                    hasErrors = true;
                    break;
                } else if (element.CODEMPRESA !== selectEmpre) {
                    addMessages("error", "La Empresa Seleccionada no concuerda con la Empresa del archivo!");
                    hasErrors = true;
                    break;
                } else if (element.ANNO != anno || element.MES != mes) {
                    addMessages("error", "El AÑO Seleccionado no concuerda con los del archivo!");
                    hasErrors = true;
                    break;
                } else {
                    console.log('no hay errores');
                }
            }

            if (!hasErrors) {
                generarPreviewMonth(data);
            }

            // setErrors(hasErrors);
        }
    });
  };

  const onGuardarCSV = async() => {
      try {
          await postCompetidorMensual(preViewTabla[0]);
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
              <TablaComponentes colums={columnsCompetidorMen} data={preViewTabla}/>
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
