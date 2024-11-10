import React, { useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import  { NewIndiceCRAModalHook } from '../../hooks/useNewIndiceCRAModalHook'
import { crearIndicesCRA } from '../../service/indicesCRAService';

export const  ModalNewIndiceCRA = ({ show, handleClose }) => {
    const { dataNewIndiceCRA, setData, estadoInputs ,prepararDatosParaBackend} = NewIndiceCRAModalHook({
        ipc: "",
        smlv: "",
        ipcc: "",
        ioexp: ""
    });

    const { ipc, smlv, ipcc, ioexp } = dataNewIndiceCRA;

    useEffect(() => {
        if (!show) {
            setData({
                ipc: "",
                smlv: "",
                ipcc: "",
                ioexp: ""
            });
        }
    }, [show]);
    
    const handleCancelar = () => {
        handleClose();
    };

    const nuevoIndiceCRA = prepararDatosParaBackend();

    const handleGuardar = async () => {
        await crearIndicesCRA(nuevoIndiceCRA);
        handleClose();
    };

    return (
        <>
            <Modal show={show} onHide={handleCancelar}>
                <Modal.Header closeButton className="custom-navbar">
                    <Modal.Title>Registrar Nuevo Indice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="recipient-name">
                            <Form.Label>IPC:</Form.Label>
                            <Form.Control
                                className="mb-2"
                                type="number"
                                name='ipc'
                                value={ipc}
                                onChange={(e) => estadoInputs({ target: { value: e.target.value } }, 'ipc')}
                            />
                            <Form.Label>SMLV:</Form.Label>
                            <Form.Control
                                className="mb-2"
                                type="number"
                                name='smlv'
                                value={smlv}
                                onChange={(e) => estadoInputs({ target: { value: e.target.value } }, 'smlv')}
                            />
                            <Form.Label>IPCC:</Form.Label>
                            <Form.Control
                                className="mb-2"
                                type="number"
                                name='ipcc'
                                value={ipcc}
                                onChange={(e) => estadoInputs({ target: { value: e.target.value } }, 'ipcc')}
                            />
                            <Form.Label>IOEXP:</Form.Label>
                            <Form.Control
                                className="mb-2"
                                type="number"
                                name='ioexp'
                                value={ioexp}
                                onChange={(e) => estadoInputs({ target: { value: e.target.value } }, 'ioexp')}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-end">
                    <Button variant="danger" onClick={handleCancelar} className="me-2">
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
