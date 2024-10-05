import { useEffect, useState } from 'react';
import { columnsCompetidorSem } from '../data';
import { useGetCargueEmpresa } from '../../../hooks/useGetCargueEmpresa';
import { useAnnoSelector, useApsSelector, useSemestreSelector } from '../../../store/storeSelectors';
import { SelectCargueInformacion } from '../selectCargueInformacion';
import { TablaComponentes } from '../../../ui/components/TablaComponentes';
import { postCompetidorSemestral } from '../../service/cargueSemestralService';
import Papa from 'papaparse';

export const InfoCompetidor = () => {
  const aps = useApsSelector(state => state.aps);
  const anno = useAnnoSelector((state) => state.anno);
  const semestre = useSemestreSelector((state) => state.semestre);

  const { empresas, onCargueSemestral } = useGetCargueEmpresa();
  const [selectEmpre, setSelectEmpre] = useState('');
  const [filemonthChose, setFilemonthChose] = useState('');
  const [filemonthActive, setFilemonthActive] = useState(false);
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
  const filemonthSelected = (event) => {
      const files = event.target.files || event.dataTransfer.files;
      setFilemonthChose(files);
  
      if (!files || files.length === 0) {
        setFilemonthActive(false);
        setFilemonthChose(null);
      } else {            
        setFilemonthActive(true);
      }
  };

  const cancelarArchivo = () => {
      setFilemonthActive(false);
      setFilemonthChose('');
  }

  const addMessages = (type, text) => {
      setMessages((prev) => [...prev, { type, text }]);
  };

  const generarPreviewMonth = (data) => {
      const preview = data.map((element) => ({
        aps: Number(element.CODAPS),
        empr: Number(element.CODEMP),
        anno: Number(element.ANNO),
        mes: Number(element.MES),
        n: Number(element.N),
        na: Number(element.NA),
        nd: Number(element.ND),
        qlu: Number(element.QLU),
        qna: Number(element.QNA),
        qbl: Number(element.QBL),
        qr: Number(element.QR),
        cblj: Number(element.CBLJ),
        lbl: Number(element.LBL),
        crtcomp: Number(element.CRTCOMP),
        cdfcomp: Number(element.CDFCOMP),
        qrtz: Number(element.QRTZ),
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
            } else if (element.CODEMP != selectEmpre) {
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
            await postCompetidorSemestral(preViewTabla[0]);
        } catch (error) {
            console.error('Error al guardar el archivo', error);
        }
    }
    
    return(
    <>
        <div>
            <h3>Cargue de Informacion Propia</h3>
            <div>
                <h4>Datos Semestrales</h4>
                <SelectCargueInformacion opciones={empresas} label='Seleccionar Empresa ' seleccion={empreSeleccionada}/>
                <input
                    type="file"
                    onChange={filemonthSelected}
                />
                <button 
                    onClick={cancelarArchivo}
                    disabled={!filemonthActive}
                >
                    Cancelar
                </button>
                <button 
                    onClick={procesarMonthArchivo}
                    disabled={!filemonthActive}
                >
                    Procesar archivo
                </button>

                {messages.map((message, index) => (
                    <div key={index} className={`message-${message.type}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div>
                <h4>Vista Previa</h4>
                <TablaComponentes colums={columnsCompetidorSem} data={preViewTabla}/>
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