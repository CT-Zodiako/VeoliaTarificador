import React from 'react';
import { Modal, Form } from 'react-bootstrap';

const NewApsModal = ({ showNewModal, handleCloseModal, handleSaveNewAps, newAps, setNewAps }) => {
    return (
        <Modal show={showNewModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Nueva APS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="mb-3">
                        <label htmlFor="idsui" className="form-label">ID SUI</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="idsui" 
                            value={newAps.APSA_IDSUI} 
                            onChange={(e) => setNewAps({ ...newAps, APSA_IDSUI: e.target.value })} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            value={newAps.APSA_NOMAPS} 
                            onChange={(e) => setNewAps({ ...newAps, APSA_NOMAPS: e.target.value })} 
                        />
                    </div>
                    <Form.Group controlId="resolucion">
                        <Form.Label>Resolución</Form.Label>
                        <Form.Control
                            as="select"
                            value={newAps.APSA_RESOLUCION}
                            onChange={(e) => setNewAps({ ...newAps, APSA_RESOLUCION: e.target.value })}
                        >
                            <option value="720">720</option>
                            <option value="351">351</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="propio">
                        <Form.Label>Propio</Form.Label>
                        <Form.Control
                            as="select"
                            value={newAps.APSA_PROPIO}
                            onChange={(e) => setNewAps({ ...newAps, APSA_PROPIO: e.target.value })}
                        >
                            <option value="0">No</option>
                            <option value="1">Sí</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="relleno">
                        <Form.Label>Relleno</Form.Label>
                        <Form.Control
                            as="select"
                            value={newAps.APSA_SOLORELL}
                            onChange={(e) => setNewAps({ ...newAps, APSA_SOLORELL: e.target.value })}
                        >
                            <option value="0">No</option>
                            <option value="1">Sí</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="estado">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                            as="select"
                            value={newAps.APSA_ESTADO}
                            onChange={(e) => setNewAps({ ...newAps, APSA_ESTADO: e.target.value })}
                        >
                            <option value="0">No</option>
                            <option value="1">Sí</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="iat">
                        <Form.Label>IAT</Form.Label>
                        <Form.Control
                            as="select"
                            value={newAps.APSA_VIAT}
                            onChange={(e) => setNewAps({ ...newAps, APSA_VIAT: e.target.value })}
                        >
                            <option value="0">No</option>
                            <option value="1">Sí</option>
                        </Form.Control>
                    </Form.Group>

                  
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
                <button className="btn btn-primary" onClick={handleSaveNewAps}>Guardar</button>
            </Modal.Footer>
        </Modal>
    );
};

export default NewApsModal;
