import { useState } from 'react'
import { columnsUsuarioSem } from '../data';
import { useAnnoSelector, useApsSelector, useSemestreSelector } from '../../../store/storeSelectors';
import { TablaComponentes } from '../../../ui/components/TablaComponentes';
import Papa from 'papaparse';
import { postUsuariosSemestral } from '../../service/cargueSemestralService';

export const InfoUsuario = () => {
  const aps = useApsSelector(state => state.aps);
  const anno = useAnnoSelector((state) => state.anno);
  const semestre = useSemestreSelector((state) => state.semestre);

  const [filemonthChose, setFilemonthChose] = useState('');
  const [filemonthActive, setFilemonthActive] = useState(false);
  const [preViewTabla, setPreViewTabla] = useState([]); 
  const [errors, setErrors] = useState(false);
  const [messages, setMessages] = useState([]);

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
  };

  const addMessages = (type, text) => {
    setMessages((prev) => [...prev, { type, text }]);
  };

  const generarPreviewMonth = (data) => {
    const preview = data.map((element) => ({
      codaps: Number(element.CODAPS),
      aps: element.NOMAPS,
      anno: Number(element.ANNO),
      semestre: Number(element.SEMESTRE),
      coduso: Number(element.CODUSO),
      nomuso: element.NOMUSO,
      codfactor: Number(element.COD_FACTOR),
      nomfact: Number(element.NOM_FACT),
      codtipo: Number(element.COD_TIPO),
      nomtipo: element.NOM_TIPO,
      susm1: Number(element.SUS_M1),
      susm2: Number(element.SUS_M2),
      susm3: Number(element.SUS_M3),
      susm4: Number(element.SUS_M4),
      susm5: Number(element.SUS_M5),
      susm6: Number(element.SUS_M6),
      afom1: Number(element.AFO_M1),
      afom2: Number(element.AFO_M2),
      afom3: Number(element.AFO_M3),
      afom4: Number(element.AFO_M4),
      afom5: Number(element.AFO_M5),
      afom6: Number(element.AFO_M6),
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
          } else if (element.ANNO != anno) {
            addMessages("error", "El AÑO Seleccionado no concuerda con los del archivo!");
            foundError = true;
            return false;
          } else if (element.SEMESTRE !== semestre) {
            addMessages('error', 'Existen meses fuera del rango del semestre Seleccionado no concuerda con los del archivo!');
            setErrors(true);
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
        await postUsuariosSemestral(preViewTabla[0]);
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
                <TablaComponentes colums={columnsUsuarioSem} data={preViewTabla}/>
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