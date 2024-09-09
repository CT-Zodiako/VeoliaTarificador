import { useState } from "react";
import { Modal } from "react-bootstrap";

export const ModalActualizarProy = ({show, cerrar}) => {
    const[formulario, setFormulario] = useState({
        PROYNOMBRE: '',
        PROYDESCRIPCION: '',
        PROYTIPO100: '',
        PROYANNOHAS: '',
        PROYMESHAS: '',
        PROYID: ''
    });

    const onFormulario = (event) => {
        const { name, value } = event.target;
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return(
    <>
        <Modal show={show} onHide={cerrar}>
            <Modal.Header closeButton>
                <Modal.Title>Actualizar PROY</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {/* <label className="form-label">Id</label> */}
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Id" 
                        value={formulario.PROYID}
                        onChange={onFormulario}
                        style={{ width: '10rem' }}
                    />
                </div>
                <div  style={{ display: 'flex' }}>
                    <div>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="APS" 
                            style={{ width: '10rem' }}
                    />
                    </div>
                    <div>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Nombre" 
                            style={{ width: '10rem' }}
                        />
                    </div>
                </div>
                <div>
                    <label className="form-label">Ultimo Calculo de Tarifas</label>
                    <input type="number" className="form-control" style={{ width: '10rem' }}/>
                </div>
                <div>
                    <label className="form-label">Descripción</label>
                    <textarea 
                        type="number" 
                        className="form-control" 
                        rows="5"
                    />
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '40%' }}>
                        <h5 className="form-label">Resolucion</h5>
                        <div>
                            <div>
                                <input type="radio" />
                                <label className="form-label">Ingresos</label>
                            </div>
                            <div>
                                <input type="radio" />
                                <label className="form-label">Sub & Con</label>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '40%' }}>
                        <h5 className="form-label">Horizonte hasta</h5>
                        <input type="number" className="form-control" style={{ width: '10rem' }}/>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button 
                    className="btn btn-secondary"
                    onClick={cerrar}
                >
                    Cerrar
                </button>
                <button 
                    className="btn btn-primary"
                >
                    Guardar
                </button>
            </Modal.Footer>
        </Modal>
    </>
  )
};