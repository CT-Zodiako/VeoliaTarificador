import React, { useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { modalHook } from '../hooks/useModalHook';
import { crearIndicesCRA } from '../service/indicesCRAService';

export const ModalNewIndiceCRA = ({ show, handleClose }) => {
    const { data, setData, estadoInputs ,prepararDatosParaBackend} = modalHook({
        ipc: "",
        smlv: "",
        ipcc: "",
        ioexp: ""
    });

    const { ipc, smlv, ipcc, ioexp } = data;

    useEffect(() => {
        if (!show) {
            setData({
                ipc: "",
                smlv: "",
                ipcc: "",
                ioexp: ""
            });
        }
    }, [show, setData]);
    

    const handleCancelar = () => {
        handleClose();
    };

    const nuevoIndiceCRA = prepararDatosParaBackend();

    const handleGuardar = async () => {
        // Aquí puedes enviar los datos del formulario a la API o realizar cualquier otra acción necesaria
        handleClose();
        await crearIndicesCRA(nuevoIndiceCRA);
        
        
    };

    return (
        <>
            <Modal show={show} onHide={handleCancelar}>
                <Modal.Header closeButton>
                    <Modal.Title>Registrar Nuevo Indice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="recipient-name">
                            <Form.Label>IPC:</Form.Label>
                            <Form.Control
                                type="number"
                                name='ipc'
                                value={ipc}
                                onChange={(e) => estadoInputs({ target: { value: e.target.value } }, 'ipc')}
                            />
                            <Form.Label>SMLV:</Form.Label>
                            <Form.Control
                                type="number"
                                name='smlv'
                                value={smlv}
                                onChange={(e) => estadoInputs({ target: { value: e.target.value } }, 'smlv')}
                            />
                            <Form.Label>IPCC:</Form.Label>
                            <Form.Control
                                type="number"
                                name='ipcc'
                                value={ipcc}
                                onChange={(e) => estadoInputs({ target: { value: e.target.value } }, 'ipcc')}
                            />
                            <Form.Label>IOEXP:</Form.Label>
                            <Form.Control
                                type="number"
                                name='ioexp'
                                value={ioexp}
                                onChange={(e) => estadoInputs({ target: { value: e.target.value } }, 'ioexp')}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCancelar}>
                        Cancelar
                    </Button>
                    <Button variant="success" onClick={handleGuardar}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
