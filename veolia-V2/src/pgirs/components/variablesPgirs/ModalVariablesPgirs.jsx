import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { UseFormulario } from "../../hooks/useFormulario";
import { SelectorFrecuencia } from "../../../ui/components/SelectorFrecuencia";
import { postVariablesPgirs } from "../../services/informePgirsService";

 export const ModalVariablesPgirs = ({abrir, handleCancelar, apss, annos, mess}) => {
    const {formulario, onFormChange, onFormFrecuencia, onDatas} = UseFormulario();
    console.log('formulario PGIRS: ', formulario);
    
    useEffect(() => {
        onDatas();
    },[apss, annos, mess]);

    const onEnviarData = async () => {
        try {
            await postVariablesPgirs(formulario);
        }
        catch (error) {
            console.error(error);
        }
    }

  return(
    <>
        <Modal show={abrir} onHide={handleCancelar}>
            <Modal.Header closeButton>
                <Modal.Title>Nuevas Variables PGIRS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="recipient-name">
                        <h4>Barridos</h4>
                        <Form.Label>LBL:</Form.Label>
                        <Form.Control
                            type="number"
                            name='LBL'
                            value={formulario.data[0].valor}
                            onChange={(event) => onFormChange(0,event)}
                        />
                        <SelectorFrecuencia   
                            index={0}
                            onFormFrecuencia={onFormFrecuencia}
                        />
                        <h4>CLUS</h4>
                        <Form.Label>CESPED:</Form.Label>
                        <Form.Control
                            type="number"
                            name='CESPED'
                            value={formulario.data[1].valor}
                            onChange={(event) => onFormChange(1,event)}
                        />
                        <SelectorFrecuencia   
                            index={1}
                            onFormFrecuencia={onFormFrecuencia}
                        />
                        <Form.Label>PODA:</Form.Label>
                        <Form.Control
                            type="number"
                            name='PODA'
                            value={formulario.data[2].valor}
                            onChange={(event) => onFormChange(2,event)}
                        />
                        <SelectorFrecuencia   
                            index={2}
                            onFormFrecuencia={onFormFrecuencia}
                        />
                        <Form.Label>LAVADO:</Form.Label>
                        <Form.Control
                            type="number"
                            name='LAVADO'
                            value={formulario.data[3].valor}
                            onChange={(event) => onFormChange(3,event)}
                        />
                        <SelectorFrecuencia   
                            index={3}
                            onFormFrecuencia={onFormFrecuencia}
                        />
                        <Form.Label>PLAYAS:</Form.Label>
                        <Form.Control
                            type="number"
                            name='PLAYAS'
                            value={formulario.data[4].valor}
                            onChange={(event) => onFormChange(4,event)}
                        />
                        <SelectorFrecuencia   
                            index={4}
                            onFormFrecuencia={onFormFrecuencia}
                        />
                        <Form.Label>INS CESTAS:</Form.Label>
                        <Form.Control
                            type="number"
                            name='INSCESTAS'
                            value={formulario.data[5].valor}
                            onChange={(event) => onFormChange(5,event)}
                        />
                        <SelectorFrecuencia   
                            index={5}
                            onFormFrecuencia={onFormFrecuencia}
                        />
                        <Form.Label>MAN CESTAS:</Form.Label>
                        <Form.Control
                            type="number"
                            name='MANCESTAS'
                            value={formulario.data[6].valor}
                            onChange={(event) => onFormChange(6,event)}
                        />
                        <SelectorFrecuencia   
                            index={6}
                            onFormFrecuencia={onFormFrecuencia}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    variant="danger" 
                    onClick={handleCancelar}
                >
                    Cancelar
                </Button>
                <Button 
                    variant="success" 
                    onClick={onEnviarData}
                >
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
};