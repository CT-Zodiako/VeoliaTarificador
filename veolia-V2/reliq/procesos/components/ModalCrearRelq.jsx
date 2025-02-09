import { useState } from "react";
import { Modal } from "react-bootstrap";
import { SelectDesdeHasta } from "./SelectDesdeHasta";
// import { SelectorAps } from "./SelectorAps";

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
    console.log(formulario);

    const onFormularioAps = (value) => {
        setFormulario({
            ...formulario,
            APSAID: value
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

    return(
    <>
        <Modal show={show} onHide={cerrar}>
            <Modal.Header closeButton>
                <Modal.Title>Actualizar PROY</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div>
                        {/* <SelectorAps onFormularioAps={onFormularioAps}/> */}
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
                    />
                </div>
                <div>
                    <input 
                        type="file" 
                    />
                </div>
                <div>

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
