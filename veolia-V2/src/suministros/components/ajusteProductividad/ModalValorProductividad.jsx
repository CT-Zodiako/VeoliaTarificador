import { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useAnnoSelector, useApsSelector, useMesSelector } from "../../../store/storeSelectors";

 export const ModalValorProductividad = ({show, onCerrarModal, ajusteProductividad, onServicioAjustes, fetchData}) => {
    const aps = useApsSelector(state => state.aps);
    const anno = useAnnoSelector((state) => state.anno);
    const mes = useMesSelector((state) => state.mes);
    const [dataProductividad, setDataProductividad] = useState({});
    
    const onEstadoValorProductividad = (event) => {
        const {name, value} = event.target;
            setDataProductividad({
                ...dataProductividad,
                [name]: value
            });
    }

    const onEnviarProductividad = async() => {
        if (dataProductividad.PROD_VALOR >= -1 && dataProductividad.PROD_VALOR <= 0) {
            try {
                await onServicioAjustes(dataProductividad)
                await fetchData();
                onCerrarModal();
            } catch (error) {
                console.error(error);
            }
        } else {
            alert('numero debe estar entre -1 y 0');
        }
    }

    useEffect(() => {
        setDataProductividad(ajusteProductividad);
    }, [anno, aps, mes, ajusteProductividad]);

    return(
    <>
        <Modal show={show} onHide={onCerrarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Valor Productividad</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="recipient-name">
                        <Form.Label>Valor:</Form.Label>
                        <Form.Control
                            type="number"
                            name='PROD_VALOR'
                            value={dataProductividad.PROD_VALOR}
                            onChange={onEstadoValorProductividad}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button 
                    className="btn btn-success" 
                    onClick={onEnviarProductividad}
                >
                    Guardar
                </button>
                <button 
                    className="btn btn-danger" 
                    onClick={onCerrarModal}
                >
                    Cancelar
                </button>
            </Modal.Footer>
        </Modal>
    </>
  )
};