import { useState } from 'react'
import { columnsEstratoMen, columnsUsuarioMen, columnsVariables } from '../data';
import { useAnnoSelector, useApsSelector, useMesSelector } from '../../../store/storeSelectors';
import { postInfoUsuarios } from '../../service/cargueMensualService';
import { InputCargueFile } from '../InputCargueFile';
import { TablaComponentes } from '../../../ui/components/TablaComponentes';
import Papa from 'papaparse';

export const InfoUsuario = () => {
  const aps = useApsSelector(state => state.aps);
  const anno = useAnnoSelector((state) => state.anno);
  const mes = useMesSelector((state) => state.mes);

  const [fileChose, setFileChose] = useState([]);
  const [messages, setMessages] = useState([]);
  const [procesedFile, setProcesedFile] = useState([]);
  const [crosResumeFile, setCrosResumeFile] = useState('');
  const [resumeVariables, setResumeVariables] = useState([]);
  console.log('resumeVariables: ', resumeVariables);
  const [resumeEstratoFile, setResumeEstratoFile] = useState([]);
  console.log('resumeEstratoFile: ', resumeEstratoFile);
  const [filePreview, setFilePreview] = useState([]);
  console.log('vista previa: ', filePreview);

  const cargarArchivo = (files) => {
    setFileChose(files);
  };
  
  const addMessages = (type, text) => {
    setMessages((prevMessages) => [...prevMessages, { type, text }]);
  };

  const generarPreview = (data) => {
    const preview = data.map((element) => ({
      codaps: element.CODAPS,
      aps: element.APS,
      anno: element.ANNO,
      mes: element.MES,
      coduso: element.CODUSO,
      nomuso: element.NOMUSO,
      codfactor: element.CODFACTOR,
      codtipo: element.CODTIPO,
      tipo: element.TIPO,
      tiponom: element.TIPONOM,
      cantidad: element.CANTIDAD,
      toneladas: element.TONELADAS,
    }));
    setFilePreview(preview);
  };

  const calcularResumenxestrato = (data) => {
    const resumen = data
      .filter((element) => element.TIPO === "1")
      .map((element) => ({
        codEstrato: element.CODUSO,
        Estrato: element.NOMUSO,
        Cantidad: element.CANTIDAD,
        TonTotales: element.TONELADAS,
      }));
    setResumeEstratoFile(resumen);
  };

  const calcularResumen = (data) => {    
    let n = 0, nd = 0, na = 0, tafna = 0;
    const codaps = data[0].CODAPS;

    data.forEach((element) => {
      if (element.TIPO === "1") {
        n += parseFloat(element.CANTIDAD);
      } else if (["2", "3", "4"].includes(element.TIPO)) {
        na += parseFloat(element.CANTIDAD);
      } else if (element.TIPO === "5") {
        nd += parseFloat(element.CANTIDAD);
      }
      tafna += parseFloat(element.TONELADAS || 0);
    });

    if (codaps !== -1) {
      setResumeVariables([
        { Var: "N", Total: n },
        { Var: "ND", Total: nd },
        { Var: "NA", Total: na },
        { Var: "TAFNA", Total: tafna },
      ]);

      setCrosResumeFile({ 
        N: n, 
        NA: na, 
        ND: nd, 
        TAFNA: tafna 
      });
    }
  };

  const procesarArchivo = async () => {
    setMessages([]); 
    if (fileChose.length === 0) return;
    
    Papa.parse(fileChose[0], {      
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setProcesedFile(results.data);
        const apsFile = results.data[0].CODAPS;
        const dateyFile = results.data[0].ANNO;
        const datemFile = results.data[0].MES;

        let foundError = false;
        
        if (apsFile != aps) {
          console.log('APS');
          addMessages("error", "El APS Seleccionado no concuerda con el APS del archivo!");
          foundError = true;
          return false;
        } else if (dateyFile != anno || datemFile != mes) {
          console.log('AÑO y MES');
          addMessages("error", "El AÑO y MES Seleccionado no concuerda con los del archivo!");
          foundError = true;
          return false;
        } 
        if (!foundError) {
          console.log('archivo procesado');
          calcularResumen(results.data);
          calcularResumenxestrato(results.data);
          generarPreview(results.data);
        }
      },
    });
  };

  const enviarInfoUsuario = async () => {
    const data = {
      aps: filePreview[0].aps,
      anno: anno,
      mes: mes,
      N: crosResumeFile.N,
      ND: crosResumeFile.ND,
      NA: crosResumeFile.NA,
      TAFNA: Number(crosResumeFile.TAFNA),
      codaps: Number(filePreview[0].codaps),
      coduso: Number(filePreview[0].coduso),
      nomuso: Number(filePreview[0].nomuso),
      codfactor: Number(filePreview[0].codfactor),
      codtipo: Number(filePreview[0].codtipo),
      tipo: Number(filePreview[0].tipo),
      tiponom: filePreview[0].tiponom,
      cantidad: Number(filePreview[0].cantidad),
      toneladas: Number(filePreview[0].toneladas),
    };

    try {
      await postInfoUsuarios(data);
    } catch (error) {
      console.error('Error en data de cargue', error);
    }
  }

    return(
    <>
      <div>
        <h2>Usuario mensual</h2>
        <div>
            <h4>Datos Semestrales</h4>
            <InputCargueFile file={cargarArchivo} procesar={procesarArchivo}/>
            {messages.map((message, index) => (
                <div key={index} className={`message-${message.type}`}>
                    {message.text}
                </div>
            ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: '40%' }}>
            <TablaComponentes colums={columnsVariables} data={resumeVariables}/>
            <TablaComponentes colums={columnsEstratoMen} data={resumeEstratoFile}/>        
          </div>
          <div style={{ width: '60%' }}>
            <TablaComponentes colums={columnsUsuarioMen} data={filePreview}/>
          </div>
        </div>
        <button
            className="btn btn-primary btn-md"
            onClick={enviarInfoUsuario}
        >
          Guardar
        </button>
      </div>
    </>
  )
};