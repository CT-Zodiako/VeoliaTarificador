import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { SelectDesdeHasta } from "./SelectDesdeHasta";
import { SelectorRelq } from "./SeletorRelq";
import { selectorService } from "../../../src/ui/services/selectorService";
import { SelectorCalendario } from "./SelectorCalendario";
import { getCorreosUsua, postCorreosUsua } from "../services/CrearReliqServices";
import { InputCargueFile } from "../../../src/cargueInformacion/components/InputCargueFile";

export const ModalCrearRelq = ({ show, cerrar }) => {
    const token = localStorage.getItem('token');
    const tokenData = token.split(".")[1];
    const decodedToken = JSON.parse(atob(tokenData));

    const usuarioCorreo = decodedToken.sisuCorreo;
    const usuarioId = decodedToken.sisuId;

    const  [ formulario, setFormulario ] = useState({
        relqid: 12,
        apsaid: '',
        relqnombre: "Reliquidacion 12",
        relqdescrip: '',
        relqdesde: '',
        relqhasta: '',
        relqususolicita: '',
        relqestado: 1,
        relqidatt: 0,
        relqusuaprueba: '',
    });
    console.log(formulario);
    const [ dataAps, setDataAps ] = useState([]);
    const [ dataCorreos, setDataCorreos ] = useState([]);  

    const onFormulario = (event) => {
        const { name, value } = event.target;
        const transformedValue = isNaN(value) ? value : Number(value);
        setFormulario({
            ...formulario,
            [name]: transformedValue
        });
    };

    const onFormularioDesdes = (value) => {
        setFormulario(prevFormulario => ({
            ...prevFormulario,
            relqdesde: value
        }));
    };
    
    const onFormularioHasta = (value) => {
        setFormulario(prevFormulario => ({
            ...prevFormulario,
            relqhasta: value
        }));
    };
    
    const onDataAps = async() => {
        try {
            const result = await selectorService();
            setDataAps(result);
        } catch (error) {
            console.error(error);
        }
    };

    const onDataCorreos = async() => {  
        try {
            const data = {
                apsaId: Number(formulario.apsaid)
            }
            const correos = await getCorreosUsua(data); 
            setDataCorreos(correos);
        } catch (error) {
            console.error(error);
        }
    };

    const onCrearRelq = async() => {  
        try {
            const correos = await postCorreosUsua(formulario); 
            setDataCorreos(correos);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {   
        if(formulario.apsaid !== ''){
            onDataCorreos();
        }
    }, [formulario.apsaid]);

    useEffect(() => {
        onDataAps();
        onDataCorreos();

        setFormulario({
            ...formulario,
            relqusuaprueba: usuarioId
        });
    }, []);
    
    return(
    <>
        <Modal show={show} onHide={cerrar} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Crear Reliquidacion</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ padding: '1rem'}}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '1rem'
                    }}
                >
                    <div>
                        <SelectorRelq 
                            onFormulario={onFormulario} 
                            data={dataAps} 
                            label={'Aps'}
                            opcion={'Aps'} 
                            name={'apsaid'}
                            keys={'APSA_ID'}
                            text={'APSA_NOMAPS'}
                        />
                    </div>
                    <div>
                        <SelectDesdeHasta 
                            onFormulario={onFormularioDesdes} 
                            label={'Desde'}
                            name={'relqdesde'}
                            value={formulario.relqdesde}
                        />
                    </div>
                    <div>
                        <SelectDesdeHasta 
                            onFormulario={onFormularioHasta} 
                            label={'Hasta'}
                            name={'relqhasta'}
                            value={formulario.relqhasta}
                        />
                    </div>
                </div>
                <div style={{ margin: '0.8rem 0 1rem 0' }}>
                    <label htmlFor="motivo" className='label-select'>Motivo</label>
                    <textarea 
                        style={{ width: '100%' }}
                        name="relqdescrip"
                        id="motivo"
                        cols="50"
                        rows="10"
                        value={formulario.relqdescrip}
                        onChange={onFormulario}
                    />
                </div>
                <div style={{ margin: '0.8rem 0 1rem 0', display: 'flex', justifyContent: 'space-between' }}>
                    <label className='label-select'>Adjuntar Archivo </label>
                    <InputCargueFile boton={false}/>
                    
                    {/* <input
                        style={{ width: '100%', height: '2rem'}}
                        type="file"
                        id="fileUpload"
                        className="file-input"
                        // onChange={handleFileChange}
                        accept=".pdf"
                    /> */}
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '1rem'
                    }}
                >
                    <div>
                        <SelectorRelq 
                            onFormulario={onFormulario} 
                            data={dataCorreos} 
                            label={'Solicitado'} 
                            opcion={'Correo'}
                            name={'relqususolicita'}
                            keys={'SISU_ID'}
                            text={'SISU_CORREO'}
                        />
                    </div>
                    <div>
                        <SelectorCalendario />
                    </div>
                    <div>
                        <div className='mt-1 container-select'>
                            <label htmlFor="autoriza" className='label-select'>Autoriza</label>
                            <input 
                                className="form-control form-select-sm style-selector" 
                                type="text" 
                                id="autoriza"
                                value={usuarioCorreo}
                                readOnly 
                            />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button 
                    className="btn btn-primary" 
                    onClick={onCrearRelq}
                > 
                    Guardar
                </button>
                <button 
                    className="btn btn-secondary" 
                    onClick={cerrar}
                >
                    Cerrar
                </button>
            </Modal.Footer>
        </Modal>
    </>
  )
};
