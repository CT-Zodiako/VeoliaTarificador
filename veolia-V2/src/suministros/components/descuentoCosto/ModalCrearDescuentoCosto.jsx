import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { SelectorDescuentoCosto } from "./SelectorDescuentoCosto";

 export const ModalCrearDescuentoCosto = ({show, onCerrarModal, data, onAgregarDescuentoCosto}) => {
    const [formulario, setFormulario] = useState({
        APSA_ID: 0, 
        DESC_ANNO: 0, 
        DESC_MES: 0, 
        PARA_COSTO20010: 0, 
        DESC_VALOR: 0
    });
    console.log('formulario enviar: ', formulario);
    
    const onFormChange = (event) => {
        const {name, value} = event.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    const onEnviarDescuentoCosto = () => {
        onAgregarDescuentoCosto(formulario);
        onCerrarModal();
    }

    return(
    <>
        <Modal show={show} onHide={onCerrarModal}>
            <Modal.Header>
                <Modal.Title>Crear Descuento Costo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="recipient-name">
                        <Form.Label>Costo:</Form.Label>
                        <SelectorDescuentoCosto
                            onFormChange={onFormChange}
                            data={data}
                        />
                        <Form.Label>Descuento:</Form.Label>
                        <Form.Control
                            type="number"
                            name='DESC_VALOR'
                            value={formulario.DESC_VALOR}
                            onChange={onFormChange}
                        />
                    </Form.Group>    
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    variant="secondary" 
                    onClick={onCerrarModal}
                >
                    Cerrar
                </Button>
                <Button 
                    variant="primary" 
                    onClick={onEnviarDescuentoCosto}
                >
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
};