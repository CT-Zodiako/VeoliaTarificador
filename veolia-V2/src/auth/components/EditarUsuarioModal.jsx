import { Form,Modal } from "react-bootstrap";



export const EditarUsuario = ({selectedItem, handleCloseModal, handleSaveChanges, setSelectedItem}) => {


    return(
        <Modal show={true} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <label htmlFor="id" className="form-label">Id</label>
                    <input type="text" className="form-control" id="id" value={selectedItem.sisuId} readOnly/>
                </div>

                <div>
                    <label htmlFor="name" className="form-label">Nombres</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        value={selectedItem.sisuNombres} 
                        onChange={(e) => setSelectedItem({ ...selectedItem, sisuNombres: e.target.value })} 
                    />
                </div>

                <div>
                    <label htmlFor="lastname" className="form-label">Apellidos</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="lastname" 
                        value={selectedItem.sisuApellidos} 
                        onChange={(e) => setSelectedItem({ ...selectedItem, sisuApellidos: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="form-label">Correo</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="email" 
                        value={selectedItem.sisuCorreo} 
                        onChange={(e) => setSelectedItem({ ...selectedItem, sisuCorreo: e.target.value })}
                    />
                </div>
                <Form.Group controlId="estado">
                <Form.Label>Estado</Form.Label>
                <Form.Control
                    as="select"
                    value={selectedItem.sisuEstado}
                    onChange={(e) => setSelectedItem({ ...selectedItem, EMPR_ESTADO: e.target.value })}
                >
                    <option value="0">Inactivo</option>
                    <option value="1">Activo</option>
                </Form.Control>
            </Form.Group>
            </Modal.Body>

            <Modal.Footer>
                <button className="btn btn-secondary" onClick={handleCloseModal}>Cancelar</button>
                <button className="btn btn-primary" onClick={handleSaveChanges}>Guardar Cambios</button>
            </Modal.Footer>
        </Modal>

    )
}