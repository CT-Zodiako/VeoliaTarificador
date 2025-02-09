import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { SelectDesdeHasta } from "./SelectDesdeHasta";
import { SelectorRelq } from "./SeletorRelq";
import { selectorService } from "../../../src/ui/services/selectorService";

export const ModalCrearRelq = ({ show, cerrar }) => {
    const  [ formulario, setFormulario ] = useState({
        APSAID: '',
        RELQDESCRIPCION: '',
        RELQANNO: '',
        RELQMES: '',
        RELQANNOHAS: '',
        RELQMESHAS: '',
        RELQDESDE: '',
        RELQHASTA: ''
    });
    // console.log(formulario);
    const [ dataAps, setDataAps ] = useState([]);
    const [ dataCorreos, setDataCorreos ] = useState([]);    

    const onFormulario = (event) => {
        const { name, value } = event.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    const onFormularioDesdes = (value) => {
        setFormulario(prevFormulario => ({
            ...prevFormulario,
            RELQDESDE: value
        }));
    };
    
    const onFormularioHasta = (value) => {
        setFormulario(prevFormulario => ({
            ...prevFormulario,
            RELQHASTA: value
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
            const correos = await selectorService();
            setDataCorreos(correos);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        onDataAps();
        onDataCorreos();
    }, []);
    
    return(
    <>
        <Modal show={show} onHide={cerrar}>
            <Modal.Header closeButton>
                <Modal.Title>Actualizar PROY</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '1rem'
                    }}
                >
                    <div>
                        <SelectorRelq onFormulario={onFormulario} data={dataAps}/>
                    </div>
                    <div>
                        <SelectDesdeHasta 
                            onFormulario={onFormularioDesdes} 
                            label={'Desde'}
                            name={'RELQDESDE'}
                            value={formulario.RELQDESDE}
                        />
                    </div>
                    <div>
                        <SelectDesdeHasta 
                            onFormulario={onFormularioHasta} 
                            label={'Hasta'}
                            value={formulario.RELQHASTA}
                        />
                    </div>
                </div>
                <div>
                    <textarea 
                        name="" 
                        id=""
                        cols="50"
                        rows="10"
                    />
                </div>
                <div>
                    <input
                        style={{ width: '100%', height: '2rem'}}
                        type="file"
                        id="fileUpload"
                        className="file-input"
                        onChange={handleFileChange}
                        accept=".pdf"
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '1rem'
                    }}
                >
                    <div>
                        <SelectorRelq onFormulario={onFormulario} data={dataCorreos}/>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button 
                    className="btn btn-primary" 
                    // onClick={onAccionModal}
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
