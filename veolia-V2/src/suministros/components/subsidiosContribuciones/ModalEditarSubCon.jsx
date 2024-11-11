import { Button, Form, Modal } from "react-bootstrap";

 export const ModalEditarSubCon = ({ data, showModal, handleCloseModal, handleChange, handleSave }) => {
    return(
    <>
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton className="custom-navbar">
                <Modal.Title>Editar Índices</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {data.map((item, index) => (
                    <Form key={item.SUCO_ID}>
                        <Form.Group className="row">
                            <Form.Label className="col-sm-3">Clase</Form.Label>
                            <div className="col-sm-9">
                                <Form.Control
                                    type="number"
                                    name="CLAS_CLASE"
                                    value={item.CLAS_CLASE}
                                    onChange={(e) => handleChange(index, 'CLAS_CLASE', e.target.value)}
                                    className="mb-2"
                                    disabled
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="row">
                            <Form.Label className="col-sm-3">Valor</Form.Label>
                            <div className="col-sm-9">
                                <Form.Control
                                    type="number"
                                    name="SUCO_VALOR"
                                    value={item.SUCO_VALOR}
                                    onChange={(e) => handleChange(index, 'SUCO_VALOR', e.target.value)}
                                    className="mb-2"    
                                />
                            </div>
                        </Form.Group>
                        <hr />
                    </Form>
                ))}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleCloseModal}>Cerrar</Button>
                <Button variant="success" onClick={handleSave}>Guardar Cambios</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
};