import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { SelectorAPS } from "./SelectorAps.jsx";
import { ProyResolucion } from "./ProyResolucion.jsx";
import { SelectFecha } from "./SelectFecha.jsx";

export const ModalActualizarProy = ({show, cerrar, editar='', actualizar}) => {
    const[formulario, setFormulario] = useState(
        editar === '' ? 
        {
            APS: null, 
            PROYNOMBRE: "",
            PROYDESCRIPCION: "", 
            PROYTIPO100: null, 
            PROYANNODES: null, 
            PROYMESDES: null, 
            PROYANNOHAS: null , 
            PROYMESHAS: null,
        } :
        {
            PROYNOMBRE: '',
            PROYDESCRIPCION: '',
            PROYTIPO100: '',
            PROYANNOHAS: '',
            PROYMESHAS: '',
            PROYID: ''
        }
    );

    const onFormulario = (event) => {
        const { name, value } = event.target;
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    const onAccionModal = (formulario) => {
        actualizar(formulario);
    }

    useEffect(() => {
        setFormulario({
            PROYNOMBRE: editar.PROYNOMBRE,
            PROYDESCRIPCION: editar.PROYDESCRIPCION,
            PROYTIPO100: editar.PROYTIPO100,
            PROYANNOHAS: editar.PROYANNOHAS,
            PROYMESHAS: editar.PROYMESHAS,
            PROYID: editar.PROYID
        })
    }, [editar]);

    return(
    <>
        <Modal show={show} onHide={cerrar}>
            <Modal.Header closeButton>
                <Modal.Title>Actualizar PROY</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Id" 
                        value={formulario.PROYID}
                        style={{ width: '10rem' }}
                        readOnly
                    />
                </div>
                <div  style={{ display: 'flex' }}>
                    <div>
                        <SelectorAPS aps={editar.APS}/>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="formulario.PROYNOMBRE"
                            className="form-control" 
                            placeholder="Nombre" 
                            value={formulario.PROYNOMBRE}
                            onChange={onFormulario}
                            style={{ width: '15rem' }}
                        />
                    </div>
                </div>
                <div>
                    <label className="form-label">Ultimo Calculo de Tarifas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={editar.DESDE}
                        style={{ width: '10rem' }}
                        readOnly
                    />
                </div>
                <div>
                    <label className="form-label">Descripción</label>
                    <textarea 
                        type="number" 
                        name="formulario.PROYDESCRIPCION"
                        className="form-control" 
                        value={formulario.PROYDESCRIPCION}
                        onChange={onFormulario}
                        rows="5"
                    />
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '40%' }}>
                        <h5 className="form-label">Resolucion</h5>
                        <ProyResolucion resolucion={formulario.PROYTIPO100}/>
                    </div>
                    <div style={{ width: '40%' }}>
                        <h5 className="form-label">Horizonte hasta</h5>
                        <SelectFecha />
                        {/* <input type="number" className="form-control" style={{ width: '10rem' }}/> */}
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
                    onClick={() => onAccionModal(formulario)}
                >
                    {
                        editar === '' ? 'Crear' : 'Actualizar'
                    }
                </button>
            </Modal.Footer>
        </Modal>
    </>
  )
};