import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { UseFormulario } from "../../hooks/useFormulario";
import { SelectorFrecuencia } from "../../../ui/components/SelectorFrecuencia";
import { postVariablesPgirs } from "../../services/informePgirsService";

 export const ModalVariablesPgirs = ({abrir, handleCancelar, frecuencia, apss, annos, mess}) => {
    const {formulario, onFormChange, onDatas} = UseFormulario();
    console.log('formulario', formulario);
    
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
                            value={formulario.LBL}
                            onChange={(event) => onFormChange(event)}
                        />
                        <SelectorFrecuencia   
                            frecuencia={frecuencia}
                            name='selectorLBL'
                            onFormChange={onFormChange}
                        />
                        <h4>CLUS</h4>
                        <Form.Label>CESPED:</Form.Label>
                        <Form.Control
                            type="number"
                            name='CESPED'
                            value={formulario.CESPED}
                            onChange={(event) => onFormChange(event)}
                            // value={smlv}
                            // onChange={(e) => estadoInputs({ target: { value: e.target.value } }, 'smlv')}
                        />
                        <SelectorFrecuencia   
                            frecuencia={frecuencia}
                            name='selectorCESPED'
                            onFormChange={onFormChange}
                        />
                        <Form.Label>PODA:</Form.Label>
                        <Form.Control
                            type="number"
                            name='PODA'
                            value= {formulario.PODA}
                            onChange={(event) => onFormChange(event)}
                        />
                        <SelectorFrecuencia   
                            frecuencia={frecuencia}
                            name='selectorPODA'
                            onFormChange={onFormChange}
                        />
                        <Form.Label>LAVADO:</Form.Label>
                        <Form.Control
                            type="number"
                            name='LAVADO'
                            value={formulario.LAVADO}
                            onChange={(event) => onFormChange(event)}
                        />
                        <SelectorFrecuencia   
                            frecuencia={frecuencia}
                            name='selectorLAVADO'
                            onFormChange={onFormChange}
                        />
                        <Form.Label>PLAYAS:</Form.Label>
                        <Form.Control
                            type="number"
                            name='PLAYAS'
                            value={formulario.PLAYAS}
                            onChange={(event) => onFormChange(event)}
                        />
                        <SelectorFrecuencia   
                            frecuencia={frecuencia}
                            name='selectorPLAYAS'
                            onFormChange={onFormChange}
                        />
                        <Form.Label>INS CESTAS:</Form.Label>
                        <Form.Control
                            type="number"
                            name='INSCESTAS'
                            value={formulario.INSCESTAS}
                            onChange={(event) => onFormChange(event)}
                        />
                        <SelectorFrecuencia   
                            frecuencia={frecuencia}
                            name='selectorINSCESTAS'
                            onFormChange={onFormChange}
                        />
                        <Form.Label>MAN CESTAS:</Form.Label>
                        <Form.Control
                            type="number"
                            name='MANCESTAS'
                            value={formulario.MANCESTAS}
                            onChange={(event) => onFormChange(event)}
                        />
                        <SelectorFrecuencia   
                            frecuencia={frecuencia}
                            name='selectorMANCESTAS'
                            onFormChange={onFormChange}
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