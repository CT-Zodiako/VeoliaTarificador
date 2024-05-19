import React, { useEffect} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { modalHook } from '../hooks/useModalHook';
import { getIndicesCRA } from '../service/indicesCRAService';
import { actualizarIndicesCRA } from '../service/indicesCRAService';
import { useAnnoSelector, useMesSelector } from '../../store/storeSelectors';

export const ModalEditIndiceCRA = ({ show, handleClose ,actualizarTabla}) => {

    const anno = useAnnoSelector((state) => state.anno);
    const mes = useMesSelector((state) => state.mes);
    const { data, setData, estadoInputs, prepararDatosParaBackend } = modalHook({
        ipc: "",
        smlv: "",
        ipcc: "",
        ioexp: ""
    });


    const { ipc, smlv, ipcc, ioexp } = data;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getIndicesCRA(anno, mes);

                if (!result) {
                    return;
                }
                const newData = { ...data }; 
                result.forEach(item => {
                    if (item.PARA_INDICE20011 === 1) {
                        newData.ipc = item.INDI_VALOR;
                    }
                    if (item.PARA_INDICE20011 === 2) {
                        newData.smlv = item.INDI_VALOR;
                    }
                    if (item.PARA_INDICE20011 === 3) {
                        newData.ipcc = item.INDI_VALOR;
                    }
                    if (item.PARA_INDICE20011 === 4) {
                        newData.ioexp = item.INDI_VALOR;                        
                    }
                });
                setData(newData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [setData, anno, mes]);

  
    

    const handleCancelar = () => {
        handleClose();
    };


    const handleGuardar = async () => {
        actualizarTabla();
        handleClose();
        const datosEditIndice = prepararDatosParaBackend();
        await actualizarIndicesCRA(datosEditIndice);        
    };

    return (
        <>
            <Modal show={show} onHide={handleCancelar}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Indice</Modal.Title>
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
