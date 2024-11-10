import { useEffect} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { modalHook } from '../../hooks/useModalHook';
import { actualizarIndicesCRA, getIndicesCRA } from '../../service/indicesCRAService';
import { useAnnoSelector, useMesSelector } from '../../../store/storeSelectors';

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
            <Modal show={show} onHide={handleCancelar} centered>
                <Modal.Header closeButton className="custom-navbar">
                    <Modal.Title>Editar Índice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">IPC:</Form.Label>
                            <Form.Control
                                type="number"
                                name="ipc"
                                value={ipc}
                                onChange={(e) => estadoInputs({ target: { value: e.target.value } }, 'ipc')}
                                className="mb-2"
                                placeholder="Ingrese el IPC"
                            />
                            <Form.Label className="fw-bold">SMLV:</Form.Label>
                            <Form.Control
                                type="number"
                                name="smlv"
                                value={smlv}
                                onChange={(e) => estadoInputs({ target: { value: e.target.value } }, 'smlv')}
                                className="mb-2"
                                placeholder="Ingrese el SMLV"
                            />
                            <Form.Label className="fw-bold">IPCC:</Form.Label>
                            <Form.Control
                                type="number"
                                name="ipcc"
                                value={ipcc}
                                onChange={(e) => estadoInputs({ target: { value: e.target.value } }, 'ipcc')}
                                className="mb-2"
                                placeholder="Ingrese el IPCC"
                            />
                            <Form.Label className="fw-bold">IOEXP:</Form.Label>
                            <Form.Control
                                type="number"
                                name="ioexp"
                                value={ioexp}
                                onChange={(e) => estadoInputs({ target: { value: e.target.value } }, 'ioexp')}
                                className="mb-2"
                                placeholder="Ingrese el IOEXP"
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
