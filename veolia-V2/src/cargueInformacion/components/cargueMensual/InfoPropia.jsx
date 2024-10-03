import { useState } from 'react'
import { columnsPropiaMen } from '../data';
import { TablaComponentes } from '../../../ui/components/TablaComponentes';
import { postPropiaMensual } from '../../service/cargueMensualService';
import Papa from 'papaparse';
import { useAnnoSelector, useApsSelector, useMesSelector } from '../../../store/storeSelectors';

export const InfoPropia = () => {
    const aps = useApsSelector(state => state.aps);
    const anno = useAnnoSelector((state) => state.anno);
    const mes = useMesSelector((state) => state.mes);

    const [filemonthChose, setFilemonthChose] = useState([]);
    const [procesedFilemonth, setProcesedFilemonth] = useState([]);
    const [apsFilemonth, setApsFilemonth] = useState('');
    const [emprFilemonth, setEmprFilemonth] = useState('');
    const [dateyFilemonth, setDateyFilemonth] = useState('');
    const [datemFilemonth, setDatemFilemonth] = useState('');
    const [errors, setErrors] = useState(false);
    const [messages, setMessages] = useState([]);
    
    const stapsSeleccionado = 'APS_SELECCIONADO';
    const emprSelected = { emprempr: 'EMPRESA_SELECCIONADA' };
    const stYear = 2024;
    const stSemester = 2;

    const addMessages = (type, text) => {
        setMessages((prev) => [...prev, { type, text }]);
    };

    const generarPreviewMonth = (data) => {
        console.log('Generando preview con:', data);
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
                setProcesedFilemonth(data);

                // setApsFilemonth(data[0].CODAPS);
                // setEmprFilemonth(data[0].CODEMPRESA);

                const tmpYear = stYear;

                // setDateyFilemonth(data[0].ANNO);
                // setDatemFilemonth(data[0].MES);

                let hasErrors = false;

                for (const element of data) {
                    console.log('element', element.ANNO);
                    console.log('ano:', anno);
                    if (element.CODAPS != aps) {
                        console.log('APS');
                        addMessages("error", "El APS Seleccionado no concuerda con el APS del archivo!");
                        hasErrors = true;
                        break;
                    } else if (element.CODEMPRESA !== emprSelected.emprempr) {
                        addMessages("error", "La Empresa Seleccionada no concuerda con la Empresa del archivo!");
                        hasErrors = true;
                        break;
                    } else if (element.ANNO != anno) {
                        // console.log('ANNO');
                        addMessages("error", "El AÑO Seleccionado no concuerda con los del archivo!");
                        hasErrors = true;
                        break;
                    } else if (Math.ceil(element.MES / 6) !== stSemester) {
                        console.log(`${Math.ceil(element.MES / 6)} != ${stSemester}`);
                        addMessages("error", "Existen meses fuera del rango del semestre seleccionado que no concuerdan con los del archivo!");
                        hasErrors = true;
                        break;
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
            await postPropiaMensual(procesedFilemonth[0]);
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
                {/* <Selectores /> */}
                <input
                    type="file"
                    onChange={(e) => setFilemonthChose(e.target.files)}
                />

                <button onClick={procesarMonthArchivo}>Procesar archivo</button>

                {messages.map((message, index) => (
                    <div key={index} className={`message-${message.type}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div>
                <h4>Vista Previa</h4>
                <TablaComponentes colums={columnsPropiaMen} data={procesedFilemonth}/>
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
