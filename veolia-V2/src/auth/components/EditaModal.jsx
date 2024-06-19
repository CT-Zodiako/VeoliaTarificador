import { Modal, Form } from 'react-bootstrap';

const EditModal = ({ selectedItem, handleCloseModal, handleSaveChanges, setSelectedItem }) => {
    return (
        <Modal show={true} onHide={handleCloseModal}>
        <Modal.Header closeButton>
            <Modal.Title>Editar APS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
{selectedItem && (
    <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Id</label>
                <input type="text" className="form-control" id="name" value={selectedItem.APSA_ID} readOnly />
            </div>
            <div className="mb-3">
                <label htmlFor="idsui" className="form-label">ID SUI</label>
                <input 
                type="text" 
                className="form-control" 
                id="idsui" 
                value={selectedItem.APSA_IDSUI} 
                onChange={(e) => setSelectedItem({ ...selectedItem, APSA_IDSUI: e.target.value })} 
                />
            </div>

            <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input 
                type="text" 
                className="form-control" 
                id="name" 
                value={selectedItem.APSA_NOMAPS} 
                onChange={(e) => setSelectedItem({ ...selectedItem, APSA_NOMAPS: e.target.value })} 
            />
            </div>

            <Form.Group controlId="resolucion">
                <Form.Label>Resolución</Form.Label>
                <Form.Control
                    as="select"
                    value={selectedItem.APSA_RESOLUCION}
                    onChange={(e) => setSelectedItem({ ...selectedItem, APSA_RESOLUCION: e.target.value })}
                >
                    <option value="720">720</option>
                    <option value="351">351</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="propio">
                <Form.Label>Propio</Form.Label>
                <Form.Control
                    as="select"
                    value={selectedItem.APSA_PROPIO}
                    onChange={(e) => setSelectedItem({ ...selectedItem, APSA_PROPIO: e.target.value })}
                >
                    <option value="0">No</option>
                    <option value="1">Sí</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="relleno">
                <Form.Label>Relleno</Form.Label>
                <Form.Control
                    as="select"
                    value={selectedItem.APSA_SOLORELL}
                    onChange={(e) => setSelectedItem({ ...selectedItem, APSA_SOLORELL: e.target.value })}
                >
                    <option value="0">No</option>
                    <option value="1">Sí</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="estado">
                <Form.Label>Estado</Form.Label>
                <Form.Control
                    as="select"
                    value={selectedItem.APSA_ESTADO}
                    onChange={(e) => setSelectedItem({ ...selectedItem, APSA_ESTADO: e.target.value })}
                >
                    <option value="0">Inactivo</option>
                    <option value="1">Activo</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="iat">
                <Form.Label>IAT</Form.Label>
                <Form.Control
                    as="select"
                    value={selectedItem.APSA_VIAT}
                    onChange={(e) => setSelectedItem({ ...selectedItem, APSA_VIAT: e.target.value })}
                >
                    <option value="0">No</option>
                    <option value="1">Sí</option>
                </Form.Control>
            </Form.Group>
        </form>
    )}
    </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
                <button className="btn btn-primary" onClick={handleSaveChanges}>Guardar Cambios</button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditModal;
